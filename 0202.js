var http=require('http');
var fs=require('fs');


function huoquitem(ids){
		if(ids == undefined||ids == null){
			// a == null || a == undefined
	   		return;
	  }
	//for(var j=0 ; j<= ids.length ; j++){
	   
	  for(var j=0 ; j<= 20 ; j++){ 
	  var id = ids[j];
			  id = id.replace(/(\")|(id": )/g,'');
			 console.log(id);	
			http.get('http://www.xiaohongshu.com/discovery/item/'+id,function(res){
				var contentItem='';
				res.on('data',function(str){
				   contentItem+=str;
				});
				res.on('end',function(){
					 contentItem;
					 var reg=/data-v-3407b533>(.*?)span>/img;
					 var data= contentItem.match(reg);

					fs.appendFile('./item.txt',data,function(){
					//console.log(ok);
					});
					
				});
			
			});
	  
	}
}

for(var i=1 ; i<= 90 ; i++){
   // pageUrls.push('http://www.cnblogs.com/#p'+i);

//http.get('http://www.xiaohongshu.com/web_api/sns/v2/homefeed/notes?page_size=20&oid=babycare&page='+i,function(res){
//'http://www.xiaohongshu.com/web_api/sns/v3/search/note?keyword=%E5%8C%96%E5%A6%86%E5%93%81&page=2&page_size=20',function(res){
//http://www.xiaohongshu.com/web_api/sns/v3/search/note?keyword=%E7%BB%B4%E7%94%9F%E7%B4%A0&page=2&page_size=20(维生素)
http.get('http://www.xiaohongshu.com/web_api/sns/v3/search/note?keyword=%E7%BB%B4%E7%94%9F%E7%B4%A0&page='+i+'&page_size=20',function(res){
	var content='';
	
	res.on('data',function(str){
		
	   content+=str;
	});
	res.on('end',function(){
		content;
		var reg=/"id":\s"(.*)\"/img;

		//"id": "58d7458150c4b42fc049562b",
		//测试通过能取到ID
		var data= content.match(reg);
		//console.log(data);
		huoquitem(data);
		//filename=reg.exec(content)
    fs.appendFile('./text.txt',data,function(){
		console.log('ok');
	});
	console.log( 1);

	});
});


}

