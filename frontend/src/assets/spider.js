/*
Cuando el cursor no se mueve durante un tiempo definido 
aparece una araÃ±a comiÃ©ndose el puntero.
@date: 15/NOV/2017
@author: Ricardo MArtÃ­nez Romero
@param: timeSlacker el tiempo de inactividad para que aparezca la araÃ±a-
*/
var timeEfecto, timeOpacity, timeKillSpider;
var opacitySpider = 0.3;
var blTermino = false;
var timeSlacker = 5000;

/*function fVariablesUrl()
{    
    //var url = document.location.href;    
    if(document.location.href.indexOf('?')>0){        
        
		timeSlacker = document.location.href.split('?')[1];        
		alert(timeSlacker+"--");
    }
}

fVariablesUrl();*/

/* document.body.onmousemove = handleMouseMove; */
document.body.addEventListener("mousemove",
    function(event) {

        if (blTermino == false) {

            var eventDoc, docuElemento, body;
            event = event || window.event;

            if (event.pageX == null && event.clientX != null) {
                eventDoc = (event.target && event.target.ownerDocument) || document;
                docuElemento = eventDoc.documentElement;
                bodyDoc = eventDoc.body;

                event.pageX = event.clientX +
                    (docuElemento && docuElemento.scrollLeft || bodyDoc && bodyDoc.scrollLeft || 0) -
                    (docuElemento && docuElemento.clientLeft || bodyDoc && bodyDoc.clientLeft || 0);
                event.pageY = event.clientY +
                    (docuElemento && docuElemento.scrollTop || bodyDoc && bodyDoc.scrollTop || 0) -
                    (docuElemento && docuElemento.clientTop || bodyDoc && bodyDoc.clientTop || 0);
            }



            clearTimeout(timeEfecto);
            timeEfecto = setTimeout(function () {
                fBlitzspider(event.pageX, event.pageY);
            }, timeSlacker);

            fKillBlitzSpiderMosca();
        }

    }
);



function fBlitzspider(pageX, pageY) {
    document.body.style.cursor = "none";

    var mosca = document.createElement('img');
    mosca.id = 'blitzmosca';
    mosca.src = 'http://blitzhive.com/blitzspider/blitzmosca.png';
    mosca.style.position = 'absolute';
    mosca.style.top = (pageY - 20) + 'px';
    mosca.style.left = (pageX - 20) + 'px';
    document.body.appendChild(mosca);

    var tag = document.createElement('img');
    tag.id = 'blitzspider';
    tag.src = 'http://blitzhive.com/blitzspider/blitzspider.gif';
    tag.style.opacity = opacitySpider + "";
    tag.style.position = 'absolute';
    tag.style.width = '250px';
    tag.style.height = '107px';
    tag.style.top = (pageY - 70) + 'px';
    tag.style.left = pageX + 'px';
    document.body.appendChild(tag);

    for (x = 1; x < 8; x++) {
        timeOpacity = setTimeout(function () {
            opacitySpider = opacitySpider + 0.1;
            tag.style.opacity = opacitySpider + "";
        }, 500 * x);
    }

    timeKillSpider = setTimeout(function () {
        /*  blTermino=true; */
        fKillBlitzSpiderMosca();
    }, 4000);
}

function fKillBlitzSpiderMosca() {
    document.body.style.cursor = "default";
    if (document.getElementById('blitzspider')) {
        var blitzspiderGif = document.getElementById('blitzspider');
        blitzspiderGif.parentNode.removeChild(blitzspiderGif);
        var blitzMosca = document.getElementById('blitzmosca');
        blitzMosca.parentNode.removeChild(blitzMosca);
        clearTimeout(timeKillSpider);
        clearTimeout(timeOpacity);
    }
}