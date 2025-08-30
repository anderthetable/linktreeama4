const baseURL = "http://localhost:1337";

// 🔹 Función para traer el profile
export async function fetchProfile() {
  const res = await fetch(`${baseURL}/api/profile?populate=*`);
  const json = await res.json();
  const p = json.data;

  return {
    name: p.Name,
    description: p.Description,
    picture: {
      original: baseURL + p.Picture.url,
      thumbnail: baseURL + p.Picture.formats.thumbnail.url,
      small: baseURL + p.Picture.formats.small.url,
      medium: baseURL + p.Picture.formats.medium.url
    },
    links: p.Links.map(link => ({
      platform: link.Platform,
      url: link.Link
    }))
  };
}

// 🔹 Función para traer todos los productos con paginación
export async function fetchAllProducts() {
  let allProducts = [];
  let page = 1;
  let totalPages = 1;

  while (page <= totalPages) {
    const res = await fetch(
      `${baseURL}/api/products?populate=*&pagination[page]=${page}&pagination[pageSize]=25`
    );
    const json = await res.json();

    allProducts = allProducts.concat(
      json.data.map(p => ({
        link: p.Link,
        images: p.Images.map(img => ({
          original: baseURL + img.url,
          formats: {
            thumbnail: baseURL + img.formats.thumbnail.url,
            small: baseURL + img.formats.small.url,
            medium: baseURL + img.formats.medium.url
          }
        }))
      }))
    );

    totalPages = json.meta.pagination.pageCount;
    page++;
  }

  return allProducts;
}