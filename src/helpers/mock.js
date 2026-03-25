import productJson from './product.json';
import blogJson from './blog.json';
/**

*/
function generateMockProductData(count, tag) {
  const products = productJson;
  const filtered = products
    .filter((item) => item.tags.includes(tag))
    .map((item) => ({
      ...item,
      link: item.link || item.image || '/product/sample',
    }));

  return filtered.slice(0, count);
}

function getProductCountByTag(tag) {
  return productJson.filter((item) => item.tags && item.tags.includes(tag)).length;
}

function generateMockBlogData(count) {
  return blogJson.slice(0, count);
}

export { generateMockProductData, generateMockBlogData, getProductCountByTag };
