function calculateRhombusArea(){
    // Rhombus P 
    const rhombusPInput =document.getElementById('rhombus-p');
    const rhombusPText =rhombusPInput.value;
    const P =parseFloat(rhombusPText)
    console.log(P)

    // Rhombus Q 
    const rhombusQInput =document.getElementById('rhombus-q');
    const rhombusQText =rhombusQInput.value;
    const Q =parseFloat(rhombusQText)
    console.log(Q)

    // calculate Rhombus Area
    const area =0.5 * P * Q;
    console.log('this is rhombus area',area)

    const rhumbosArea=document.getElementById('rhumbos-area');
    rhumbosArea.innerText=area;
}