const express = require('express');
const bodyParser = require('body-parser');
const app = express();
let todo = [];
let id = 0;
app.set('view engine','pug');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
	extended:true
}));
app.use(bodyParser.json());
app.post('/',function(req,res){
	if(req.body.todoinput){
		let todoobj = {
			todo:req.body.todoinput,
			id:id
		};
		todo.push(todoobj);
		console.log(todo);
		id++;
		
	}

	res.redirect('/');
});
app.get('/',function(req,res){
	res.render('todo',{todo:todo});
});

//handles delete requests
app.get('/delete',function(req,res){
	console.log(req.query);
	let el = todo.find(function(todo){
		return todo.id == req.query.id;
	});
	console.log(el);
	 todo.splice(todo.indexOf(el),1);
	res.redirect('/');
});

//handles edit requests
app.get('/edit',function(req,res){
	let el = todo.find(function(todo){
		return todo.id == req.query.id;
	});
	res.render('edit',{editableObj:el});
});
app.post('/edit/:id',function(req,res){
	console.log('------'+ req.params.id);
	let el = todo.find(function(todo){
		return todo.id == req.params.id;
	});
	el.todo = req.body.todoinput;
	res.redirect('/');
});
app.listen(3000);