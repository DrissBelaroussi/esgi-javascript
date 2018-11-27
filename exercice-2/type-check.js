


function type_check_v1(value , type){
	if (typeof value === type){
		return true;
	} else if(value === null || value === 'undefined' ){
		if ( value == type ){
			return true ; 
		}
	} else {
		return false ;
	}
}

check = type_check_v1 ('undefined','undefined' );
console.log(check);