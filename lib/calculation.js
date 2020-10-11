document.onkeydown = function (e) {
    if(e.key.toLowerCase()=='r' && e.ctrlKey){
        location.reload;
        return true
    } 
    return false;
}
