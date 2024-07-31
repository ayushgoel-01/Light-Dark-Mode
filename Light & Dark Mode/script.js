const fullDarkModeCheckBox = document.querySelector('#full-dark-mode');
const containedDarkModeCheckBox = document.querySelector('#contained-dark-mode');
const container = document.querySelector('.container');

const fullDarkValue = JSON.parse(localStorage.getItem('fullDarkModeCheckBox'));
const containedDarkValue = JSON.parse(localStorage.getItem('containedDarkModeCheckBox'));

function changeFullDarkMode(){
    if(fullDarkModeCheckBox.checked){
        document.body.classList.add('dark');
        localStorage.setItem('fullDarkModeCheckBox',true);
    }
    else{
        document.body.classList.remove('dark');
        localStorage.setItem('fullDarkModeCheckBox',false);
    }
}

function changeContainedDarkMode(){
    if(containedDarkModeCheckBox.checked){
        container.classList.add('dark');
        localStorage.setItem('containedDarkModeCheckBox',true);
    }
    else{
        container.classList.remove('dark');
        localStorage.setItem('containedDarkModeCheckBox',false);
    }
}


if(fullDarkValue){
    fullDarkModeCheckBox.checked = true;
}
if(containedDarkValue){
    containedDarkModeCheckBox.checked = true;
}

changeFullDarkMode();
changeContainedDarkMode();

fullDarkModeCheckBox.addEventListener('change', (e)=>{
    changeFullDarkMode();
    changeContainedDarkMode();
}); 

containedDarkModeCheckBox.addEventListener('change', (e)=>{
    changeContainedDarkMode();
});

