

function type_check_v1(value , type){
	if(String(value) == 'null' || value === 'undefined' ){
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

check = type_check_v1 (undefined, 'undefined' );
console.log(check);