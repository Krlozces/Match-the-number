// document.getElementById("count-el").innerText = 5;

let count = 0;
let machineCount = 0;
let countMachine = [];
let countStr = [];

let saveEl = document.getElementById("save-el");

function incrementCount() {
    machineCount = Math.floor(Math.random()*20);
    count +=1;
    document.getElementById("count-el").textContent = count;
}

function save(){
    countStr.push(count); //+= count " - "
    saveEl.textContent = "Your entries: " + countStr; 
    document.getElementById("count-el").textContent = count = 0;
    countMachine.push(machineCount);
}

function resetCount() {
    saveEl.innerText = " ";
    saveEl.textContent = "Previous entries: ";
    document.getElementById("evaluate-el").textContent = " ";
    document.getElementById("evaluate-el").textContent = "Machine entries: ";
    countMachine.splice(0, countMachine.length);
    countStr.splice(0, countStr.length);
}

function evaluateMachineNumbers() {
    if(countMachine.length >= 1){
        const open = document.getElementById('evaluate-btn');
        const modal_container = document.getElementById('modal_container');
        const close = document.getElementById('close');

        document.getElementById("evaluate-el").textContent += countMachine;
        let counter = 0;
        for(i = 0; i<countStr.length; i++){
            if(countMachine.includes(countStr[i])){
                counter += 1;
                document.getElementById("u-win").textContent = "You matched " + counter + "!";
            }
        }
        document.getElementById("u-win").textContent = "You matched " + counter + "!";
        open.addEventListener('click', () => {
            modal_container.classList.add('show');  
        });

        close.addEventListener('click', () => {
            modal_container.classList.remove('show');
        });
    }    
}

