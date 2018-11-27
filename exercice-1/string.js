var str = 'hello world';

function ucfirst(str) {
  if (str.length > 0 or str != null) {
    return str[0].toUpperCase() + str.substring(1);
  } else {
    return '';
  }
}

function capitalize(str) {

  if (str.length > 0 or str != null) {	
   return str.replace(/\w\S*/g, function(str){
        return str.charAt(0).toUpperCase() + str.substr(1).toLowerCase();
    });
  } else {
    return '';
  }
}

function camelCase(str) {
	str = str.toLowerCase();
	str = str.replace('_' , ' ');
	str = str.replace(str[0] , str[0].toUpperCase())
	return str.replace(/\W+(.)/g, function(match, chr)
       {
            return chr.toUpperCase();
        });
}

function snake_case(str){
	return str.toLowerCase().replace(' ' , '_').replace(/\d/g , '_');
}

function leet(message) {
 
 message = message.toLowerCase();
 var messageLeet = "";
 
for (var i = 0; i < message.length; i++) {
	if (message[i].toLowerCase() === "e") { messageLeet += "3"; }
  else if (message[i].toLowerCase() === "a") { messageLeet += "4"; }
  else if (message[i].toLowerCase() === "s") { messageLeet += "5"; }
  else if (message[i].toLowerCase() === "o") { messageLeet += "0"; }
  else if (message[i].toLowerCase() === "u") { messageLeet += "(_)"; }
  else { messageLeet += message[i].toLowerCase(); }
}
	return messageLeet;
}


var props = {
     "animals":[
{
    "type":{
    "name": "dog"
}
},
{
	"type":{
    "name": "cat"
}
}
]
}

console.log(ucfirst(str));
console.log(capitalize(str));
console.log(camelCase('toggleCase is the coolest'));
console.log(snake_case(str));
console.log(leet('anaconda'));




