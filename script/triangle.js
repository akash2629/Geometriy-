function calculateTriangleArea(){

    // get triangle base value
    const triangleBase = document.getElementById('triangle-base');
    const triangleBaseText =triangleBase.value;
    const base = parseFloat(triangleBaseText)
    console.log(base)

    // get triangle height value
    const triangleHight = document.getElementById('triangle-height');
    const triangleHightText =triangleHight.value;
    const height = parseFloat(triangleHightText);
    console.log(height);

    // calculate triangle Area
    const Area =0.5 * base * height;
    console.log('triangle area is:',Area) 

    const triangleAreaSpan = document.getElementById('triangle-area');
    triangleAreaSpan.innerText=Area;
}