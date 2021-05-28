const API_URL = process.env.API_URL;
async function fetchGraphQL(query: any, { variables }: { variables?: any }) {
  const headers = { "Content-Type": "application/json" };

  if (process.env.WORDPRESS_AUTH_REFRESH_TOKEN) {
    headers[
      "Authorization"
    ] = `Bearer ${process.env.WORDPRESS_AUTH_REFRESH_TOKEN}`;
  }

  const res = await fetch(API_URL, {
    method: "POST",
    headers,
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const json = await res.json();
  if (json.errors) {
    console.error(json.errors);
    throw new Error("Failed to fetch API");
  }
  return json.data;
}

export async function getAvator() {
  const res = await fetch(
    "https://pearl-portfolio-server.herokuapp.com/files/name/avatar.jpg"
  );
  const avator = await res.json();
  return avator;
}

export async function getAboutTag() {
  const res = await fetch(
    "https://pearl-portfolio-server.herokuapp.com/files/name/about_tag.jpg"
  );
  const about = await res.json();
  return about;
}
