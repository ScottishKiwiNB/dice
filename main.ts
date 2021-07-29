input.onGesture(Gesture.Shake, function () {
    soundExpression.twinkle.playUntilDone()
    basic.showNumber(randint(1, 6))
})
basic.showString("SHAKE ME")
