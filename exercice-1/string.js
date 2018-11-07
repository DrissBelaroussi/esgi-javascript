var str = 'hello world';

function ucFirst(str) {
  if (str.length > 0) {
    return str[0].toUpperCase() + str.substring(1);
  } else {
    return '';
  }
}

function capitalize(str) {

  if (str.length > 0) {	
   return str.replace(/\w\S*/g, function(str){
        return str.charAt(0).toUpperCase() + str.substr(1).toLowerCase();
    });
  } else {
    return '';
  }
}

function camelCase(str) {
	return str.replace(/\W+(.)/g, function(match, chr)
       {
            return chr.toUpperCase();
        });
}

function snake_case(str){
	return str.toLowerCase().replace(' ' , '_').replace(/\d/g , '_');
}

function leet(message) {
 
 var messageLeet = "";
 
for (var i = 0; i < message.length; i++) {
  if (message[i].toLowerCase() === "l") { messageLeet += "1"; }
  else if (message[i].toLowerCase() === "e") { messageLeet += "3"; }
  else if (message[i].toLowerCase() === "a") { messageLeet += "4"; }
  else if (message[i].toLowerCase() === "t") { messageLeet += "7"; }
  else if (message[i].toLowerCase() === "s") { messageLeet += "5"; }
  else if (message[i].toLowerCase() === "o") { messageLeet += "0"; }
  else { messageLeet += message[i].toLowerCase(); }
}
	return messageLeet;
}


console.log(ucFirst(str));
console.log(capitalize(str));
console.log(camelCase(str));
console.log(snake_case(str));
console.log(leet('anaconda'));




