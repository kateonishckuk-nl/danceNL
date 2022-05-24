function closeSideMenu() {
    document.getElementById('side-menu').style.width = '0';
    document.getElementById('main').style.marginLeft = '0';
}

function openSideMenu() {
    document.getElementById('side-menu').style.width = '750px';
    document.getElementById('main').style.marginLeft = '750px';
}