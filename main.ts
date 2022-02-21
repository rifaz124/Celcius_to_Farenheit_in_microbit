let ctemp = 0
let ftemp = 0
input.onButtonPressed(Button.A, function () {
    basic.showNumber(ctemp)
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(ftemp)
})
basic.forever(function () {
    ctemp = input.temperature()
    ftemp = ctemp * 1.8
    ftemp = ftemp + 32
})
