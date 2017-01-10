function skipWebPage(target){
	var url;
	var source = window.location.href;
	var queryParams = querySearch(window.location.search);
	if(queryParams.referurl){
		var temp = [];
		if(target.indexOf('?') > 0){
			url = target + "&";
		}else{
			url = target + "?";
		}
		for(var i in queryParams){
			temp.push(i + '=' + queryParams[i]);
		}
		window.location.href = url + temp.join('&');
	}else{
		if(target.indexOf('?') > 0){
			url = target + "&referurl=";
		}else{
			url = target + "?referurl=";
		}
		window.location.href = url + encodeURIComponent(source);
	}
}

function querySearch(search){
	var key_value_list = [];
	var key_value_map = {};
	var i = 0;
	if(search){
		search = search.substring(1);
		key_value_list = search.split('&');
		for(i ; i < key_value_list.length; i++){
			var temp = key_value_list[i].split('=');
			key_value_map[temp[0]] = temp[1];
		}	
	}
	return key_value_map;
}