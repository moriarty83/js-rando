// Creates Random Float between 0 & 1 (including 0, not including 1 with 16 significant digits)

class Rando{

    constructor(){}

    Random (digits = 16){
        digits = digits > 16 ? 16 : digits
        return Math.random().toFixed(digits);
    }

    // Returns a random integrer from min (inclusive) to max (exclusive)
    RandomInt = function(min, max){
        return Math.floor(Math.random() * ((max) - min) + min);
    }

    RandomFloat(min, max, digits=16){
        digits = digits > 16 ? 16 : digits
        return (this.RandomInt(min, max)+(+this.Random(digits)));
    }

    RandomElement(array){
        return array[this.RandomInt(0, array.length)]
    }

    RandomHex(){
        return this.RandomInt(0, 16).toString(16)
    }

    RandomHexColor(){
        let hex = "#"
        for(let i = 0; i < 6; i++){
            hex = hex + this.RandomHex()
        }
        return hex
    }

    RandomRGBColor(){
        return `rgb(${this.RandomInt(0,256)}, ${this.RandomInt(0,256)}, ${this.RandomInt(0,256)})`
    }

    RandomRGBAColor(){
        return `rgba(${this.RandomInt(0,256)}, ${this.RandomInt(0,256)}, ${this.RandomInt(0,256)}, ${Number.parseFloat(this.Random()).toPrecision(1)})`
    }

}

export default Rando



