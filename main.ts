let de = 0
basic.forever(function () {
    de = input.compassHeading()
    if (de < 45) {
        basic.showString("N")
    } else if (de < 135) {
        basic.showString("E")
    } else if (de < 225) {
        basic.showString("S")
    } else if (de < 315) {
        basic.showString("O")
    } else {
        basic.showString("N")
    }
})
