const CATEGORY_GRAPHQL_FIELDS = `
    title
      slug
      description
      image {
        url
      }
      productCollection(limit: 10) {
        items {
        ... on Product{
            name
            slug
            image{
              url
            }
            hoverImage{
            url
          }
            description
            price
            quantity
           
          }
        }
        }
`;
const PRODUCT_GRAPHQL_FIELDS = `
           name
            slug
            image{
              url
            }
           
            description
            price
            quantity
            hoverImage{
            url
          }
`

async function fetchGraphQL(query: string, preview = false): Promise<any> {
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
     
        Authorization: `Bearer ${
          preview
            ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
            : process.env.CONTENTFUL_ACCESS_TOKEN
        }`,
      },
      body: JSON.stringify({ query }),
      next: { tags: ["products"] },
    },
  ).then((response) => response.json());
}

function extractCategory(fetchResponse: any): any {
  
  return fetchResponse?.data?.categoryCollection?.items?.[0];
}

function extractCategories(fetchResponse: any): any[] {


  return fetchResponse?.data?.categoryCollection?.items;

}

function extractProduct(fetchResponse: any): any {
  
  return fetchResponse?.data?.productCollection?.items?.[0];
}

function extractProducts(fetchResponse: any): any[] {
  return fetchResponse?.data?.productCollection?.items;
}

export async function getCategory(slug: string | null): Promise<any> {
  const entry = await fetchGraphQL(
    `query {
      categoryCollection(where: { slug: "${slug}" }, limit: 1) {
        items {
          ${CATEGORY_GRAPHQL_FIELDS}
        }
      }
    }`,
  );
  return extractCategory(entry);
}

export async function getAllProductsInCategory(
  categorySlug: string,
  isEnabled: boolean,
  options: { limit: number; page?: number } = { limit: 6 }
) {
  
  const productsQuery = `
    query {
      categoryCollection(where: { slug: "${categorySlug}" }) {
        items {
           productCollection(limit: ${options.limit}, skip: ${options.page? (options.page - 1) * options.limit : 0}) {
            items {
             ... on Product {
                ${PRODUCT_GRAPHQL_FIELDS}
              }
            }
          }
        }
      }
    }
  `;

  const response = await fetchGraphQL(productsQuery, isEnabled);
  
  const data = response.data;
  const categoryCollection = data.categoryCollection;
  console.log("pro" , categoryCollection)
  const products = categoryCollection && categoryCollection.items[0].productCollection.items;
  const totalCount = categoryCollection && categoryCollection.items[0].productCollection.total;
  const pagination = {
    hasNextPage: products.length === options.limit,
    nextPage: options.page? options.page + 1 : 2,
    totalCount, 
  };

  return { products, pagination };
}

export async function getAllCategories(): Promise<any[]> {
  const entries = await fetchGraphQL(
    `query {
      categoryCollection(order: title_ASC) {
        items {
          ${CATEGORY_GRAPHQL_FIELDS}
        }
      }
    }`,
  );
  return extractCategories(entries);
}
export async function getLatesCategories(): Promise<any[]> {
  const entries = await fetchGraphQL(
    `query {
      categoryCollection(limit:4 ,order: [sys_publishedAt_DESC]) {
        items {
          ${CATEGORY_GRAPHQL_FIELDS}
        }
      }
    }`,
  );
  return extractCategories(entries);
}

export async function getProductBySlug(slug: string | null): Promise<any> {
  const entry = await fetchGraphQL(
    `query {
      productCollection(where: { slug: "${slug}" }) {
        items {
          ${PRODUCT_GRAPHQL_FIELDS}
        }
      }
    }`,
   
  );
  return extractProduct(entry);
}

export async function getAllProducts(): Promise<any[]> {
  const entries = await fetchGraphQL(
    `query {
      productCollection(where: { slug_exists: true }) {
        items {
          ${PRODUCT_GRAPHQL_FIELDS}
        }
      }
    }`,
  
  );
  return extractProducts(entries);
}

export async function getProductAndMoreProducts(slug: string, preview: boolean): Promise<any> {
  const entry = await fetchGraphQL(
    `query {
      productCollection(where: { slug: "${slug}" }, preview: ${preview ? "true" : "false"}, limit: 1) {
        items {
          ${PRODUCT_GRAPHQL_FIELDS}
        }
      }
    }`,
    preview,
  );
  const entries = await fetchGraphQL(
    `query {
      productCollection(where: { slug_not_in: "${slug}" }, order: date_DESC, preview: ${preview ? "true" : "false"}, limit: 2) {
        items {
          ${PRODUCT_GRAPHQL_FIELDS}
        }
      }
    }`,
    preview,
  );
  return {
    post: extractProduct(entry),
    morePosts: extractProducts(entries),
  };
}

