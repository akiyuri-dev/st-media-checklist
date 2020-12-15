function save() {
    alert(
        "save"
    );
    var c = document.getElementsByName("checklists");
    console.log(c.length);
    
    for (let i = 0; i < c.length; i++) {
        alert(i + ":" );
        
    }
}