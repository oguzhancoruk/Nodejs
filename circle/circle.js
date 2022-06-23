function circleArea(radius){
    const area=Math.PI*(radius*radius)
    console.log(area)
}

function circleCircumference(radius){
    const circumference =2*Math.PI*radius
    console.log(circumference)
}

module.exports = { circleArea, circleCircumference }