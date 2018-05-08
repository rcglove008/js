var http=require('http');
var fs=require('fs');
http.get('http://www.xiaohongshu.com/explore',function(res){
	//通过相应对象的到html
	var content='';
	
	res.on('data',function(str){
		
	   content+=str;
	});
	res.on('end',function(){
		content;
		//分析html
		//html 代码存放在content中
		var reg=/href="(\/\/www.*?)"/img;
		var data=content.match(reg);
		
		//var data=reg.exec(content);
		//var filename;
		
		//filename=reg.exec(content)
    	fs.writeFile('./text.txt',data,function(){
		console.log('ok');
	});
//		console.log( content.match(reg) );

	});
});
