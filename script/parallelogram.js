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
function calculateParallelogramArea() {
const base =getParallelogram();
console.log(base)


}
function getParallelogram() {
    const parallelogramBaseInput = document.getElementById('parallelogram-base');
    const parallelogramBaseText = parallelogramBaseInput.value;
    const base = parseFloat(parallelogramBaseText);
    return base;
}