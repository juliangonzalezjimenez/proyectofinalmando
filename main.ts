input.onButtonPressed(Button.A, function () {
    radio.sendNumber(1)
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 100)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(0)
    maqueen.motorStop(maqueen.Motors.All)
})
radio.setGroup(21)
basic.showString("Hola")
music.playMelody("C5 B A G F E D C ", 120)
basic.forever(function () {
	
})
