let tablo = document.createElement('table');
document.getElementsByTagName('body')[0].appendChild(tablo);
let t = todo;
console.log(t);
for(i in t){
	let tr = document.createElement('tr');
	let td = document.createElement('td');
	let textNode = document.createTextNode(todo.todoinput);
	td.appendChild(textNode);
	tr.appendChild(td);
}