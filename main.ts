controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.vx += 25
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.vx = 100
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    GRAVITY = 3
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile15`, function (sprite, location) {
    mySprite.vy = -225
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile13`, function (sprite, location) {
    Reverse_Gravity()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 f f f f f f f f f f f f f f 9 
        9 f f f 9 f f f f f 9 9 9 f f 9 
        9 f f f f 9 f f f f 9 9 9 f f 9 
        9 f f f f f 9 f f f 9 9 9 f f 9 
        9 f f f f f f 9 f f f f f f f 9 
        9 f f f f f f f f f f f f f f 9 
        9 f 9 9 f f 9 f f 9 f f 9 9 f 9 
        9 f 9 9 f f 9 9 9 9 f f 9 9 f 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 f 9 9 9 f f 9 9 f f 9 9 9 f 9 
        9 f f f f f f f f f f f f f f 9 
        9 f f f f f f f f f f f f f f 9 
        9 f f f f f f f f f f f f f f 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        `,img`
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 f f f f 9 9 f f f f f f f f 9 
        9 f f f 9 9 9 9 9 f f f f f f 9 
        9 f f f 9 9 9 9 9 f f f f f f 9 
        9 f f f 9 9 9 f f f f f f 9 f 9 
        9 f f f f 9 9 f f f f f 9 f f 9 
        9 f f f f 9 9 9 9 f f 9 f f f 9 
        9 f f f 9 9 9 9 f f 9 f f f f 9 
        9 f f f 9 9 9 9 f f f f f f f 9 
        9 f f f f 9 9 9 9 f f f f f f 9 
        9 f f f f 9 9 f f f f 9 9 9 f 9 
        9 f f f 9 9 9 f f f f 9 9 9 f 9 
        9 f f f 9 9 9 9 9 f f 9 9 9 f 9 
        9 f f f 9 9 9 9 9 f f f f f f 9 
        9 f f f f 9 9 f f f f f f f f 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        `,img`
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 f f f f f f f f f f f f f f 9 
        9 f f f f f f f f f f f f f f 9 
        9 f f f f f f f f f f f f f f 9 
        9 f 9 9 9 f f 9 9 f f 9 9 9 f 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 f 9 9 f f 9 9 9 9 f f 9 9 f 9 
        9 f 9 9 f f 9 f f 9 f f 9 9 f 9 
        9 f f f f f f f f f f f f f f 9 
        9 f f f f f f f 9 f f f f f f 9 
        9 f f 9 9 9 f f f 9 f f f f f 9 
        9 f f 9 9 9 f f f f 9 f f f f 9 
        9 f f 9 9 9 f f f f f 9 f f f 9 
        9 f f f f f f f f f f f f f f 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        `,img`
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 f f f f f f f f 9 9 f f f f 9 
        9 f f f f f f 9 9 9 9 9 f f f 9 
        9 f 9 9 9 f f 9 9 9 9 9 f f f 9 
        9 f 9 9 9 f f f f 9 9 9 f f f 9 
        9 f 9 9 9 f f f f 9 9 f f f f 9 
        9 f f f f f f 9 9 9 9 f f f f 9 
        9 f f f f f f f 9 9 9 9 f f f 9 
        9 f f f f 9 f f 9 9 9 9 f f f 9 
        9 f f f 9 f f 9 9 9 9 f f f f 9 
        9 f f 9 f f f f f 9 9 f f f f 9 
        9 f 9 f f f f f f 9 9 9 f f f 9 
        9 f f f f f f 9 9 9 9 9 f f f 9 
        9 f f f f f f 9 9 9 9 9 f f f 9 
        9 f f f f f f f f 9 9 f f f f 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        `],
    50,
    true
    )
    if (mySprite.isHittingTile(CollisionDirection.Top)) {
        music.play(music.melodyPlayable(music.beamUp), music.PlaybackMode.InBackground)
        mySprite.vy = 125
    }
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        music.play(music.melodyPlayable(music.beamUp), music.PlaybackMode.InBackground)
        mySprite.vy = -125
    }
    if (GRAVITY == 3) {
        music.play(music.melodyPlayable(music.beamUp), music.PlaybackMode.InBackground)
        mySprite.vy = -125
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile12`, function (sprite, location) {
    Proper_Gravity()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile9`, function (sprite, location) {
    color.startFadeFromCurrent(color.originalPalette)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 1))
    info.clearCountup()
    info.startCountup(false)
    Reverse_Gravity()
    DEATH += 1
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile18`, function (sprite, location) {
    mySprite.vx = 100
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile16`, function (sprite, location) {
    mySprite.vy = 225
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile20`, function (sprite, location) {
    Proper_Gravity()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile17`, function (sprite, location) {
    mySprite.vx = -100
})
controller.A.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, mySprite)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile8`, function (sprite, location) {
    color.startFadeFromCurrent(color.originalPalette)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 1))
    info.clearCountup()
    info.startCountup(false)
    Reverse_Gravity()
    DEATH += 1
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.vx += -25
})
controller.A.onEvent(ControllerButtonEvent.Repeated, function () {
    mySprite.vx = 100
    scroller.scrollBackgroundWithSpeed(-50, 0)
    info.startCountup(false)
    animation.runImageAnimation(
    mySprite,
    [img`
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 f f f f f f f f f f f f f f 9 
        9 f f f 9 f f f f f 9 9 9 f f 9 
        9 f f f f 9 f f f f 9 9 9 f f 9 
        9 f f f f f 9 f f f 9 9 9 f f 9 
        9 f f f f f f 9 f f f f f f f 9 
        9 f f f f f f f f f f f f f f 9 
        9 f 9 9 f f 9 f f 9 f f 9 9 f 9 
        9 f 9 9 f f 9 9 9 9 f f 9 9 f 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 f 9 9 9 f f 9 9 f f 9 9 9 f 9 
        9 f f f f f f f f f f f f f f 9 
        9 f f f f f f f f f f f f f f 9 
        9 f f f f f f f f f f f f f f 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        `,img`
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 f f f f 9 9 f f f f f f f f 9 
        9 f f f 9 9 9 9 9 f f f f f f 9 
        9 f f f 9 9 9 9 9 f f f f f f 9 
        9 f f f 9 9 9 f f f f f f 9 f 9 
        9 f f f f 9 9 f f f f f 9 f f 9 
        9 f f f f 9 9 9 9 f f 9 f f f 9 
        9 f f f 9 9 9 9 f f 9 f f f f 9 
        9 f f f 9 9 9 9 f f f f f f f 9 
        9 f f f f 9 9 9 9 f f f f f f 9 
        9 f f f f 9 9 f f f f 9 9 9 f 9 
        9 f f f 9 9 9 f f f f 9 9 9 f 9 
        9 f f f 9 9 9 9 9 f f 9 9 9 f 9 
        9 f f f 9 9 9 9 9 f f f f f f 9 
        9 f f f f 9 9 f f f f f f f f 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        `,img`
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 f f f f f f f f f f f f f f 9 
        9 f f f f f f f f f f f f f f 9 
        9 f f f f f f f f f f f f f f 9 
        9 f 9 9 9 f f 9 9 f f 9 9 9 f 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 f 9 9 f f 9 9 9 9 f f 9 9 f 9 
        9 f 9 9 f f 9 f f 9 f f 9 9 f 9 
        9 f f f f f f f f f f f f f f 9 
        9 f f f f f f f 9 f f f f f f 9 
        9 f f 9 9 9 f f f 9 f f f f f 9 
        9 f f 9 9 9 f f f f 9 f f f f 9 
        9 f f 9 9 9 f f f f f 9 f f f 9 
        9 f f f f f f f f f f f f f f 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        `,img`
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 f f f f f f f f 9 9 f f f f 9 
        9 f f f f f f 9 9 9 9 9 f f f 9 
        9 f 9 9 9 f f 9 9 9 9 9 f f f 9 
        9 f 9 9 9 f f f f 9 9 9 f f f 9 
        9 f 9 9 9 f f f f 9 9 f f f f 9 
        9 f f f f f f 9 9 9 9 f f f f 9 
        9 f f f f f f f 9 9 9 9 f f f 9 
        9 f f f f 9 f f 9 9 9 9 f f f 9 
        9 f f f 9 f f 9 9 9 9 f f f f 9 
        9 f f 9 f f f f f 9 9 f f f f 9 
        9 f 9 f f f f f f 9 9 9 f f f 9 
        9 f f f f f f 9 9 9 9 9 f f f 9 
        9 f f f f f f 9 9 9 9 9 f f f 9 
        9 f f f f f f f f 9 9 f f f f 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        `],
    50,
    true
    )
    if (GRAVITY == 1) {
        if (mySprite.isHittingTile(CollisionDirection.Top)) {
            music.play(music.melodyPlayable(music.beamUp), music.PlaybackMode.InBackground)
            mySprite.vy = 125
        }
    } else if (GRAVITY == 0) {
        if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
            music.play(music.melodyPlayable(music.beamUp), music.PlaybackMode.InBackground)
            mySprite.vy = -125
        }
    } else if (GRAVITY == 3) {
        music.play(music.melodyPlayable(music.beamUp), music.PlaybackMode.InBackground)
        mySprite.vy = -125
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile10`, function (sprite, location) {
    color.startFadeFromCurrent(color.originalPalette)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 1))
    info.clearCountup()
    info.startCountup(false)
    Reverse_Gravity()
    DEATH += 1
})
function Proper_Gravity () {
    GRAVITY = 0
    mySprite.ay = 350
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile23`, function (sprite, location) {
    color.startFadeFromCurrent(color.originalPalette)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 1))
    info.clearCountup()
    info.startCountup(false)
    Reverse_Gravity()
    DEATH += 1
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile14`, function (sprite, location) {
    Reverse_Gravity()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile11`, function (sprite, location) {
    color.startFadeFromCurrent(color.originalPalette)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 1))
    info.clearCountup()
    info.startCountup(false)
    Reverse_Gravity()
    DEATH += 1
})
function Reverse_Gravity () {
    GRAVITY = 1
    mySprite.ay = -350
}
let GRAVITY = 0
let DEATH = 0
let mySprite: Sprite = null
mySprite = sprites.create(assets.image`myImage3`, SpriteKind.Player)
let textSprite = textsprite.create(convertToText(["ATTEMPT", DEATH]))
let textSprite2 = textsprite.create("ATTEMPT")
DEATH = 0
mySprite.startEffect(effects.trail)
scene.cameraFollowSprite(mySprite)
tiles.setCurrentTilemap(tilemap`level2`)
scene.setBackgroundImage(img`
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999998888888888888888888888888888888899999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999998888888888888888888888888888888899999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999998888888888888888888888888888888899999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999998888888888888888888888888888888899999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999998888888888888888888888888888888899999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999998888888888888888888888888888888899999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999998888888888888888888888888888888899999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999998888888888888888888888888888888899999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999998888888888888888888888888888888899999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999998888888888888888888888888888888899999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999998888888888888888888888888888888899999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999998888888888888888888888888888888899999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999998888888888888888888888888888888899999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999998888888888888888888888888888888899999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999998888888888888888888888888888888899999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999998888888888888888888888888888888899999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999998888888888888888888888888888888899999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999998888888888888888888888888888888899999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999998888888888888888888888888888888899999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999998888888888888888888888888888888899999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999998888888888888888888888888888888899999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999998888888888888888888888888888888899999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999998888888888888888888888888888888899999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999998888888888888888888888888888888899999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999998888888888888888888888888888888899999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999998888888888888888888888888888888899999999999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc99999
    9999999998888888888888888888888888888888899999999999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc99999
    9999999998888888888888888888888888888888899999999999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc99999
    9999999998888888888888888888888888888888899999999999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc99999
    9999999998888888888888888888888888888888899999999999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc99999
    9999999998888888888888888888888888888888899999999999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc99999
    9999999998888888888888888888888888888888899999999999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc99999
    9999999999999999999999999999999999999999999999999999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc99999
    9999999999999999999999999999999999999999999999999999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc99999
    9999999999999999999999999999999999999999999999999999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc99999
    9999999999999999999999999999999999999999999999999999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc99999
    9999999999999999999999999999999999999999999999999999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc99999
    9999999999999999999999999999999999999999999999999999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc99999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999998888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    9999999999999999999999999999999999999999999999999999999999998888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    9999999999999999999999999999999999999999999999999999999999998888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    9999999999999999999999999999999999999999999999999999999999998888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    9999999999999999999999999999999999999999999999999999999999998888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    9999999999999999999999999999999999999999999999999999999999998888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    9999999999999999999999999999999999999999999999999999999999998888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    9999999999999999999999999999999999999999999999999999999999998888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    9999999999999999999999999999999999999999999999999999999999998888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    9999999999999999999999999999999999999999999999999999999999998888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    9999999999999999999999999999999999999999999999999999999999998888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    9999999999999999999999999999999999999999999999999999999999998888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    9999999999999999999999999999999999999999999999999999999999998888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    9999999999999999999999999999999999999999999999999999999999998888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    9999999999999999999999999999999999999999999999999999999999998888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    9999999999999999999999999999999999999999999999999999999999998888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    9999999999999999999999999999999999999999999999999999999999998888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    9999999999999999999999999999999999999999999999999999999999998888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    9999999999999999999999999999999999999999999999999999999999998888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    9999999999999999999999999999999999999999999999999999999999998888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    9999999999999999999999999999999999999999999999999999999999998888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    9999999999999999999999999999999999999999999999999999999999998888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    9999999999999999999999999999999999999999999999999999999999998888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    9999999999999999999999999999999999999999999999999999999999998888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    9999999999999999999999999999999999999999999999999999999999998888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    9999999999999999999999999999999999999999999999999999999999998888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    9999999999999999999999999999999999999999999999999999999999998888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    9999999999999999999999999999999999999999999999999999999999998888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    9999999999999999999999999999999999999999999999999999999999998888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    9999999999999999999999999999999999999999999999999999999999998888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    9999999999999999999999999999999999999999999999999999999999998888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    9999999999999999999999999999999999999999999999999999999999998888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    `)
tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 1))
Reverse_Gravity()
scroller.scrollBackgroundWithCamera(scroller.CameraScrollMode.OnlyHorizontal)
game.splash("Hold B or Space to start. Press up to speed the game up, and down to slow the game down. Pressing B will reset the speed.")
let WAVE = 0
forever(function () {
    info.setScore(info.getTimeElapsed())
})
forever(function () {
    Music.CatQuestVo1(songs.Ocean)
})
forever(function () {
    mySprite.sayText("Speed:" + mySprite.vx)
})
forever(function () {
    textSprite.setMaxFontHeight(20)
    textSprite.setText(convertToText(DEATH))
    textSprite.setMaxFontHeight(10)
    textSprite2.setText("ATTEMPT")
    tiles.placeOnTile(textSprite2, tiles.getTileLocation(2, 4))
    tiles.placeOnTile(textSprite, tiles.getTileLocation(4, 4))
})
