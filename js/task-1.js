const items = document.querySelectorAll('li.item');
console.log(`Number of categories: ${items.length}`);
items.forEach(item => {
  console.log(`Category: ${item.querySelector('h2').textContent}`);
  console.log(`Elements: ${item.querySelectorAll('li').length}`);
});

const ulStyle = document.querySelectorAll("ul"); 
ulStyle.forEach( ul => {ul.style.listStyle = "none";})
