

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
	} else if (typeof value === type) {
		return true;
	} else {
		return false ;
	}
}

check = type_check_v1 (null, 'object' );
console.log(check);