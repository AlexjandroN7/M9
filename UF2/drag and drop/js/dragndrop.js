$( init );

function init() {
    $('#imgFlecha').draggable({
        containment: '#caja'


    });

    $('#imgCirculo').droppable({
        drop: handleDropEvent
    });
}



function handleDropEvent( event ) {

    window.location.href = "http://www.google.es";


}
