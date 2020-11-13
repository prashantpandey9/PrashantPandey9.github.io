const menuBtn = document.querySelector('.custom-tog');

let menuOpen = false;
menuBtn.addEventListener('click',() => {
    if(!menuOpen){
        menuBtn.classList.add('open');
        menuOpen = true;
    }else{
        menuBtn.classList.remove('open');
        menuOpen = false;

    }
});


var div = document.createElement('div');

div.innerHTML = `
        <div class="grid">
            <img src=${"./gallery/img1.jpg"}>
            <div class="grid__body">
            <div class="relative">
                <a class="grid__link" target="_blank" href="/" ></a>
                <h1 class="grid__title">Title 1</h1>
                <p class="grid__author">Mario Rossi</p>
            </div>
            <div class="mt-auto" >
                <span class="grid__tag">#tag1</span>
            </div>
            </div>
        </div>
`;
document.getElementById('Gallery').appendChild(div);