var listaSeries = ["How i met your mother", "Lucifer", "Stranger Things"];

// adicionando novos elementos
listaSeries.push("Elite");

// indice 4
listaSeries.push("The good place");
listaSeries.push("Fuller House");

console.log(listaSeries.length);

//    valor inicial.   condição.   expressão final
for (var indice = 0; indice < listaSeries.length; indice++) {
    document.write("<p>" + listaSeries[indice] + "</p>");
}