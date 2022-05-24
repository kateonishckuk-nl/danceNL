document.querySelector('.close-item').style.display = 'none';
document.querySelector('.side-nav').style.display = 'none';

function closeSideMenu() {
    document.querySelector('.open-item').style.display = 'block';
    document.querySelector('.close-item').style.display = 'none';
    document.querySelector('.side-nav').style.display = 'none';
}

function openSideMenu() {
    document.querySelector('.open-item').style.display = 'none';
    document.querySelector('.close-item').style.display = 'block';
    document.querySelector('.side-nav').style.display = 'block';
}