input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . # . # .
        . . . . .
        # . . . #
        . # . # .
        . . # . .
        `)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . # . # .
        # # # # #
        . # # # .
        . . # . .
        . . . . .
        `)
    basic.clearScreen()
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    music.play(music.stringPlayable("C5 B A G F E D C ", 120), music.PlaybackMode.UntilDone)
})
basic.forever(function () {
	
})
