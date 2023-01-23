input.onButtonPressed(Button.A, function () {
    radio.sendString("Hey dog")
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("Stupid")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("What up?")
})
radio.setGroup(1)
