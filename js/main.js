
function consultaCep(){
    $(".barra-progresso").show();
    var cep = document.getElementById("cep").value;
    var url = "https://viacep.com.br/ws/" + cep + "/json/";

    console.log(cep);

    $.ajax({
        url: url,
        type:"GET",
        success: function(response){
            console.log(response);
            $("#logradouro").html(response.logradouro)
            $("#bairro").html(response.bairro)
            $("#titulo_cep").html("CEP: " + response.cep)
            document.getElementById("localidade").innerHTML = response.localidade;
            document.getElementById("uf").innerHTML = response.uf;
            $(".cep").show();
            $(".barra-progresso").hide();
        }
    })
}


$(function(){
    $(".cep").hide();
    $(".barra-progresso").hide();
})


