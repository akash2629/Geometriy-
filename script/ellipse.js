function calculateEllipseArea(value){
    const a =getParallelogramInput('ellipse-a');
    
    const b =getParallelogramInput('ellipse-b');
    console.log(a,b)  
    
    const area= 3.1416 * a * b;
    console.log(area)

    setInnerText('ellipse-area' ,area)
}