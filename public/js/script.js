const modal = (id) => {
    let element = document.getElementById(id);
    let main = document.getElementById('main');
    element.style.display = "block";
    main.style.backgroundColor = "#00000059"

}

const closeModal = (id) => {
    let element = document.getElementById(id);
    element.style.display = "none";
    main.style.backgroundColor = "#f5f5f5"

}
