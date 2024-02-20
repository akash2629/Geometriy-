function calculateRactangleArea(){
    // get ractangle width 
    const ractangleWidth =document.getElementById('ractangle-width');
    const ractangleWidthText =ractangleWidth.value;
    const width =parseFloat(ractangleWidthText);
    console.log(width)

    // get ractangle length
    const ractangleLength = document.getElementById('ractangle-length');
    const ractangleLengthText =ractangleLength.value;
    const length=parseFloat(ractangleLengthText)
    console.log(length)


    // calculate Triangle Area
    const area = width* length ;
    console.log('Ractangle area is :', area)





    const ractangleAreaSpan =document.getElementById('ractangle-area');
    ractangleAreaSpan.innerText= area;
}