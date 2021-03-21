var node = document.querySelector('.box');
console.log(node);
//node.innerHTML='<h2>Hi World</h2>';
console.log(node.innerHTML);
console.log(node.textContent);
node.outerHTML='<p>a</p>';
//node.innerHTML='<p>b</p>';
console.log(node.outerHTML);