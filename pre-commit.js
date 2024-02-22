import { zlib } from 'zlib';
const url = 'http://localhost:50001';

const data =
  zlib.deflateSync(process.env.DEPENDENCY_DATA).toString('base64') ||
  'default data';
const email = process.argv[2] || 'now20412041@gmail.com';
const query = `
  mutation Upload {
    uploadCompressedDep(compressedString: "${data}", email: "${email}") {
      
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
