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
input.onGesture(Gesture.Shake, function () {
    radio.sendString("Stop texting me or else")
})
radio.setGroup(1)
