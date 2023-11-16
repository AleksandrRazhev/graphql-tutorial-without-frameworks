const url = "https://graphqlzero.almansi.me/api";

export const makeRequest = async (query: string) => {
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ query }),
  });
  return res.json();
};
