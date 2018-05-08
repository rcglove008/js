var http=require('http');
var fs=require('fs');


function huoquitem(ids){
		if(ids == undefined){
	   		return;
	  }
	for(var j=0 ; j<= ids.length ; j++){
	   // pageUrls.push('http://www.cnblogs.com/#p'+i);
	   
	  var id = ids[j];
	  id = id.replace(/(\")|(id": )/g,'');
	  console.log(id);	
			http.get('http://www.xiaohongshu.com/discovery/item/'+id,function(res){
				var contentItem='';
				
				res.on('data',function(str){
				   contentItem+=str;
				});
				res.on('end',function(){
					 
					fs.appendFile('./item.txt',contentItem,function(){
					//console.log();
					});
					
				});
			
			});
	  
	}
}

for(var i=1 ; i<= 5 ; i++){
   // pageUrls.push('http://www.cnblogs.com/#p'+i);

http.get('http://www.xiaohongshu.com/web_api/sns/v2/homefeed/notes?page_size=20&oid=recommend&page='+i,function(res){

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

