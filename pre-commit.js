import * as zlib from 'zlib';
import * as fs from 'fs';
import fetch from 'node-fetch';

const filePath = '../package.json';
const url = 'http://localhost:50001';
const email = process.argv[2] || 'now20412041@gmail.com';
const KEY = process.argv[3] || '';

fs.readFile(filePath, 'utf-8', (err, data) => {
  if (err) {
    console.log(err);
    return;
  }

  const compressedData = zlib.deflateSync(data).toString('base64') || '';

  const query = `
    query Upload {
      uploadCompressedDep(email: "${email}", compressedString: "${compressedData}", APIKey: "${KEY}") {

      }
    }
  `;

  async function fetchData() {
    await fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        query,
      }),
    });
  }

  fetchData();
});
