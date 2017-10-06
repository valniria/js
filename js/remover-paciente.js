var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event){
	var alvoEvento = event.target;
	alvoEvento.parentNode.classList.add("fade-out");
	
	setTimeout(function(){
		alvoEvento.parentNode.remove();	
	},500);
	// event.target.parentNode.remove();

})
