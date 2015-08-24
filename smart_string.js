function trim(str, len){
	var s = str.substr(0, len);
	if(str.length > len &&  ( (s.charAt(len - 1) !== " " && s.charAt(len) !== " ") || s.charAt(len - 1) === " ") ) {
		s = s.substr(0, s.lastIndexOf(" "));
	}
	return s;
}