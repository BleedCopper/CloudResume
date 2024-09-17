const prod = "https://o92seim3ef.execute-api.ap-southeast-2.amazonaws.com/";
// const local = "";

const fetchCounter = (): Promise<number> => {
  return fetch(prod).then((resp) => {
    return resp.json() ?? 0;
  });
};

export { fetchCounter };
