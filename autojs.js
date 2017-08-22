function makeCallBack(autos, name, elm) {
    return function(evt) {
        var cb = autos[name];
        var ret = cb(parseFloat(elm.value));
        elm.value = ret;
    }
}
function makeAssignmentCallBack(autos, name, elm) {
    var parts = name.split(".");
    if (parts > 2) {
        throw "invalid syntax!";
    }
    return function(evt) {
        var v = parseFloat(elm.value);
        console.log([parts,v]);
        autos[parts[0]][parts[1]] = v;
        elm.value = autos[parts[0]][parts[1]];
    }
}

function autoJSinstallCallbacks(autos) {
    var elms = document.getElementsByClassName("autojs");
    for (var i = 0; i < elms.length; i++) {
        let elm = elms[i];
        let name = elms[i].name;    
        if (-1 == name.indexOf(".")) {
            // callback
            elm.addEventListener('input',makeCallBack(autos, name, elm))
        } else {
            elm.addEventListener('input',makeAssignmentCallBack(autos, name, elm))
        }
    }
}
