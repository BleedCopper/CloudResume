import type { Counter } from '@/models/counter'

const prod = 'https://tf-cloudresume-fnc.azurewebsites.net/api/updateviewcounttrigger'
const local = 'http://localhost:7071/api/UpdateViewCountTrigger'

const fetchCounter = (): Promise<Counter> => {
  return fetch(prod).then((resp) => {
    return resp.json()
  })
}

export { fetchCounter }
