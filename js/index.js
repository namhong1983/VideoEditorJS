window.onload = function (e) {
    calculateTimeBar();
};

window.onbeforeunload = function (e) {
    e = e || window.event;

    saveProject();

    if(currentProject.currentUploads > 0)
    {
        var msg = 'Envoi en cours des fichier, ne fermez pas encore la fenêtre ou tout sera perdu.';

        // For IE and Firefox
        if (e) {e.returnValue = msg;}

        // For Chrome and Safari
        return msg;
    }
};

function loadM() {
    $('#loadModal').modal('toggle');
}

function rowById(id, tab)
{
    var row = -1;

    for(var i = 0; i < tab.length; i++)
    {
        if(tab[i].id == id)
        {
            row = i;
        }
    }

    return row;
}

function getCurrentDate() {
    var date = new Date();

    var dayOfMonth = (date.getDate() < 10) ? '0' + date.getDate() : date.getDate();
    var month = ((date.getMonth() + 1) < 10) ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1);

    var hour = (date.getHours() < 10) ? '0' + date.getHours() : date.getHours();
    var minute = (date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes();
    var second = (date.getSeconds() < 10) ? '0' + date.getSeconds() : date.getSeconds();

    return dayOfMonth + '/' + month + '/' + date.getFullYear() + ' ' + hour + ':' + minute + ':' + second;
}

function xmlHTTP() {
    return (window.XMLHttpRequest) ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
}

Array.prototype.remove = function(from, to) { var rest = this.slice((to || from) + 1 || this.length); this.length = from < 0 ? this.length + from : from; return this.push.apply(this, rest); };

String.prototype.deleteAccent = function(){
    var accent = [
        /[\300-\306]/g, /[\340-\346]/g, // A, a
        /[\310-\313]/g, /[\350-\353]/g, // E, e
        /[\314-\317]/g, /[\354-\357]/g, // I, i
        /[\322-\330]/g, /[\362-\370]/g, // O, o
        /[\331-\334]/g, /[\371-\374]/g, // U, u
        /[\321]/g, /[\361]/g, // N, n
        /[\307]/g, /[\347]/g, // C, c
    ];
    var noaccent = ['A','a','E','e','I','i','O','o','U','u','N','n','C','c'];

    var str = this;
    for(var i = 0; i < accent.length; i++){
        str = str.replace(accent[i], noaccent[i]);
    }

    return str;
};