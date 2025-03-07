const WP_GRAPHQL_URL = 'https://posts.pocforum.org/stories';

export async function getPosts(page = 1, perPage = 9) {
  const response = await fetch(WP_GRAPHQL_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
        query GetPosts($first: Int!, $after: String) {
          posts(first: $first, after: $after) {
            pageInfo {
              hasNextPage
              endCursor
            }
            nodes {
              id
              title
              slug
              date
              modified
              featuredImage {
                node {
                  sourceUrl
                  altText
                }
              }
              author {
                node {
                  name
                }
              }
              categories {
                nodes {
                  name
                  slug
                }
              }
              tags {
                nodes {
                  name
                  slug
                }
              }
              excerpt
            }
          }
        }
      `,
      variables: {
        first: perPage,
        after: page > 1 ? btoa(`arrayconnection:${(page - 1) * perPage}`) : null,
      },
    }),
  });

  const { data } = await response.json();
  return data.posts;
}

export async function getPost(slug: string) {
  const response = await fetch(WP_GRAPHQL_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
        query GetPost($slug: ID!) {
          post(id: $slug, idType: SLUG) {
            id
            title
            content
            date
            modified
            featuredImage {
              node {
                sourceUrl
                altText
              }
            }
            author {
              node {
                name
              }
            }
            categories {
              nodes {
                name
                slug
              }
            }
            tags {
              nodes {
                name
                slug
              }
            }
          }
        }
      `,
      variables: {
        slug,
      },
    }),
  });

  const { data } = await response.json();
  return data.post;
}

export async function getCategories() {
  const response = await fetch(WP_GRAPHQL_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
        query GetCategories {
          categories {
            nodes {
              id
              name
              slug
              count
            }
          }
        }
      `,
    }),
  });

  const { data } = await response.json();
  return data.categories.nodes;
}

export async function getTags() {
  const response = await fetch(WP_GRAPHQL_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
        query GetTags {
          tags {
            nodes {
              id
              name
              slug
              count
            }
          }
        }
      `,
    }),
  });

  const { data } = await response.json();
  return data.tags.nodes;
}

export async function getPostsByCategory(categorySlug: string) {
  const response = await fetch(WP_GRAPHQL_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
        query GetPostsByCategory($categorySlug: String!) {
          posts(where: { categoryName: $categorySlug }) {
            nodes {
              id
              title
              slug
              date
              modified
              featuredImage {
                node {
                  sourceUrl
                  altText
                }
              }
              author {
                node {
                  name
                }
              }
              categories {
                nodes {
                  name
                  slug
                }
              }
              tags {
                nodes {
                  name
                  slug
                }
              }
              excerpt
            }
          }
        }
      `,
      variables: {
        categorySlug,
      },
    }),
  });

  const { data } = await response.json();
  return data.posts.nodes;
}

export async function getPostsByTag(tagSlug: string) {
  const response = await fetch(WP_GRAPHQL_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
        query GetPostsByTag($tagSlug: String!) {
          posts(where: { tag: $tagSlug }) {
            nodes {
              id
              title
              slug
              date
              modified
              featuredImage {
                node {
                  sourceUrl
                  altText
                }
              }
              author {
                node {
                  name
                }
              }
              categories {
                nodes {
                  name
                  slug
                }
              }
              tags {
                nodes {
                  name
                  slug
                }
              }
              excerpt
            }
          }
        }
      `,
      variables: {
        tagSlug,
      },
    }),
  });

  const { data } = await response.json();
  return data.posts.nodes;
}

export async function getAllSlugs() {
  const response = await fetch(WP_GRAPHQL_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
        query GetAllSlugs {
          posts {
            nodes {
              slug
            }
          }
        }
      `,
    }),
  });

  const { data } = await response.json();
  return data.posts.nodes;
}