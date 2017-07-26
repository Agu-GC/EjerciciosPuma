;
function Model() {
    var lista = [], id = 0;
    
    var indetificador = (function () {
        var id = 0;
        return function () { return id++; };
    })();
    
    var modelo = {
        getElementos : function () {
            return lista;
        },
        addElemento : function (elemento) {
            var tarea = {
                id: this.indetificador,
                nombre: elemento
            };
            lista.push(tarea);
            return tarea.id;
        },
        removeElemento : function (id) {
            lista.forEach(function (tarea, index) {
                if (tarea.id === id) {
                    lista.splice(index, 1);
                    break;
                }
            });
        }        
    };
    return modelo;
}

/*Function Tarea (nombre){
    var nombre = nombre;
    var indetificador = (function() {
        var id = 0;
        return function() { return id++; };
    })();*/
