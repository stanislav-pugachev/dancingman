input.onPinPressed(TouchPin.P0, function () {
    basic.showLeds(`
        . . . . .
        . . # . .
        . # # # .
        . . # . .
        . # . # .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.showIcon(IconNames.SmallSquare)
    basic.showIcon(IconNames.Square)
    basic.showIcon(IconNames.SmallSquare)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.showIcon(IconNames.Happy)
})
input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . . . .
        . . # . .
        . # # # .
        . . # . .
        . # . # .
        `)
    basic.showLeds(`
        . . . . .
        . . # . .
        # # # # #
        . . # . .
        . # . # .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        . . # . .
        . # # # .
        . . # . .
        . # . # .
        `)
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        . . . . .
        . . # . .
        . # # # .
        . . # . .
        . # . # .
        `)
    basic.showLeds(`
        . . . . .
        . . # . .
        # # # # #
        . . # . .
        . # . # .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        # . # . .
        # # # # #
        . . # . #
        . # . # .
        `)
    basic.showLeds(`
        . . . . .
        . . # . .
        # # # # #
        . . # . .
        . # . # .
        `)
    basic.showLeds(`
        . . . . .
        . . # . .
        . # # # .
        . . # . .
        . # . # .
        `)
    basic.showLeds(`
        . . . . .
        . . # . .
        # # # # #
        . . # . .
        . # . # .
        `)
    basic.showLeds(`
        . . . . .
        . . # . #
        # # # # #
        # . # . .
        . # . # .
        `)
    basic.showLeds(`
        . . . . .
        . . # . .
        # # # # #
        . . # . .
        . # . # .
        `)
    basic.showLeds(`
        . . . . .
        . . # . .
        . # # # .
        . . # . .
        . # . # .
        `)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . . . .
        . . # . .
        . # # # .
        . . # . .
        . # . # .
        `)
    basic.showLeds(`
        . . . . .
        . . # . .
        # # # # #
        . . # . .
        . # . # .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        # . # . #
        # # # # #
        . . # . .
        . # . # .
        `)
    basic.showLeds(`
        . . . . .
        . . # . .
        # # # # #
        . . # . .
        . # . # .
        `)
    basic.showLeds(`
        . . . . .
        . . # . .
        . # # # .
        . . # . .
        . # . # .
        `)
})
input.onGesture(Gesture.ScreenUp, function () {
    basic.showLeds(`
        . . . . .
        . . # . .
        . # # # .
        . . # . .
        . # . # .
        `)
    basic.showLeds(`
        . . # . .
        . # # # .
        . . # . .
        . # . # .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . # . .
        . # # # .
        . . # . .
        . # . # .
        `)
})
basic.showLeds(`
    . . . . .
    . . # . .
    . # # # .
    . . # . .
    . # . # .
    `)
basic.forever(function () {
	
})
