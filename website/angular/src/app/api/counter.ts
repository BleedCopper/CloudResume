const prod = '';

const fetchCounter = (): Promise<number> => {
  return fetch(prod).then((resp) => {
    return resp.json() ?? 0;
  });
};

export { fetchCounter };
