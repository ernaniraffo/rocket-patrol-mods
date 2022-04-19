// Ernani Raffo
// Rocket Patrol Mods
// 04/18/2022
// The modifications took about 7 to 10 hours to implement.
// Modifications:
// - Displayed time in seconds on the screen (+ 10 points)
// - Implemented particle emitter when small spaceship explodes (+ 20 points)
// - Created new spaceship type that moves faster, is smaller, and worth more points (+ 20 points)
// - New artwork for all in game assets (+ 20 points)
// - Increased game timer for successful hits (+ 20 points)
// - Allowed player to control rocket to the right and left (+ 5 points)
// - Inscreased spaceship speed after half the original timer elapses (+ 5 points)
// Total: 10 + 20 + 20 + 20 + 20 + 5 + 5 = 100 points

let config = {
    type: Phaser.AUTO,
    width: 640,
    height: 480,
    scene: [ Menu, Play ]
}

let game = new Phaser.Game(config);
// reserve keyboard variables
let keyF, keyR, keyLEFT, keyRIGHT;
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;