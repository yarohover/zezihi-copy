// publishing projects number effect
let $pubs = document.querySelectorAll('#publish article');
function pubNum(winY) {
    if ($pubs[0].offsetTop < winY && winY < $pubs[1].offsetTop) {
        $pubs[0].classList.add('active');
        $pubs[1].classList.remove('active');
        $pubs[2].classList.remove('active');
        $pubs[3].classList.remove('active');
        $pubs[4].classList.remove('active');
    } else if ($pubs[1].offsetTop < winY && winY < $pubs[2].offsetTop) {
        $pubs[1].classList.add('active');
        $pubs[0].classList.remove('active');
        $pubs[2].classList.remove('active');
        $pubs[3].classList.remove('active');
        $pubs[4].classList.remove('active');
    } else if ($pubs[2].offsetTop < winY && winY < $pubs[3].offsetTop) {
        $pubs[2].classList.add('active');
        $pubs[0].classList.remove('active');
        $pubs[1].classList.remove('active');
        $pubs[3].classList.remove('active');
        $pubs[4].classList.remove('active');
    } else if ($pubs[3].offsetTop < winY && winY < $pubs[4].offsetTop) {
        $pubs[3].classList.add('active');
        $pubs[0].classList.remove('active');
        $pubs[1].classList.remove('active');
        $pubs[2].classList.remove('active');
        $pubs[4].classList.remove('active');
    } else if ($pubs[4].offsetTop < winY) {
        $pubs[4].classList.add('active');
        $pubs[0].classList.remove('active');
        $pubs[1].classList.remove('active');
        $pubs[2].classList.remove('active');
        $pubs[3].classList.remove('active');
    }
}


// second section scroll effect
let $script_start = document.querySelector('#second_sec').offsetTop;
let $script_wrap = document.querySelector('#second_sec #wrap2');

// window scroll event
window.addEventListener('scroll', function(){
    let winY = window.scrollY;
    pubNum(winY+100);
    if ($script_start < winY) {
        let gap = winY - $script_start;
        $script_wrap.scrollTo(gap,0);
    }
});