import http from 'k6/http';
import { sleep } from 'k6';

var testurl = process.env.TEST_URL;

export const options = {
  duration: '1m',
  vus: 50,
  thresholds: {
    http_req_duration: ['p(95)<500'],
  },
};
export default function () {
  const res = http.get(testurl);
  sleep(1);
}