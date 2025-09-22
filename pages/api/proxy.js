export default async function handler(req, res) {
  const url = req.query.url;
  if (!url) {
    res.status(400).json({ error: 'Missing url parameter' });
    return;
  }

  try {
    const response = await fetch(url);
    if (!response.ok) {
      res.status(response.status).json({ error: 'Failed to fetch the audio' });
      return;
    }

    const arrayBuffer = await response.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    res.setHeader('Content-Type', 'audio/mpeg');
    res.setHeader('Cache-Control', 's-maxage=86400, stale-while-revalidate');
    res.send(buffer);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
}
