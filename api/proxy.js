// /api/proxy.js

import fetch from 'node-fetch';

export default async (req, res) => {
  const path = req.url.replace('/api/proxy', ''); // Get the path after /api/proxy
  const url = `https://api.medicaments-dz.com${path}`;

  try {
    const response = await fetch(url, {
      method: req.method,
      headers: {
        Authorization: 'Basic ZWxhc3RpYzpuX1d5Z3JXVnVqUU1pZTY1emdIdw==',
        'Content-Type': 'application/json',
      },
      body: req.method === 'POST' ? JSON.stringify(req.body) : undefined,
    });

    const data = await response.json();
    res.status(response.status).json(data);
  } catch (error) {
    console.error("Error connecting to external API:", error);
    res.status(500).json({ error: 'Error connecting to API' });
  }
};
