const categoriesList = document.getElementById('categories');
const categoriesItems = categoriesList.querySelectorAll('li.item');
console.log('Number of categories:', categoriesItems.length);

categoriesItems.forEach(category => {
  const categoryName = category.querySelector('h2').textContent;
  const categoryItems = category.querySelectorAll('ul li');
  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${categoryItems.length}`);
});
