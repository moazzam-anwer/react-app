variable hosting

defination and decliration=>
//decliration var xyz = 
console.log("xyz",xyz)  => undifiend

var xyz = "123" => defination

lexcical oparetor

export and import

var user = {
	name:"axy",
	id: 1111,
	name: "zzzz" 
}
console.log(user)


diff b/w methode and class

speard oparetor =>   
var xyz = {...abc}
----------------------------
let abc = [1,2]
let xyz= [...abc,2]

rest oparetor =>


==========================
object destructuring
var user = {
	name:"axy",
	id: 1111,
	name: "zzzz" 
}
// user.name
var {name,id} = user

==============
closur


function parent(){
	var x = "123";
	return function child(){
		console.log(x)
	}
}


