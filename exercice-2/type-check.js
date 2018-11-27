


function type_check_v1(value , type){
	if (typeof value === type){
		return true;
	} else {
		return false ; 
	}
}

check = type_check_v1 ([1,2], 'Array');
console.log(check);