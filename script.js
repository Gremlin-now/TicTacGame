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
];
let field_line = document.getElementsByClassName("field__line");
let counter = 0;

let playersMark = ["O","O"];

let choiceButtContainer = [
    document.getElementById("X"),
    document.getElementById("O")
];
choiceButtContainer.forEach(element => {
    element.addEventListener("click", function(e){
        if(this.innerText == "X"){
            playersMark[0] = "X";
        }else{
            playersMark[1] = "X";
        }
        for(let i = 0; i < field_line.length; i++)
        {
            field_line[i].style.display = "grid";
        }
        document.getElementById("choice").style.display = "none";
    }, {once:true});
});

fieldButt.forEach(element => {
    element.addEventListener("click", function(e){
        counter++;
        this.innerText = (counter%2==1)?playersMark[0]:playersMark[1];
        this.disabled = true;
    }, {once:true});
});

