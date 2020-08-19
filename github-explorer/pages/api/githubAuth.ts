import { NextApiRequest, NextApiResponse } from 'next';
import config from '../../token';

export default (req: NextApiRequest, res: NextApiResponse) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ github_token: config.github_token }));
};
