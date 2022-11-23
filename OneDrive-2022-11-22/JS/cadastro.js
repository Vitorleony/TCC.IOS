$(document).ready(function(){
	
	$("#entrar").click(function(){
		
		if ($("#nome").val()==''){
			$("#mensagem").html("Campo obrigatório");
			$("#nome").focus(); // foco no campo
			}else{
				$("#meuform").submit();
		}
	
	});
	
});