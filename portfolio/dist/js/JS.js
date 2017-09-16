// "use strict"; Поддерживают не все браузеры

if( document.getElementsByClassName ){
	// it exists
} else{
	// it doesn't exist
}

// --- Statements --- //
statement1;statement2;statement3
var statement;     инструкция

// --- Expressions --- //
statement = 5+2;   выражение

// --- Operators --- //
 + - * /
 5%2   остаток
 =     присвоение
 ++i   инкримент (увеличение на 1)
 --i   дикримент (уменьшение на 1)
 +=

// Тернарный
(age === 19) ? console.log(' true ') : console.log(' false ')

// Логические
||   or
&&   and
!    not
(age > 18 && <= 20)

//////////////////
// NUMBERS
//////////////////////////////
number.toFixed(5);       //Плавающая точка
number.toPrecision(4);   //Округление с определенным кол-ом цыфр
number.toExponential();  //Експонента (ex. 2.3422e+2)
number.toString();  	 //Число в строку
Math.sqrt(81);           // Корень
Math.pow(5, 2);   	     // Степень
Math.floor(number);      // Округление до целых
Math.ceil(3.9);          // Округление в большую сторону
Math.round(number);      // Округление до ближайшего
Math.PI;  			     // Const Pi
Math.E;  			     // Const E

// NaN Not a number
( 0/0 );  			  // NaN Not a number
( NaN === NaN );      // false
( Infinity < 9751 );  // Infinity more than any number
5/0 			  // Infinity
0/0 			  // NaN
Infinity/Infinity // NaN
sqrt(-10)         // NaN
NaN === NaN 	  // false

\n  // Перенос255
\t  // Tab
\   // Екранирование

//////////////////
// STRINGS
//////////////////////////////
var str = '"string" some text',
	str2 = "\"string \" too some text",
	longStr = 'ldadadafgqgw ff\n \bFWEF WE FAF\n \tfswg';
str.length;         	 	 // Длина строки 
'hello ' + 'world';  		 // Склеивание
'hello '.concat('world');  	 // Склеивание
str.charAt());      		 // letter (index) fo string
str.charCodeAt();   		 // charCode of letter of string
str.substring(6, 14);		 // подстрока с 6-го по 14-ый символы
str.slice(-10);      		 // подстрока с 0-го по 10-ый символы c конца (может иметь отрицательн. знач)
str.substr(14, 4);    		 // подстрока с 14-го 4 символа
str.IndexOf("me");       	 // поиск вхождений в строке c начала
str.LastIndexOf("me");       // поиск вхождений в строке c конца
str.split(' ');      		 // Разбитие на массив (слова можду пробелами)
str.replace('string', 'nucpnstmber');    // Замена
str.toUpperCase(str);  	 	 // Верхний регистр
str.toLowerCase(str);  		 // Нижний регистр


//////////////////
// Conditional instructions
//////////////////////////////
switch(выражение){
	case выражение: инструкции
	case выражение: инструкции
	case выражение: инструкции
	default: инструкции
}

//////////////////
// ARRAY
//////////////////////////////
delete arr[1];   // Delete element
arr.splice();    // Delete element (index, elemets)
arr.length = 2;  // Кол-во ел массива
arr.concat();    // Обьединение
arr.join(', '); // Array to string
arr.push('new'); // Add element in end of string
arr.pop();       // Delete last el
arr.unshift();   // Add 1st element
arr.shift();     // Delete 1st element
arr.reverse();   // Reverse
arr.slice(0,2);  // slice array

//////////////////
// CYCLE
//////////////////////////////
// for
var i;
var arr = [1,+'2',3],
	len = arr.length;
 for ( i = 0; i < len; i++ ){
 	///
 }
// for in
var obj = {
	prop: 'one',
	propSecond: 'two'
},
	prop;
 for ( prop in obj ){
 	if(obj.hasOwnProperty(prop)){
 		/////
 	}
}
// while
var k = 0;
while( k<10 ){
	////
};
// do while
var h=0;
do{
	////
} while(h<1);

//////////////////
// FUNCTION
//////////////////////////////
var prop = 1;
(function(){
	var prop2 = 2;
	console.log(prop);
	console.log('It work!');
})();
/////////////
/* 	var greet = function(name){
		console.log(arguments.length);
		return "Hello " + name;
	
	};

console.log(greet("Sorax", 34).toUpperCase()); */
/////////////
/* 	var func = function(cb){
		var name = "Sorax";
		cb(name);
		
	};
/////////////	
	func(function(n){
		console.log("Hello " + n); 
	});
	 */
/////////////
	var func = function(n) {
		return "Hello " + n;
	}("Sorax");
	 
	console.log(func)

//////////////////
// Object
//////////////////////////////	
var person = {
	name: "Sorax",
	age: "20",
	gender: "male"
};

person.age = 25;
person.uderID = 231315;
 
// выражение.идентификатор
// выражение.[выражение]

console.log(person);
	
var object = Object.create({x: 10, y: 20});
object.x = 20;

delete object.x

console.log(object);

console.log("x" in object);
console.log("o" in object);

///// OPTIONS of Obj
var sTour = {
	turkey: 2000,
	spain: 3000,
	egypt: 1000,
};

for (option in sTour){
	document.write(option + sTour[option]);
}
	
	
//////////////////
// DOM
//////////////////////////////
	document.getElementsByTagName('p'), // faster than querySelector
	document.getElementsByClassName( "paragraph" ), // faster than querySelectorAll
	document.getElementById('four'),
	document.querySelector("p"),
	document.querySelectorAll('p'),
	document.querySelectorAll('div p'),
	document.querySelector('#four');
	
	elems[i].tagName;  // nodeName
	elems[i].parentNode;
	elems[i].previousSibling);
	elems[i].nextSibling;
	elems[i].nodeName;
	
	elems[i].nodeType;
	elems[i].previousSibling.nodeType;
	
	document.querySelector('div').childNodes;
	document.querySelector('div').children;
	document.querySelector('div').lastChild;
	document.querySelector('div').firstChild;
	document.querySelector('div').innerHTML;
	
//////////////////
// CREATE EL
//////////////////////////////

	var doc = document,   // Cache (document)
	    elem = doc.createElement("p"),
		content = doc.createTextNode('Some text'),
		wreppedP = doc.getElementById("wrapped");
	
	elem.innerHTML = '<b>Some text</b>';
	
	wreppedP.parentNode.removeChild();
	wreppedP.parentNode.removeChild(wreppedP);
	
	elem.appendChild(content);
	elem.setAttribute('id','id');
	elem.id = 'id';
	
	wreppedP.parentNode.appendChild(elem);
	wreppedP.parentNode.insertBefore(elem, wreppedP);
	wreppedP.parentNode.replaceChild(elem, wreppedP);
	
	console.log(elem);

//////////////////
// 
//////////////////////////////	
	div.className = 'add-class new';
	div.className = div.className.replace('add-class','');
	div.classList.add('random');
	div.classList.remove('random');
	div.classList.toggle('random');	
	
//////////////////
// Standart model of events
/////////////////////////////
	e.type
	e.target
	this
	e.currentTarget
	e.preventDefault();	// for IE e.returnValue = false;
	
///// modernizr.js Проверить функции (видео, дрог-енд-дроп, аудио, etc)
if(Modernizr.video){ we can use html5 video } else{ we can\'t }

/// AJAX
var myRequest;

if (window.XMLHttpRequest){
	myRequest = new XMLHttpRequest();
} else if(windeow.ActiveXObject){
	myRequest = new ActiveXObject("Microsoft.XMLHTTP");
}

myRequest.onreadystatechange = function(){
	console.log("true");
	//console.log(myRequest.readyState);
	if(myRequest.readyState === 4){
		var p = document.createElement("p");
		var t = document.createTextNode(myRequest.responseText);
		p.appendChild(t);
		document.getElementById("mainContent").appendChild(p);
	}
};
myRequest.open('GET','simple.txt','true');

myRequest.send(null);
*/

/*function Player(n,s,r){
	this.name = n;
	this.score = s;
	this.rank = r;
}

Player.prototype.logInfo = function(){
	console.log("I am:", this.name);
}

Player.prototype.promote = function(){
	this.rank++;
	console.log("My new rank:", this.rank);
}

var fred = new Player("Fred",10000,5);
fred.logInfo();
fred.promote();

var bob = new Player("Bob",50,1)
bob.logInfo();
bob.promote();
*/
//////////////////
// -- PROTOTYPE --
/////////////////////////////
function Room (){
	this.area = 12;
	this.name = 'Home';
}

Room.prototype.showArea = function(){
	console.log(this.area);
};
Room.prototype.showName = function(){
	console.log(this.name);
};
/*
Room.prototype = {
	showName : function(){
		console.log(this.name);
	},
	showAll : function(){
		console.log(this.name + ' + ' + this.area);
	}

}
*/

var room = new Room();
//room.showArea();
//room.showName();















































