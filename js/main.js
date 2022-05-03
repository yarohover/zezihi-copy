// second section scroll effect
let $script_start = document.querySelector('#second_sec').offsetTop;
console.log($script_start);
let $script_wrap = document.querySelector('#second_sec #wrap2');
window.addEventListener('scroll', function(event){
    let winY = window.scrollY;
    if ($script_start < winY) {
        let gap = winY - $script_start;
        console.log(gap);
        $script_wrap.scrollTo(gap,0);
    }
});