(function() {
	setInterval(function(){
		var t = document.getElementsByClassName("Button Modal-closeButton Button--plain");
		if(t.length>0){
			t[0].click();
		}
		t = document.getElementsByClassName("login-mark");
		if(t.length>0){
            var elem = t[0];
            elem.parentNode.removeChild(elem);
		}
        t =  document.getElementById(id);
        t.parentNode.removeChild(t);
	},100);
})();
