import type { NextApiRequest, NextApiResponse } from 'next';
import cities, { Cities } from '@data/cities';

export default function handler(req: NextApiRequest, res: NextApiResponse<Cities | null>) {
  const { body, method } = req;
  const query = body.params.query;

  if (req.method === 'POST') {
    setTimeout(() => {
      if (query.toLowerCase() === 'fail') {
        res.status(500).json(null);
        return;
      } else {
        const filteredCities = cities.filter(([city]) =>
          query
            .toLowerCase()
            .replace(/[^a-zA-Z0-9]+/g, '')
            .split('')
            .every((letter: string) => city.toLowerCase().includes(letter))
        );
        res.status(200).json(filteredCities);
      }
    }, 1986);
  } else {
    res.status(405).end(`Method ${method} Not Allowed`);
  }
}
