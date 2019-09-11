script.js

$(document).ready(function(){
    $("#txtCep").focusout(function(){
            var cep = $("#txtCep").val();
            cep = cep.replace("-", "");
 
            var urlStr = "http://www.buscacep.correios.com.br/sistemas/buscacep/"+ cep +"/json/";
         
            $.ajax({
                url : urlStr,
                type : "get",
                dataType : "json",
                success : function(data){
                    console.log(data);
                     
                    $("#txtCidade").val(data.localidade);
                    $("#txtEstado").val(data.uf);
                    $("#txtBairro").val(data.bairro);
                    $("#txtRua").val(data.logradouro);
                    $("#txtComplemento").val(data.complemento);
                },
                error : function(erro){
                    console.log(erro);
                }
            });
    });
});