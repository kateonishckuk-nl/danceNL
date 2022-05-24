function openDropdownMenu(id) {
    let ul = "ul" + id; 
    let obj = "obj" + id;

    let listClass = document.getElementById(ul);
    let objectClass = document.getElementById(obj);

    if (listClass.style.display === 'none') {
        listClass.style.display = 'block';
    } else {
        listClass.style.display = 'none';
    }
    
    if (objectClass.style.transform === 'rotate(0deg)') {
        objectClass.style.transform = 'rotate(90deg)';
    } else {
        objectClass.style.transform = 'rotate(0deg)';
    }
}

listClass.style.display = 'none';
objectClass.style.transform = 'rotate(0deg)';


