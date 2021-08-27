import { print } from 'graphql/language/printer';

const API_URL = `${process.env.apiUrl || 'http://localhost:1337'}`;

export const fetchAPI = async (query, { variables } = {}) => {
  const res = await fetch(`${API_URL}/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: print(query),
      variables,
    }),
  });

  const json = await res.json();
  if (json.errors) {
    console.error(json.errors);
    throw new Error('Failed to fetch API');
  }
  return json.data;
};

export default fetchAPI;
