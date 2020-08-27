input.onGesture(Gesture.TiltRight, function () {
    Infiloo.change(LedSpriteProperty.X, 1)
})
input.onGesture(Gesture.TiltLeft, function () {
    Infiloo.change(LedSpriteProperty.X, -1)
})
let CAR: game.LedSprite = null
let Infiloo: game.LedSprite = null
Infiloo = game.createSprite(0, 4)
basic.forever(function () {
    CAR = game.createSprite(randint(0, 4), 0)
    for (let index = 0; index < 5; index++) {
        basic.pause(1000)
        CAR.change(LedSpriteProperty.Y, 1)
        if (Infiloo.isTouching(CAR)) {
            basic.showString("CRASH!!!")
        }
    }
    CAR.delete()
})
