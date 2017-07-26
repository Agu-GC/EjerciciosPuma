;
function Controller() {
    var modelo = Model();
    var vista = View(),
    this.agregar = function () {
        var nombreTarea = document.getElementById("txtNombreTarea").value;
        var id = this.modelo.addElemento(nombreTarea);
        this.vista.addElemento(nombreTarea, id);
    };
    this.borrar = function (elementId) {
        modelo.removeElemento(elementId);
        vista.removeElemento(elementId);
    }
    
}
controlador = new Controller();