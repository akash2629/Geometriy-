// --------------------------------------------First function way------------------------------------------------------------------------------

// function calculateParallelogramArea(){

//     // parallelogram Base 
//     const parallelogramBaseInput =document.getElementById('parallelogram-base');
//     const parallelogramBaseText =parallelogramBaseInput.value;
//     const Base = parseFloat(parallelogramBaseText);

//     console.log(Base);

//     // parallelogram Height 
//     const parallelogramHeightInput =document.getElementById('parallelogram-height');
//     const parallelogramHeightText=parallelogramHeightInput.value;
//     const Height =parseFloat(parallelogramHeightText);
//     console.log(Height)

//     // calculate area 
//     const area = Base * Height;
//     console.log('this is parallelegram area',area)


//     const parallelogramArea =document.getElementById('parallelogram-area');
//     parallelogramArea.innerText=area;

// }
// -------------------------------------------------- Second function way ---------------------------------------------------------------------------------------


// function calculateParallelogramArea() {
// const base =getParallelogram();
// console.log(base)


// }
// function getParallelogram() {
//     const parallelogramBaseInput = document.getElementById('parallelogram-base');
//     const parallelogramBaseText = parallelogramBaseInput.value;
//     const base = parseFloat(parallelogramBaseText);
//     return base;
// }

// ------------------------------------------------------ Third function way----------------------------------------------------------------------------------------------

function calculateParallelogramArea() {
    const base = getParallelogramInput('parallelogram-base')
    console.log('base value', base);

    const height = getParallelogramInput('parallelogram-height');
    console.log('height value', height);

    const area = base * height;
    console.log(area)

    setInnerText('parallelogram-area',area)
     
}

function getParallelogramInput(inputField) {
    const Input = document.getElementById(inputField);
    const Text = Input.value;
    const inputValue = parseFloat(Text);
    return inputValue;
}

function setInnerText(element ,area){
    const parallelegramArea =document.getElementById(element);
     parallelegramArea.innerText=area;
    
}

