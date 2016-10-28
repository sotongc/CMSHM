define('table',function(require,exports,module){
	var table=function(opt){
		this.config=$.extend({id:''},opt);
		this.vm={};
		this.$table=$(this.config.id);
		this.init.apply(this,arguments);
	};

	table.prototype={
		init:function(){
			this.vm.orderby="";
			this.attachEvent(this);
		},
		attachEvent:function(self){
			var order={descending:'ascending',ascending:'descending'};

			this.$table.on("click","[data-vm]",function(){
				var last_order=$(this).data("vm");
				var curr_order=order[last_order];
				$(this).data("vm",curr_order);
				
				self.vm.orderby=curr_order;
				self.changeView(last_order,curr_order,this);
				$(self).trigger("reverse",self.vm);
			});
		},
		changeView:function(lo,co,ele){
			$(ele).removeClass(lo);
			$(ele).addClass(co);
		},
		load:function(temp,data){
			this.$table.find("[data-tbody]").html(template(temp,data));
		},
		clear:function(){
			this.$table.find("[data-tbody]").empty();
		},
		review:function(){
			this.$table.find("[data-vm]").data("vm","ascending");
			this.changeView("descending","ascending",this.$table.find("[data-vm]"));
		}
	};

	table.prototype.constructor=table;
	module.exports=table;
});