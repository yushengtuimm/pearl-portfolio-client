import { FileInfo } from "./dto";
import { HttpException } from "./core";

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

function handleErrors<T>(response: Response): Promise<T> | null {
  if (response.status >= 200 && response.status <= 299) {
    const jsonResponse = response.json().then((data) => data as T);
    return jsonResponse;
  } else {
    // Handle errors
    console.log(response.status, response.statusText);
    return null;
  }
}

export async function getAvator() {
  const res = await fetch(
    "https://pearl-portfolio-server.herokuapp.com/files/name/avatar.jpg"
  );
  return handleErrors<FileInfo>(res);
}

export async function getAboutBackground() {
  const res = await fetch(
    "https://pearl-portfolio-server.herokuapp.com/files/name/about_tag.jpg"
  );
  return handleErrors<FileInfo>(res);
}
