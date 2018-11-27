

function type_check_v1(value , type){
	if(String(value) == 'null' || String(value) == 'undefined'){
		if ( String(value) == type ){
			return true ; 
		} else {
			return false
		}
	} else if (typeof value == 'object' && Array.isArray(value) == true && type == 'array' ) {
		return true;
	} else if (typeof value == 'object' && Array.isArray(value) == true && type != 'array') {
		return false;
	} else if (typeof value == 'object' && type != 'object') {
		return false;
	} else if (typeof value === type) {
		return true;
	} else {
		return false ;
	}
}

function type_check_v2(value , type){
	if(value == type.value && type_check_v1(value, type.type) == true){
		return true;
	} else if(typeof value == 'object') {
		return type_check_v1(value, type.type);
	} else if(type.enum) {
		for (var i = 0; i < type.enum.length; i++) {
			if(type.enum[i] === value){
				return true;
			} else {
			return false
			}
		}
	} else {
		return false;
	}
}

check = type_check_v2 ({prop1:1}, {type:"object"});
console.log(check);
check = type_check_v2 ("foo", {type:"string" , value:"foo"});
console.log(check);
check = type_check_v2 ("bar", {type:"string" , value:"foo"});
console.log(check);
check = type_check_v2 (2, {enum:["bob", "boy" , 3]});
console.log(check);