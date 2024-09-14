import { Counter } from "../models/counter";

const prod = "";
const local = "";

const fetchCounter = (): Promise<Counter> => {
  return fetch(prod).then((resp) => {
    return resp.json();
  });
};

export { fetchCounter };
