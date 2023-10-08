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
let valueGameCells = { // Содержит значение ячеек
    A1:null,
    A2:null,
    A3:null,
    B1:null,
    B2:null,
    B3:null,
    C1:null,
    C2:null,
    C3:null
}
let message = document.getElementById("message");
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
        message.innerText = ""
        document.getElementById("choice").style.display = "none";
    }, {once:true});
});

fieldButt.forEach(element => {
    element.addEventListener("click", function(e){
        counter++;
        valueGameCells[this.id] = (counter%2==1)?playersMark[0]:playersMark[1]
        this.innerText = valueGameCells[this.id];
        if(checkWinner()){
            message.innerText = `Победитель ${checkWinner()}!`
            for(let i = 0; i < field_line.length; i++)
            {
                field_line[i].style.display = "none";
            }
        }
        if(checkDraw()){message.innerText = `Ничья`}
    }, {once:true});
});
function checkDraw(){
    let arr = objectTo2DArray(valueGameCells, 3);
    let checkNull = 0;
    for(let i = 0; i < 3; i++){
        checkNull += arr[i].filter((val)=>val==null).length
    }
    return checkNull == 0;
}
function checkWinner(){
    let result = false;
    let array = objectTo2DArray(valueGameCells, 3);
    let arrayT = arrayTranspose(array);
    let diagM = array.map((val, i) => val[i]) //создает массив из элементов главной диагонали массива array
    let diagS = array.map((val, i) => val[3-i-1])//создает массив из элементов побочной диагонали массива array
    for(let i = 0; i < 3; i++){
        if (areAllElementsIdentical(array[i])) result = array[i][0]
        if (areAllElementsIdentical(arrayT[i])) result = arrayT[i][0]
    }
    if(areAllElementsIdentical(diagM)) result = diagM[0]
    if(areAllElementsIdentical(diagS)) result = diagS[0]
    return result;
}

function areAllElementsIdentical(array){ //Проверяет все ли элементы массива идентичны
    return array.every((val, _, arr) => val === arr[0] && val !=null)
}

function objectTo2DArray(obj, size){ // Преобразует объект со значениями игрового поля в двумерный массив
    let array = [];
    for(let i = 0; i < size; i++){
        array[i]=Object.entries(obj).slice(i*size,size*(i+1)).map(entry=>entry[1]);
    }
    return array;
}

function arrayTranspose(array){ // Транспонируем массив
    return array[0].map((col, i) => array.map(row => row[i]))
}