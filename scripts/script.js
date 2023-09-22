function openPage(name, element, color) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("content");
    for (i = 0; i < tabcontent.length; i++){
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tab");
    for (i = 0; i < tablinks.length; i++){
        tablinks[i].style.backgroundColor = "";
    }
    document.getElementById(name).style.display = "block";
    element.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
}