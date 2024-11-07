// /api/proxy.js

import fetch from 'node-fetch';

export default async (req, res) => {
  const response = await fetch('https://api.medicaments-dz.com/pharma/_search', {
    method: req.method,
    headers: {
      ...req.headers,
      Authorization: 'Basic ZWxhc3RpYzpuX1d5Z3JXVnVqUU1pZTY1emdIdw==',
      'Content-Type': 'application/json',
    },
    body: req.method === 'POST' ? JSON.stringify(req.body) : undefined,
  });

  const data = await response.json();
  res.status(response.status).json(data);
};
