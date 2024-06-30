const totalCategories = document.querySelectorAll('.item');
console.log('Number of categories:', totalCategories.length);
console.log("\n");

const categoryAll = totalCategories.forEach(element => {
  console.log(`Category: ${element.firstElementChild.textContent}`);
    console.log(`Elements: ${element.lastElementChild.children.length}`);
    console.log("\n");
});

// Number of categories: 3
//
// Category: Animals
// Elements: 4
//
// Category: Products
// Elements: 3
//
// Category: Technologies
// Elements: 5