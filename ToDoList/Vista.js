;
function View(){
    var contenedor = "";
    this.addElemento(nombreTarea, id){
        var li = "<li id=" + id + " onClick=marcar(" + id  + ")>" + nombreTarea + "</li>";
        document.getElementById("listaDeTareas").innerHTML += li;
    };
    this.removeElemento(id){
        
    };
}
