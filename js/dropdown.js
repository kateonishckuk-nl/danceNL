const showDropdownItems = (id) => {
    let m = 'u' + id;
    let n = 'obj' + id;

    let listItem = document.getElementById(m);
    let objectItem = document.getElementById(n);

    if (listItem.style.display == 'none') {
        listItem.style.display = 'block';
    } else if (listItem.style.display == 'block') {
        listItem.style.display = 'none';
    } else {
        listItem.style.display = 'none';
    }
  
    objectItem.classList.toggle('test_object');
}

objectItem.classList.remove('test_object');
listItem.style.display = 'none';