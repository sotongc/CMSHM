define('util',function(require,exports,module){
	var $loading=$("#loading");
	module.exports={
		request:function(uri,ntype){
			return $.ajax({
				url:uri,
				data:{news_type:ntype},
				method:'POST',
				beforeSend:function(){
					$loading.show();
				},
				complete:function(){
					$loading.hide();
				}
			});
		},
		time2string:function(timestamp){
			var date=new Date(parseInt(timestamp));
			var yy=date.getFullYear(),
				mm=date.getMonth()+1,
				dd=date.getDate(),
				hh=date.getHours(),
				min=date.getMinutes(),
				ss=date.getSeconds();

			return yy+'/'+this.addprefix(mm)+'/'+this.addprefix(dd)+" "+this.addprefix(hh)+":"+this.addprefix(min)+":"+this.addprefix(ss);
		},
		addprefix:function(tt){
			return tt<10?'0'+tt:tt;
		}
	};
});