input.onButtonPressed(Button.A, function () {
    basic.showString("Playing Sound")
    music.startMelody(music.builtInMelody(Melodies.Ode), MelodyOptions.Once)
})
basic.showString("READY")
basic.forever(function () {
	
})
