input.onButtonPressed(Button.A, function () {
    basic.showNumber(Sonar)
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(Total_Entry)
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(Entry)
})
let TrueOrFalse = 0
let Sonar = 0
let Total_Entry = 0
let Entry = 0
radio.setGroup(111)
Entry = 0
Total_Entry = 0
basic.showNumber(Entry)
basic.forever(function () {
    Sonar = sonar.ping(
    DigitalPin.P2,
    DigitalPin.P2,
    PingUnit.Centimeters
    )
    if (Sonar < 30) {
        if (Sonar > 1) {
            Entry += 1
            basic.showNumber(Entry)
            Total_Entry += 1
            radio.sendNumber(Entry)
            basic.pause(10000)
            TrueOrFalse += 1
        }
    }
})
basic.forever(function () {
    if (Entry == 2) {
        basic.pause(180000)
        while (Entry == 2) {
            music.playMelody("C C C C C C C C ", 60)
        }
    } else if (Entry >= 3) {
        while (Entry >= 3) {
            music.playMelody("C C C C C C C C ", 60)
        }
    }
})
basic.forever(function () {
    if (input.acceleration(Dimension.Z) >= 200 && (Entry == 1 && TrueOrFalse == 1)) {
        Entry += -1
        TrueOrFalse += -1
        basic.showNumber(Entry)
    } else if (input.acceleration(Dimension.Z) >= 200 && (Entry >= 2 && TrueOrFalse >= 2)) {
        Entry += -1
        TrueOrFalse += -1
        basic.showNumber(Entry)
    }
})
