

function type_check_v1(value , type){
	if(String(value) == 'null' || String(value) == 'nullNotObject' ||
	 String(value) == 'undefined' || String(value) == 'arrayNotObject'  ){
		if ( String(value) == type ){
			return true ; 
		}
	} else if(Array.isArray(value) && type == 'array' ){
		return true;
	} else if (typeof value === type) {
		return true;
	} else {
		return false ;
	}
}

check = type_check_v1 ('', '' );
console.log(check);