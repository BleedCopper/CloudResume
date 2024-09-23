import { Counter } from '../models/counter';

const prod = 'http://localhost:5000/api/viewCount';

const fetchCounter = (): Promise<Counter> => {
  return fetch(prod, { method: 'POST' }).then((resp) => {
    return resp.json();
  });
};

export { fetchCounter };
