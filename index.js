const bookmarks = [];
let childElement;
let appendChildElement;

bookmarks.push({ url: 'https://facebook.com' });
bookmarks.push({ url: 'https://instagram.com' });
bookmarks.push({ url: 'https://twitter.com' });

/*getElementByClassName('.class-name' for mutple elements that have same class */
/* querySelector() or querySelectorAll(). But this is mostly relevant when we are dealing with elements that don’t have an ID or class name. */

const parentElement = document.getElementById('bookmarks');


console.log(parentElement)
for (let book of bookmarks){
    childElement=document.createElement('div'); 
    childElement.innerHTML=book.url;  
    parentElement.appendChild(childElement);
    

}



