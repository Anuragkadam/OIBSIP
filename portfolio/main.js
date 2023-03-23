
function navtoggle(navlist){
let listchange = document.querySelector('.navbar');
listchange.classList.toggle('list');
navlist.classList.toggle('fa-x')
   
} 

// --------------toggle Dark- Mode--------------

function toggle(toggle){
    document.body.classList.toggle('dark-theme');
    toggle.classList.toggle('fa-toggle-on'); 
}

// --------------Text Change-----------------

function changetext(){
    setTimeout(()=> {
        document.getElementById('second-text').textContent = 'Videographer';
    },4000);
    setTimeout(()=> {
        document.getElementById('second-text').textContent = 'Music Producer';
    },8000);
    setTimeout(()=> {
        document.getElementById('second-text').textContent = 'YouTuber';
    },12000);
    setTimeout(()=> {
        document.getElementById('second-text').textContent = 'Web Developer';
    },0);
}
changetext();
setInterval(changetext,16000);