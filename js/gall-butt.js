var pic_count = document.getElementsByClassName('img-popup').length;
document.addEventListener('keydown', function(event) {
    var new_hash;
    if (event.keyCode == 37) {
        new_hash = parseInt(window.location.hash.substring(4)) - 1;
    } else if (event.keyCode == 39) {
        new_hash = parseInt(window.location.hash.substring(4)) + 1;
    } else {
        return;
    }
 
    new_hash = new_hash > pic_count ? 1 : (new_hash < 1 ? pic_count : new_hash);
    window.location.hash = 'pic' + new_hash;
}, true);