radio.onReceivedNumber(function (receivedNumber) {
    Infiloo = game.createSprite(0, 4)
})
input.onButtonPressed(Button.A, function () {
    if (!(Infiloo.isDeleted())) {
        radio.sendNumber(1)
        Infiloo.delete()
    }
})
input.onButtonPressed(Button.B, function () {
    if (!(Infiloo.isDeleted())) {
        radio.sendNumber(1)
        Infiloo.delete()
    }
})
let CAR: game.LedSprite = null
let Infiloo: game.LedSprite = null
basic.showLeds(`
    # . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    # # . . .
    # . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    # # # . .
    # # . . .
    # . . . .
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    # # # . .
    # # . . .
    # . . . .
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    # # # # .
    # # # . .
    # # . . .
    # . . . .
    . . . . .
    `)
basic.showLeds(`
    . # # # #
    # # # # .
    # # # . .
    # # . . .
    # . . . .
    `)
basic.showLeds(`
    . . # # #
    . # # # #
    # # # # .
    # # # . .
    # # . . .
    `)
basic.showLeds(`
    . . . # #
    . . # # #
    . # # # #
    # # # # .
    # # # . .
    `)
basic.showLeds(`
    . . . . #
    . . . # #
    . . # # #
    . # # # #
    # # # # .
    `)
basic.showLeds(`
    . . . . #
    . . . # #
    . . # # #
    . # # # #
    # # # # #
    `)
basic.showLeds(`
    . . . . .
    . . . . #
    . . . # #
    . . # # #
    . # # # #
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . #
    . . . # #
    . . # # #
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . #
    . . . # #
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . #
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
radio.setGroup(123)
Infiloo = game.createSprite(0, 4)
if (control.deviceName() != "gotag") {
    Infiloo.delete()
}
basic.forever(function () {
    CAR = game.createSprite(randint(0, 4), 0)
    for (let index = 0; index < 5; index++) {
        basic.pause(200)
        CAR.change(LedSpriteProperty.Y, 1)
        if (!(Infiloo.isDeleted())) {
            if (Infiloo.isTouching(CAR)) {
                basic.showString("CRASH!!!")
            }
        }
    }
    CAR.delete()
})
