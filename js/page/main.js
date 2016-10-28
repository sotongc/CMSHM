define('main',function(require,exports,module){
	exports.load=function(){

		var __=require('util'),
			Tab=require('tab'),
			Toolbar=require('toolbar'),
			Table=require('table');

		var query={news_type:'headline'};
		var uri='http://52.52.3.198:8001/query';
		var list={data:[]};

		//menu
		var menu=new Tab({id:'#menu'});

		$(menu).on("tab.switch",function(event,_vm){
			query.news_type=_vm.tab;
			__.request(uri,query.news_type).done(function(data){
				for(var i=0;i<data.data.length;i++){
					data.data[i].publication_time&&(data.data[i].publication_time=__.time2string(data.data[i].publication_time));
				}
				table.clear();
				table.review();
				table.load('tableTemp',data);
				list=$.extend({},data);
			});
		});

		//toolbar
		var toolbar=new Toolbar({id:'#tools'});

		$(toolbar).on("submit.refresh",function(){
			__.request(uri,query.news_type).done(function(data){
				console.log(data.data.length)
				for(var i=0;i<data.data.length;i++){
					data.data[i].publication_time&&(data.data[i].publication_time=__.time2string(data.data[i].publication_time));
				}
				table.clear();
				table.review();
				table.load('tableTemp',data);
				list=$.extend({},data);
			});
		});

		//table
		var table=new Table({id:'#info'});
		var $loading=$("#loading");

		$(table).on("reverse",function(){
			list.data.reverse();
			table.clear();
			table.load('tableTemp',list);
		});

		//initialize
		$(toolbar).trigger("submit.refresh");

	};
});