import http from 'k6/http';

import { sleep } from 'k6';

export const options = {
  vus: 10,
  duration: '10s',
};

export default function () {
  http.get('https://orders-andresc-owggo4.5sc6y6-3.usa-e2.cloudhub.io/orders');
}
