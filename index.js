function gerarTabuada(){
    var numero = parseInt(document.getElementById('numero').value)
    var tabuada = "<table class='table-centralizada'><tr><th>Multiplicador</th><th>Resultado</th></tr>"

    for (var i = 1; i <= 10; i++) {
        var resultado = numero * i;
        tabuada += "<tr><td>" + numero + "x" + i + "</td><td>" + resultado + "</td><tr>"
    }

    tabuada += "</table>";
    document.getElementById('tabuada').innerHTML = tabuada
}