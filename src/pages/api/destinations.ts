import type { NextApiRequest, NextApiResponse } from 'next';
import cities from '@data/cities';
import haversine from 'haversine-distance';
import { Destination } from '@dataTypes/types';

export default function handler(req: NextApiRequest, res: NextApiResponse<Destination[] | null>) {
  const { body, method } = req;
  const query = body.params.query;

  if (req.method === 'POST') {
    setTimeout(() => {
      if (!query) {
        res.status(500).json(null);
        return;
      }

      const destinations: string[] = query.toLowerCase().split(',');
      const approvedDestinations = cities.filter(([city]) =>
        destinations.includes(city.toLowerCase())
      );

      if (
        destinations.length < 1 ||
        approvedDestinations.length !== destinations.length ||
        destinations.includes('dijon')
      ) {
        res.status(500).json(null);
        return;
      }

      const sortedDestinations = destinations.map(
        (destination) => cities.filter(([city]) => city.toLowerCase() === destination)[0]
      );

      const results: Destination[] = [];

      sortedDestinations.forEach((destination, index) => {
        const currentDestination = destination;
        const nextDestination = sortedDestinations[index + 1];
        const resultDestination: Destination = {
          city: currentDestination[0]
        };

        if (nextDestination) {
          resultDestination.distance = haversine(
            { lat: currentDestination[1], lon: currentDestination[2] },
            { lat: nextDestination[1], lon: nextDestination[2] }
          );
          if (resultDestination.distance < 0) {
            res.status(500).json(null);
            return;
          }
        }

        results.push(resultDestination);
      });

      res.status(200).json(results);
    }, 1986);
  } else {
    res.status(405).end(`Method ${method} Not Allowed`);
  }
}
