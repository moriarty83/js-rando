// Creates Random Float between 0 & 1 (including 0, not including 1 with 16 significant digits)
function Random(digits = 16){
    digits = digits > 16 ? 16 : digits
    return Math.random().toFixed(digits);
}

// Returns a random integrer from min (inclusive) to max (exclusive)
function RandomInt(min, max){
    return Math.floor(Math.random() * ((max) - min) + min);
}


function RandomFloat(min, max, digits=16){
    digits = digits > 16 ? 16 : digits
    return (Math.floor(Math.random() * ((max) - min) + min)+Random()).toFixed(digits);
}

function RandomElement(array){
    return array[RandomInt(0, array.length)]
}

function RandomHex(){
    return RandomInt(0, 16).toString(16)
}

function RandomHexColor(){
    hex = "#"
    for(let i = 0; i < 6; i++){
        hex = hex + RandomHex()
    }
    return hex
}

function RandomRGBColor(){
    return `(${RandomInt(0,256)}, ${RandomInt(0,256)}, ${RandomInt(0,256)})`
}

function RandomRGBAColor(){
    return `(${RandomInt(0,256)}, ${RandomInt(0,256)}, ${RandomInt(0,256)}, ${Number.parseFloat(Random()).toPrecision(1)})`
}


console.log (RandomRGBAColor())
