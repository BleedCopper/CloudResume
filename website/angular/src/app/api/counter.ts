// const local = 'http://localhost:5000/api/viewCount';
const prod = 'https://tf-cloud-backend-eiwllvcn2q-ue.a.run.app/api/viewCount';

const fetchCounter = async (): Promise<any> => {
  return fetch(prod, { method: 'POST' }).then((resp) => {
    return resp.json();
  });
};

export { fetchCounter };
