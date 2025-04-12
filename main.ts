input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    datalogger.log(datalogger.createCV("Torch", 1))
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    datalogger.log(datalogger.createCV("Torch", 0))
})
basic.showString("Torch")
basic.showString("A=On")
basic.showString("B=Off")
datalogger.log(datalogger.createCV("Torch", 0))
