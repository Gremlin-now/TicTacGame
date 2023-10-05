let fieldButt = [
    document.getElementById("A1"),
    document.getElementById("A2"),
    document.getElementById("A3"),
    document.getElementById("B1"),
    document.getElementById("B2"),
    document.getElementById("B3"),
    document.getElementById("C1"),
    document.getElementById("C2"),
    document.getElementById("C3")
]
let counter = 0;
fieldButt.forEach(element => {
    console.log(element)
    element.addEventListener("click", function(e){
        counter++
        this.innerText = (counter%2==1)?"X":"O";
        this.disabled = true;
    }, {once:true});
});

