export async function onRequest(context) {
  const { request, env } = context;
  const url = new URL(request.url);

  if (!url.pathname.toLowerCase().endsWith('.mp4')) {
    return env.ASSETS.fetch(request);
  }

  // Fetch clean full asset from Cloudflare Pages static store (strip Range so ASSETS returns full bytes reliably)
  const assetReq = new Request(url.toString(), { method: 'GET' });
  const assetResp = await env.ASSETS.fetch(assetReq);
  if (!assetResp.ok) {
    return assetResp;
  }

  const bytes = new Uint8Array(await assetResp.arrayBuffer());
  const total = bytes.byteLength;
  const baseHeaders = {
    'Content-Type': 'video/mp4',
    'Accept-Ranges': 'bytes',
    'Access-Control-Allow-Origin': '*',
    'Cache-Control': 'public, max-age=86400'
  };

  if (request.method === 'HEAD') {
    return new Response(null, {
      status: 200,
      headers: {
        ...baseHeaders,
        'Content-Length': String(total)
      }
    });
  }

  const rangeHeader = request.headers.get('Range') || request.headers.get('range');
  if (!rangeHeader || !rangeHeader.startsWith('bytes=')) {
    return new Response(bytes, {
      status: 200,
      headers: {
        ...baseHeaders,
        'Content-Length': String(total)
      }
    });
  }

  const parts = rangeHeader.replace(/bytes=/i, '').split('-');
  const start = parseInt(parts[0], 10);
  const end = parts[1] ? Math.min(total - 1, parseInt(parts[1], 10)) : total - 1;

  if (Number.isNaN(start) || start < 0 || start >= total || end < start) {
    return new Response(null, {
      status: 416,
      headers: {
        ...baseHeaders,
        'Content-Range': `bytes */${total}`
      }
    });
  }

  // Zero-copy view into the underlying ArrayBuffer
  const chunk = bytes.subarray(start, end + 1);
  return new Response(chunk, {
    status: 206,
    headers: {
      ...baseHeaders,
      'Content-Range': `bytes ${start}-${end}/${total}`,
      'Content-Length': String(chunk.byteLength)
    }
  });
}
