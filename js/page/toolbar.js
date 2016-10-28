define('toolbar',function(require,exports,module){
	var toolbar=function(opt){
		this.config=$.extend({id:''},opt);
		this.vm={};
		this.$toolbar=$(this.config.id);
		this.init.apply(this,arguments);
	};

	toolbar.prototype={
		init:function(){
			this.attachEvent(this);
		},
		attachEvent:function(self){
			this.$toolbar.on("click","[data-btn]",function(){
				$(self).trigger("submit."+$(this).data("btn"));
			});
		}
	};

	toolbar.prototype.constructor=toolbar;
	module.exports=toolbar;
});