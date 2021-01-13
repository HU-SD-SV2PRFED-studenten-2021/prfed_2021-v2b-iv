const searchBar = document.querySelector('#search-bar');
const toonSbBtn = document.querySelector('#toon-sb-btn');
const logo = document.querySelector('#wiki-logo-cont');
const body = document.querySelector('body');


function restoreSearchbar() {
    if (window.innerWidth >= 670) {
        logo.style.display = "block";
        searchBar.style.display = "block"
        toonSbBtn.style.display = "none";
    } else if (window.innerWidth < 670 && searchBar.style.display=='block') {
        logo.style.display = "none";
        toonSbBtn.style.display = "flex";
    } else {
        toonSbBtn.style.display = "flex";
    }
}

  


function toggleBar() {


    if  (searchBar.style.display == "block") {

        logo.style.display = 'block';
        searchBar.style.display = 'none';

        toonSbBtn.innerHTML = `
            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M15.853 16.56c-1.683 1.517-3.911 2.44-6.353 2.44-5.243 0-9.5-4.257-9.5-9.5s4.257-9.5 9.5-9.5 9.5 4.257 9.5 9.5c0 2.442-.923 4.67-2.44 6.353l7.44 7.44-.707.707-7.44-7.44zm-6.353-15.56c4.691 0 8.5 3.809 8.5 8.5s-3.809 8.5-8.5 8.5-8.5-3.809-8.5-8.5 3.809-8.5 8.5-8.5z"/></svg>
        `
    } else {

        logo.style.display = 'none';
        searchBar.style.display = 'block';

        toonSbBtn.innerHTML = `
            <svg width="24" height="24" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 22.88 22.88" style="enable-background:new 0 0 22.88 22.88;" xml:space="preserve">
            <path style="fill:#1E201D;" d="M0.324,1.909c-0.429-0.429-0.429-1.143,0-1.587c0.444-0.429,1.143-0.429,1.587,0l9.523,9.539
                                        l9.539-9.539c0.429-0.429,1.143-0.429,1.571,0c0.444,0.444,0.444,1.159,0,1.587l-9.523,9.524l9.523,9.539
                                        c0.444,0.429,0.444,1.143,0,1.587c-0.429,0.429-1.143,0.429-1.571,0l-9.539-9.539l-9.523,9.539c-0.444,0.429-1.143,0.429-1.587,0
                                        c-0.429-0.444-0.429-1.159,0-1.587l9.523-9.539L0.324,1.909z"/>
            </svg>
        `
    }
}

window.onresize = restoreSearchbar;


toonSbBtn.addEventListener('click', () => {
    toggleBar();
})  