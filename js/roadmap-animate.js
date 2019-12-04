var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
if (!isSafari) {
    var iS = false;
    window.addEventListener("scroll", tS, false);

    function tS(e) {
        if (iS == false) {
            window.requestAnimationFrame(function () {
                s(e);
                iS = false;
            });
        }
        iS = true;
    }

    document.addEventListener("DOMContentLoaded", s, false);
    var lines = document.getElementsByClassName('roadmap_map-item-line');
    var whiteLines = document.getElementsByClassName('roadmap_map-item-line-white');


    function s(e) {
        var sC = window.innerHeight / 2;
        for (var i = 0; i < lines.length; i++) {
            var line = lines[i];
            line = line.getBoundingClientRect();
            if (line.top < sC) {
                if (line.bottom > sC) {
                    var wH = sC - line.top;
                    whiteLines[i].style.height = wH + "px";
                } else {
                    whiteLines[i].style.height = "100%";
                }
            } else {
                whiteLines[i].style.height = "0";
            }
        }
    }
} else {
    var lines = document.getElementsByClassName('roadmap_map-item-line');
    for (var i = 0; i < lines.length; i++) {
        lines[i].style.backgroundColor = '#fff';
    }
    var iS = false;

    function tS(e) {
        if (iS == false) {
            window.requestAnimationFrame(function () {
                s(e);
                iS = false;
            });
        }
        iS = true;
    }
}