const arrCategories = document.getElementById('categories').querySelectorAll('.item');

console.log(`Number of categories:  ${arrCategories.length}`);

arrCategories.forEach(el => {
    console.log(`Category: ${el.querySelector('h2').innerText}`);
    console.log(`Elements: ${el.querySelectorAll('ul li').length}`);
        
})