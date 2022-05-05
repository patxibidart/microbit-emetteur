input.onButtonPressed(Button.A, function () {
    radio.sendString("G")
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("F")
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("D")
})
radio.setGroup(1)
