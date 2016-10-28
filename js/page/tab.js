define('tab',function(require,exports,module){
	var tab=function(opt){
		this.config=$.extend({id:''},opt);
		this.$tab=$(this.config.id);
		this.vm={};
		this.init.apply(this,arguments);
	};

	tab.prototype={
		init:function(){
			this.vm.tab="";
			this.attachEvent(this);
		},
		attachEvent:function(self){
			this.$tab.on("click","[data-tab]",function(){
				self.updateVM("tab",$(this).data("tab"));
				self.changeView(this);
				$(self).trigger("tab.switch",self.vm);
			});
		},
		updateVM:function(key,val){
			this.vm[key]=val;
		},
		changeView:function(ele){
			this.$tab.find(".on").removeClass("on");
			$(ele).addClass("on");
		}	
	};

	tab.prototype.constructor=tab;
	module.exports=tab;
});