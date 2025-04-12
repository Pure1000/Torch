input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
})
basic.showString("Torch")
basic.showString("A=On")
basic.showString("B=Off")
datalogger.log(datalogger.createCV("Torch", 0))
