// eslint-disable-next-line @typescript-eslint/no-var-requires
const zlib = require('zlib');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require('fs');
// import fetch from 'node-fetch';

const filePath = '../package.json';
const url = 'http://localhost:50001';
const email = process.argv[2] || 'now20412041@gmail.com';

fs.readFile(filePath, 'utf-8', async (err, data) => {
  if (err) {
    console.log(err);
    return;
  }

  const compressedData = zlib.deflateSync(data).toString('base64') || '';

  const query = `
    query Upload {
      uploadCompressedDep(email: "${email}", compressedString: "${compressedData}") {

      }
    }
  `;
  async function fetchData() {
    const rst = await fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        query,
      }),
    });
    return rst;
  }

  const rst = await fetchData();
  console.log(rst);
});
