//1. Project Setup
// Html->canvas, javascript ->references,
// canvas set (width,height,background-color)
//obtain the context
//2. Player
//3. Falling , gravity
//4. Movement->optimize
//5. Platforms
//6. Collision
//7. Multiple Platforms
//8. Scrolling -> platform
//9. Win situation
//10. Pitfall

const speed = 5;
let offset = 0;

const backImage = new Image();
backImage.src = "./images/background.png";

const hillsImage = new Image();
hillsImage.src = "./images/hills.png";

const plaformBase = new Image();
plaformBase.src = "./images/platform.png";

const plaformSmall = new Image();
plaformSmall.src = "./images/platformSmallTall.png";

const playerStandRight = new Image();
playerStandRight.src = "./images/spriteStandRight.png";

const playerStandLeft = new Image();
playerStandLeft.src = "./images/spriteStandLeft.png";

const playerRunRight = new Image();
playerRunRight.src = "./images/spriteRunRight.png";

const playerRunLeft = new Image();
playerRunLeft.src = "./images/spriteRunLeft.png";

// include all images here
let images = [
    backImage,
    hillsImage,
    plaformBase,
    plaformSmall,
    playerStandRight,
    playerRunRight,
    playerStandLeft,
    playerRunLeft
];

const totalImages = images.length;
let gameStart = false;
let count = 0;

images.forEach((image) => {
    image.addEventListener("load", () => {
        count++;
    });
});

const gameCanvas = document.querySelector("#gameCanvas");
gameCanvas.width = window.innerWidth;
gameCanvas.height = window.innerHeight;
gameCanvas.style.background = "yellow";

const context = gameCanvas.getContext("2d");

const gravity = 0.5;

const keys = {
    right: false,
    left: false
};

//2. Player
class Player {
    constructor() {
        this.position = {
            x: 100,
            y: 300
        };

        this.velocity = {
            x: 0,
            y: 1
        };

        this.width = 66;
        this.height = 150;

        this.frames = 0;

        this.image = playerStandRight;
        this.cropWidth = 177;
    }

    draw() {
        context.drawImage(
            this.image,
            this.cropWidth * this.frames,
            0,
            this.cropWidth,
            400,
            this.position.x,
            this.position.y,
            this.width,
            this.height
        );
    }

    update() {
        this.frames++;

        if (this.image == playerStandRight && this.frames > 59)
            this.frames = 0;

        if (this.image == playerStandLeft && this.frames > 59)
            this.frames = 0;

        if (this.image == playerRunRight && this.frames > 29)
            this.frames = 0;

        if (this.image == playerRunLeft && this.frames > 29)
            this.frames = 0;

        this.position.y += this.velocity.y;
        this.position.x += this.velocity.x;

        // Pitfall 
        if (this.position.y + this.height + this.velocity.y >= window.innerHeight) {
            this.velocity.y = 0;
            window.location.reload();

        }
        else
            this.velocity.y += gravity;

        this.draw();
    }
}

class Platform {
    constructor(x, y, image) {
        this.position = {
            x: x,
            y: y
        };
        this.width = image.width;
        this.height = image.height;
        this.image = image;
    }

    draw() {
        context.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
    }

    update() {
        this.draw();
    }
}

// Pitfall Generator
function generatePlatforms() {
    let platforms = [];

    // first platform
    platforms.push(new Platform(0, window.innerHeight - plaformBase.height, plaformBase));
    platforms.push(new Platform(plaformBase.width, window.innerHeight - plaformBase.height, plaformBase));

    let x = plaformBase.width * 2;
    const maxLength = 15000; // game length

    while (x < maxLength) {
        let chance = Math.random();

        // GAP
        if (chance < 0.25) {
            x += 250 + Math.random() * 250;
            continue;
        }

        // BASE PLATFORM
        platforms.push(new Platform(x, window.innerHeight - plaformBase.height, plaformBase));

        // SMALL PLATFORM
        if (chance > 0.6) {
            let randomY = window.innerHeight - plaformSmall.height - (Math.random() * 250 + 80);
            platforms.push(new Platform(x + 150, randomY, plaformSmall));
        }

        x += plaformBase.width + (Math.random() * 200);
    }

    return platforms;
}

const player = new Player();
player.draw();

// generate random platforms with pitfalls
const platforms = generatePlatforms();

function animate() {
    requestAnimationFrame(animate);

    context.clearRect(0, 0, window.innerWidth, window.innerHeight);

    context.drawImage(backImage, 0 - offset, 0);
    context.drawImage(hillsImage, 0 - offset, 0);

    platforms.forEach((platform) => {
        platform.update();
    });

    player.update();

    // LEFT RUN + RIGHT RUN animation logic
    if (keys.right) {
        player.image = playerRunRight;
        player.cropWidth = 340;
        player.width = 127;
    }
    else if (keys.left) {
        player.image = playerRunLeft;
        player.cropWidth = 340;
        player.width = 127;
    }
    else {
        if (player.image == playerRunRight)
            player.image = playerStandRight;
        else if (player.image == playerRunLeft)
            player.image = playerStandLeft;

        player.cropWidth = 177;
        player.width = 66;
    }

    // movement 
    if (keys.right && player.position.x < 950)
        player.velocity.x = speed;

    else if (keys.left && player.position.x > 0)
    player.velocity.x = -speed;

    else {
        player.velocity.x = 0;

        if (keys.right) {
            offset += speed;
            platforms.forEach((platform) => {
                platform.position.x -= speed;
            });
        }

        if (keys.left && offset > 0) {
            offset -= speed;
            platforms.forEach((platform) => {
                platform.position.x += speed;
            });
        }
    }

    // cant go back before start
    if (offset < 0) offset = 0;

    // collision detection
    platforms.forEach((platform) => {

        // landing collision
        if ((player.position.y + player.height) <= platform.position.y &&
            (player.position.y + player.height + player.velocity.y) >= platform.position.y &&
            player.position.x + player.width >= platform.position.x &&
            player.position.x <= platform.position.x + platform.width
        ) {
            player.velocity.y = 0;
        }

        // side collision
        if (player.position.x + player.width + 1 >= platform.position.x &&
            player.position.x <= platform.position.x + platform.width &&
            player.position.y + player.height >= platform.position.y &&
            player.position.y <= platform.position.y + platform.height
        ) {
            player.velocity.x = 0;
        }
    });
}

let id = setInterval(check, 100);

function check() {
    if (count == totalImages && gameStart == false) {
        gameStart = true;
        clearInterval(id);
        animate();
    }
}

// controls
addEventListener("keydown", (e) => {
    if (e.key == "ArrowRight")
        keys.right = true;

    if (e.key == "ArrowLeft")
        keys.left = true;

    if (e.key == "ArrowUp")
        player.velocity.y = -12;
});

addEventListener("keyup", (e) => {
    if (e.key == "ArrowRight")
        keys.right = false;

    if (e.key == "ArrowLeft")
        keys.left = false;
});
