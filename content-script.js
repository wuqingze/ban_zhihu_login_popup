(function() {
	setInterval(function(){
		var t = document.getElementsByClassName("Button Modal-closeButton Button--plain");
		if(t.length>0){
			t[0].click();
		}
	},100);
})();
