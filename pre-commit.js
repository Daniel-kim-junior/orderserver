// import { zlib } from 'zlib';
// import { Buffer } from 'buffer';

const url = 'http://localhost:50001';
const query = `{
  mutation: {
    
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
