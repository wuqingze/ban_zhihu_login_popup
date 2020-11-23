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
        t =  document.getElementById("passportbox");
        if(t != null && t.parentNode != null){
            t.parentNode.removeChild(t);
        }
        t = document.getElementById("csdn-toolbar");
        if(t != null && t.parentNode != null){
            t.parentNode.removeChild(t);
        }
        t = document.getElementsByClassName("blog_container_aside");
		if(t.length>0){
            var elem = t[0];
            elem.parentNode.removeChild(elem);
		}
        t = document.getElementsByClassName("more-toolbox more-toolbox-active");
		if(t.length>0){
            var elem = t[0];
            elem.parentNode.removeChild(elem);
		}

	},100);
})();
