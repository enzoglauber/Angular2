var minhaVar = "minha variavel";
function function_name(x, y) {
    return x + y;
}
// ES 6  ou ES 2015
var num = 2;
var PI = 3.14;
var numeros = [1, 2, 3];
//
numeros.map(function (valor) {
    return valor * 2;
});
//ES 2015
numeros.map(function (valor) { return valor * 2; });
var Matematica = (function () {
    function Matematica() {
    }
    Matematica.prototype.soma = function (x, y) {
        return x + y;
    };
    return Matematica;
}());
var n1;
n1 = 4;
