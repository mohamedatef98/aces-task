function adjustIframe(){
        //get the a reference to the iframe
        var iframe = document.querySelector('iframe');
        //get the window width
        var windowWidth = window.innerWidth - 20;

        //respect a breakpoint
        if((windowWidth / 16) >= 40){
            windowWidth = 40 * 16;
        }
        /* (windowWidth / 16) >= 40 ? windowWidth = 40 * 16 : 1; */

        //adjust the iframe
        iframe.width = windowWidth;
        iframe.height = windowWidth / 1.77;
}

//Now There is three different call to same function, Let's dive into them !.

//the first it to adjust the width and height of the iframe when the execution of the code starts.
adjustIframe();

/*
 the second (which really the first one to be added) to call the function when the page is fully loaded.
but some flickring issues happened because the iframe started really big, then when its was loaded the function 
was called then it was resized. (Bad UI).
because of that behaviour i added the previous call.
*/
window.onload = adjustIframe;

//the third (the most used) it resized the iframe every time there is a window resize.
window.onresize = adjustIframe;

//The side Nav functionality for mobile Nav.
var toggle = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');
var backdrop = document.querySelector('.backdrop');

toggle.addEventListener('click',()=>{
    backdrop.style.display = "block";
    mobileNav.style.display = "flex";
    setTimeout(()=>{
        backdrop.classList.add('open');
        mobileNav.classList.add('open');
        mobileNav.classList.add('slide');
    },10);
});

backdrop.addEventListener('click',()=>{
    backdrop.classList.remove('open');
    mobileNav.classList.remove('slide');
    mobileNav.classList.remove('open');
    setTimeout(()=>{
        backdrop.style.display = "none";
        mobileNav.style.display = "none";
    },300);
});
