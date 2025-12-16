// src/lib/facebook.ts
const PAGE_ID = import.meta.env.PAGE_ID;
const ACCESS_TOKEN = import.meta.env.ACCESS_TOKEN;

const GRAPH_VERSION = "v19.0";

export async function getFacebookPosts(limit = 5) {
  if (!PAGE_ID || !ACCESS_TOKEN) {
    throw new Error("Facebook Page ID or Access Token missing");
  }

  const fields = [
    "message",
    "created_time",
    "permalink_url",
    "full_picture"
  ].join(",");

  const url = `https://graph.facebook.com/${GRAPH_VERSION}/${PAGE_ID}/posts` +
              `?fields=${fields}&limit=${limit}&access_token=${ACCESS_TOKEN}`;

  const res = await fetch(url);

  if (!res.ok) {
    const error = await res.text();
    throw new Error(`Facebook API error: ${error}`);
  }

  return res.json();
}
