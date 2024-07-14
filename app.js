function encriptar() {
    //Agarro el valor escrito en el textarea "cifrar" y lo almaceno en una variable
    let texto = document.getElementById("cifrar").value;
    console.log(texto);

    //Convierto la palabra en una lista, donde cada letra es un elemento en la lista
    let lista = Array.from(texto);
    console.log(lista);
    //Intercambio las vocales por la palabra que corresponde
    for (let i = 0; i < lista.length; i++) {
        switch (lista[i]) {
            case 'a':
                lista[i] = 'ai';
                break;
            case 'e':
                lista[i] = 'enter';
                break;
            case 'i':
                lista[i] = 'imes';
                break;
            case 'o':
                lista[i] = 'ober';
                break;
            case 'u':
                lista[i] = 'ufat';
                break;
        }
    };
    //uno todos los elementos de la lista en una palabra
    let codigo = lista.join("");

    //asigno el textarea a la variable t
    let txaDecifrar = document.getElementById("descifrar");

    //Pongo el valor de codigo en el contenido del textarea
    txaDecifrar.value = codigo;
}  

function desencriptar(){
     //Agarro el valor escrito en el textarea "cifrar" y lo almaceno en una variable
     let codigo = document.getElementById("cifrar").value;
     console.log(codigo);
     let resultado = codigo.replace(/ai|enter|imes|ober|ufat/g,function(x){
        switch(x){
            case "ai":
                return "a"

            case "enter":
                return "e"

            case "imes":
                return "i"

            case "ober":
                return "o"

            case "ufat":
                return "u"
        }
     });
     console.log(resultado);
     let txaDecifrar = document.getElementById("descifrar");
     txaDecifrar.value = resultado;
}
function copiar(){
    let txaDecifrar = document.getElementById("descifrar");
    navigator.clipboard.writeText(txaDecifrar.value);
}