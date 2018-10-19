function startGame() {
    gameArea.start();
    if(document.getElementById("player1Ninja").selected == true){
        player1 = new player(8, 16, "images/player1/ninjaAnimationSheet.png", 20, 120, 1, "ninja", 1);
        player1CD = new cooldownIcon(1, "images/player1/ninjaHead.png", 77, 5);
    }
    else if(document.getElementById("player1Mage").selected == true){
        player1 = new player(10, 20, "images/player1/mageAnimationSheet.png", 20, 120, 1, "mage", 1);
        player1CD = new cooldownIcon(1, "images/player1/mageHead.png", 77, 5);
    }
    else if(document.getElementById("player1Brute").selected == true){
        player1 = new player(24, 32, "images/player1/bruteAnimationSheet.png", 20, 120, 1, "brute", 1);
        player1CD = new cooldownIcon(3, "images/player1/ninjaHead.png", 77, 5);
    }
    else{
        player1 = new player(80, 160, "images/player1/playerModelAnimationSheet.png", 20, 120, 1, "doesn't matter what I put here since I make all the things have default", 1);
        player1CD = new cooldownIcon(3, "images/player1/ninjaHead.png", 77, 5);
    }
    if(document.getElementById("player2Ninja").selected == true){ 
        player2 = new player(8, 16, "images/player2/ninjaAnimationSheet.png", 272, 120, 1, "ninja", 2);
        player2CD = new cooldownIcon(2, "images/player2/ninjaHead.png", 212, 5);
    }
    else if(document.getElementById("player2Mage").selected == true){
        player2 = new player(10, 20, "images/player2/mageAnimationSheet.png", 272, 120, 1, "mage", 2);
        player2CD = new cooldownIcon(2, "images/player2/mageHead.png", 212, 5);
    }
    else if(document.getElementById("player2Brute").selected == true){
        player2 = new player(24, 32, "images/player2/bruteAnimationSheet.png", 272, 120, 1, "brute", 2);
        player2CD = new cooldownIcon(3, "images/player1/ninjaHead.png", 212, 5);
    }
    else{
        player2 = new player(80, 160, "images/player2/playerModelAnimationSheet.png", 272, 120, 1, "doesn't matter what I put here since I make all the things have default", 2);
        player2CD = new cooldownIcon(3, "images/player1/ninjaHead.png", 77, 5);
    }
    player1Shuriken1 = new shuriken(1, 8, 8, "images/shuriken.png", -5 , 134, -1); //Constructors
    player2Shuriken1 = new shuriken(2, 8, 8, "images/shuriken.png", -5 , 134, -1); //Just summoning these off screen so stuff won't break
    player1Shuriken2 = new shuriken(1, 8, 8, "images/shuriken.png", -5 , 134, -1);
    player2Shuriken2 = new shuriken(2, 8, 8, "images/shuriken.png", -5 , 134, -1);
    player1Shuriken3 = new shuriken(1, 8, 8, "images/shuriken.png", -5 , 134, -1);
    player2Shuriken3 = new shuriken(2, 8, 8, "images/shuriken.png", -5 , 134, -1);
    player1Shuriken4 = new shuriken(1, 8, 8, "images/shuriken.png", -5 , 134, -1);
    player2Shuriken4 = new shuriken(2, 8, 8, "images/shuriken.png", -5 , 134, -1);
    player1Fireball = new fireball(3, false, -500, -500);
    player2Fireball = new fireball(3, false, -500, -500);
    player1HealthBar = new healthBar(1, player1.health);
    player2HealthBar = new healthBar(2, player2.health);
    platform1 = new platform(60, 4, "grey", 1000, 100, 0, 0, false, false);
    platform2 = new platform(80, 4, "grey", 1000, 60, 0, 0, false, false);
    platform3 = new platform(60, 4, "grey", 1000, 100, 0, 0, false, false);
    platform4 = new platform(80, 4, "grey", 1000, 60, 0, 0, false, false);
    platform5 = new platform(60, 4, "grey", 1000, 100, 0, 0, false, false);
    if(document.getElementById("normal").selected == true){
        platform1 = new platform(60, 4, "grey", 0, 100, 0, 0, false, false);
        platform2 = new platform(80, 4, "grey", 110, 60, 0, 0, false, false);
        platform3 = new platform(60, 4, "grey", 240, 100, 0, 0, false, false);
    }
    else if(document.getElementById("inverted").selected == true){
        platform1 = new platform(60, 4, "grey", 0, 60, 0, 0, false, false);
        platform2 = new platform(80, 4, "grey", 110, 100, 0, 0, false, false);
        platform3 = new platform(60, 4, "grey", 240, 60, 0, 0, false, false);
    }
    else if(document.getElementById("moving").selected == true){
        platform1 = new platform(60, 6, "orange", 0, 130, 0, -1, false, false);
        platform2 = new platform(80, 6, "orange", 110, 45, 0, -1, false, false);
        platform3 = new platform(60, 6, "orange", 240, 130, 0, -1, false, false);
    }
    else if(document.getElementById("random").selected == true){
        platform1 = new platform(60, 4, "grey", 90, 0, 0, 0, true, true);
        platform2 = new platform(80, 4, "grey", 180, 60, 0, 0, true, true);
        platform3 = new platform(60, 4, "grey", 270, 120, 0, 0, true, true);
        platform4 = new platform(80, 4, "grey", 180, 60, 0, 0, true, true);
        platform5 = new platform(60, 4, "grey", 90, 120, 0, 0, true, true);
    }
    else if(document.getElementById("colorful").selected == true){
        platform1 = new platform(60, 4, "grey", 0, 110, 1, 0, true, false);
        platform2 = new platform(80, 4, "grey", 110, 60, 0, -1, true, false);
        platform3 = new platform(60, 4, "grey", 240, 110, -1, 0, true, false);
        platform4 = new platform(60, 4, "grey", 80, 50, 1, 0, true, false);
        platform5 = new platform(60, 4, "grey", 160, 50, -1, 0, true, false);
    }
    else if(document.getElementById("face").selected == true){
        platform1 = new platform(20, 4, "grey", 20, 60, 0, 0, false, false);
        platform2 = new platform(120, 4, "grey", 90, 110, 0, 0, false, false);
        platform3 = new platform(20, 4, "grey", 260, 60, 0, 0, false, false);
    }
}
var gameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.canvas.style.opacity = 1;
        this.canvas.className += "fade";
        document.getElementById("startGameButton").style.display = 'none';
        document.getElementById("player1Select").style.display = 'none';
        document.getElementById("player2Select").style.display = 'none';
        document.getElementById("mapSelect").style.display = 'none';
        document.body.style.backgroundColor = "aliceblue";
        this.tick = setInterval(updateGameArea, 20);
        this.updateAnimations = setInterval(updateAnimations, 100);
        this.outsideArena = setInterval(checkOutside, 2000);
        //Runs updateGameArea veerrry quickly over and over again
    },
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },
    slowInterval : function(){
        this.doopadoo = setInterval(updateGameArea, 120);
        this.updateAnimations = setInterval(updateAnimations, 600);
    },
    slowMode : 1,
    timePassed : 0,
}
function player(width, height, image, x, y, animationFrame, character, playerNumber) { //I'm sorry for all the variables
    this.width = width; //Blah blah, sizing
    this.height = height; //More sizing
    this.modelWidth = 8;
    this.modelHeight = 16;
    this.drawWidth = width;
    this.drawHeight = height;
    this.image = new Image(); 
    this.image.src = image;
    this.originalImageSrc = image;
    this.animationFrame = animationFrame; //8 is the animation width
    this.speedX = 0; //Horizontal speed
    this.speedY = 0; //Vertical speed
    this.direction = 0;
    this.gravity = 0.2;
    this.gravitySpeed = 0;
    this.onGround = false;
    this.blocking = false; //finish later
    //Ninja Stuff
    this.shurikenCount = 0;
    this.doubleJumped = false;
    this.reflectCD = 100;
    this.reflecting = false;
    //Mage Stuff
    this.timeyChargeyUppeyThingey = 0;
    //Brute Stuff
    this.bruteHammering = false;
    this.bruteHammerAnimation = 0;
    this.charging = false;
    this.pinned = false;
    this.alreadyMeleed = false;
    this.QAble = true; 
    this.leftLastPressTime = 0;
    this.rightLastPressTime = 0;
    this.leftLastLiftTime = 0;
    this.rightLastLiftTime = 0;
    this.lastQTime = 0; //Yeah I know player 2 doesn't use q and e. Naming things is hard
    this.lastETime = 0;
    this.lastEHitTime = 0;
    this.stunned = 0;
    this.timeX = [];
    this.timeY = [];
    this.x = x; //Sets the initial X of the thing
    this.hitBoxX = x;
    this.y = y; //Sets the initial Y of the thing
    this.character = character;
    this.playerNumber = playerNumber;
    this.health;
    this.controls = [];
    if(this.playerNumber == 1){
        if(document.getElementById("WASDQE").selected == true){
            this.controls[1] = 87; //w
            this.controls[2] = 65; //a
            this.controls[3] = 83; //s
            this.controls[4] = 68; //d
            this.controls[5] = 81; //q
            this.controls[6] = 69; //e
        }
        else if(document.getElementById("ESDFWR").selected == true){
            this.controls[1] = 69; //e
            this.controls[2] = 83; //s
            this.controls[3] = 68; //d
            this.controls[4] = 70; //f
            this.controls[5] = 87; //w
            this.controls[6] = 82; //r
        }
    }
    else if(this.playerNumber == 2){
        if(document.getElementById("IJKLUO").selected == true){
            this.controls[1] = 73; //i
            this.controls[2] = 74; //j
            this.controls[3] = 75; //k
            this.controls[4] = 76; //l
            this.controls[5] = 85; //u
            this.controls[6] = 79; //o
        }
        else if(document.getElementById("ULDR/S").selected == true){
            this.controls[1] = 38; //up
            this.controls[2] = 37; //left
            this.controls[3] = 40; //down
            this.controls[4] = 39; //right
            this.controls[5] = 191; //slash
            this.controls[6] = 16; //shift
        }
    }
    switch(this.character){
        case "ninja":
            this.health = 10;
            this.modelWidth = 8;
            this.modelHeight = 16;
            break;
        case "mage":
            this.health = 10;
            this.modelWidth = 10;
            this.modelHeight = 20;
            break;
        case "brute":
            this.health = 20;
            this.modelWidth = 24;
            this.modelHeight = 32;
            this.width = 18;
            break;
        default: 
            this.health = 40;
            this.modelWidth = 8;    
            this.modelHeight = 16;
            break;
    }
    this.hearts = [];
    for(i = 0; i <= this.health; i++){
        this.hearts[(i/2) - 1] = 0;
    }
    this.update = function(){
        ctx = gameArea.context;
        ctx.imageSmoothingEnabled = false; //To prevent images from being blurry
        ctx.drawImage(this.image, this.animationFrame * this.modelWidth, 0, this.modelWidth, this.modelHeight, this.x, this.y, this.drawWidth, this.drawHeight);
        this.dashCheck();
        this.stunnedDecrease();
    }
    this.newPos = function() {
        this.gravitySpeed += this.gravity;
        this.x += this.speedX; //Increases X by the speed amount
        this.y += this.speedY + this.gravitySpeed; 
        this.hitBottom();
        this.hitPlatform1();
        this.hitPlatform2();
        this.hitPlatform3();
        this.hitPlatform4();
        this.hitPlatform5();
        this.groundCheck();
        this.attack();
        this.meleeAttack();
        this.mageFloat();
        this.dedCheck();
        this.chargeCheck();
        this.timeX[gameArea.timePassed] = this.x;
        this.timeY[gameArea.timePassed] = this.y;
        if(this.character == "brute"){
            this.hitBoxX = this.x + 6;
        }
        else{
            this.hitBoxX = this.x;
        }
    }
    this.dashCheck = function(){
        if(this.speedX == 4 || this.speedX == -4){
            ctx.drawImage(this.image, 6 * this.modelWidth, 0, 8, 16, this.x - this.direction * 2, this.y - (this.speedY + this.gravitySpeed), this.width, this.height);
            setTimeout(function(){
                ctx.drawImage(this.image, 6 * this.modelWidth, 0, 8, 16, this.x - this.direction * 3, this.y - (this.speedY + this.gravitySpeed), this.width, this.height);
                setTimeout(function(){
                    ctx.drawImage(this.image, 6 * this.modelWidth, 0, 8, 16, this.x - this.direction * 4, this.y - (this.speedY + this.gravitySpeed), this.width, this.height);
                    setTimeout(function(){
                        ctx.drawImage(this.image, 6 * this.modelWidth, 0, 8, 16, this.x - this.direction * 5, this.y - (this.speedY + this.gravitySpeed), this.width, this.height);
                        setTimeout(function(){
                            ctx.drawImage(this.image, 6 * this.modelWidth, 0, 8, 16, this.x - this.direction * 6, this.y - (this.speedY + this.gravitySpeed), this.width, this.height);
                        }, 50);
                    }, 50);
                }, 50);
            }, 50);
        }
    }
    this.recolor = function(){ //http://stackoverflow.com/questions/23830471/convert-image-color-without-changing-its-transparent-background
        
    }
    this.hitBottom = function() {
        if(this.y > gameArea.canvas.height - this.height) {
            this.y = gameArea.canvas.height - this.height;
            this.onGround = true;
        }
    }
    this.hitPlatform1 = function() {
        if(this.y > platform1.y - this.height && this.y < platform1.y + platform1.height + 2 - this.height && this.hitBoxX > platform1.x - this.width && this.hitBoxX < platform1.x + platform1.width && this.gravitySpeed > 0){ //this.gravitySpeed > 0 lets the guy jump through without being ported
            this.y = platform1.y - this.height;
        }
    }
    this.hitPlatform2 = function() {
        if(this.y > platform2.y - this.height && this.y < platform2.y + platform2.height + 2 - this.height && this.hitBoxX > platform2.x  - this.width && this.hitBoxX < platform2.x + platform2.width && this.gravitySpeed > 0){
            this.y = platform2.y - this.height;
        }
    }
    this.hitPlatform3 = function() {
        if(this.y > platform3.y - this.height && this.y < platform3.y + platform3.height + 3 - this.height && this.hitBoxX > platform3.x  - this.width && this.hitBoxX < platform3.x + platform3.width && this.gravitySpeed > 0){
            this.y = platform3.y - this.height;
        }
    }
    this.hitPlatform4 = function() {
        if(this.y > platform4.y - this.height && this.y < platform4.y + platform4.height + 3 - this.height && this.hitBoxX > platform4.x  - this.width && this.hitBoxX < platform4.x + platform4.width && this.gravitySpeed > 0){
            this.y = platform4.y - this.height;
        }
    }
    this.hitPlatform5 = function() {
        if(this.y > platform5.y - this.height && this.y < platform5.y + platform5.height + 3 - this.height && this.hitBoxX > platform5.x  - this.width && this.hitBoxX < platform5.x + platform5.width && this.gravitySpeed > 0){
            this.y = platform5.y - this.height;
        }
    }
    this.groundCheck = function() {
        if(this.y == gameArea.canvas.height - this.height 
            || this.y == platform1.y - this.height && this.hitBoxX > platform1.x  - this.width && this.hitBoxX < platform1.x + platform1.width 
            || this.y == platform2.y - this.height && this.hitBoxX > platform2.x  - this.width && this.hitBoxX < platform2.x + platform2.width
            || this.y == platform3.y - this.height && this.hitBoxX > platform3.x  - this.width && this.hitBoxX < platform3.x + platform3.width
            || this.y == platform4.y - this.height && this.hitBoxX > platform4.x  - this.width && this.hitBoxX < platform4.x + platform4.width
            || this.y == platform5.y - this.height && this.hitBoxX > platform5.x  - this.width && this.hitBoxX < platform5.x + platform5.width
            ){
            this.onGround = true;
            this.doubleJumped = false;
            this.gravitySpeed = 0;
        }
        else{
            this.onGround = false;
        }
    }
    this.jumpingAnimation = function() {
        switch(this.animationFrame){
            case 0: 
                this.animationFrame = 1;
                break;
            case 1:
                this.animationFrame = 0;
                break;
            default: 
                this.animationFrame = 0;
                break;
        }
    }
    this.attack = function(){ //I made this a function so that you can hold it down while jumping and moving
        if(keyMap[player1.controls[5]] == true && keyMap[player1.controls[6]] == false && this.playerNumber == 1){
            var pressTime = new Date();
            var shurikenSpeed = 4;
            switch(this.character){
                case "ninja":
                    if(pressTime - this.lastQTime >= 400 * gameArea.slowMode){
                        if(this.shurikenCount >= 4){
                            this.shurikenCount = 0;
                        }
                        this.shurikenCount += 1;
                        if(this.direction == 1 || this.direction == 0){
                            switch(this.shurikenCount){
                                case 1: 
                                    player1Shuriken1 = new shuriken(1, 8, 8, "images/shuriken.png", this.x + this.width, this.y + 6, shurikenSpeed);
                                    break;
                                case 2: 
                                    player1Shuriken2 = new shuriken(1, 8, 8, "images/shuriken.png", this.x + this.width, this.y + 6, shurikenSpeed);
                                    break;
                                case 3: 
                                    player1Shuriken3 = new shuriken(1, 8, 8, "images/shuriken.png", this.x + this.width, this.y + 6, shurikenSpeed);
                                    break;
                                case 4: 
                                    player1Shuriken4 = new shuriken(1, 8, 8, "images/shuriken.png", this.x + this.width, this.y + 6, shurikenSpeed);
                                    break;
                            }
                        }
                        else if(this.direction == -1){
                            switch(this.shurikenCount){
                                case 1: 
                                    player1Shuriken1 = new shuriken(1, 8, 8, "images/shuriken.png", this.x, this.y + 6, -shurikenSpeed);
                                    break;
                                case 2: 
                                    player1Shuriken2 = new shuriken(1, 8, 8, "images/shuriken.png", this.x, this.y + 6, -shurikenSpeed);
                                    break;
                                case 3: 
                                    player1Shuriken3 = new shuriken(1, 8, 8, "images/shuriken.png", this.x, this.y + 6, -shurikenSpeed);
                                    break;
                                case 4: 
                                    player1Shuriken4 = new shuriken(1, 8, 8, "images/shuriken.png", this.x, this.y + 6, -shurikenSpeed);
                                    break;
                            }       
                         }
                    this.lastQTime = pressTime;
                    }
                    break;
                case "mage":
                    if(player1Fireball.usable == true){
                        if((player1Fireball.x < 0 || player1Fireball.x > 0) && (player1Fireball.y < 0 || player1Fireball.y > 134)){
                            player1Fireball = new fireball(1, false, this.x, this.y + 2);
                            player1Fireball.size = 0;   
                        }
                        player1Fireball.size += 0.15;
                        player1Fireball.x = this.x + this.width / 2;
                        player1Fireball.y = this.y + 2;
                        player1Fireball.exploded = false;
                        this.animationFrame = 6;
                        if(player1Fireball.size >= 7.5){
                            player1Fireball.run = true;
                            player1Fireball.usable = false;
                            player1Fireball.setDirection();
                        }
                    }
                    break;
                case "brute":
                    var pressTime = new Date();
                    if(keyMap[player1.controls[5]] == true && keyMap[player1.controls[6]] == false && this.stunned == 0 && this.bruteHammerAnimation <= 5 && pressTime - this.lastQTime >= 400 * gameArea.slowMode){
                        this.alreadyMeleed = false;
                        this.bruteHammering = true;
                        this.lastQTime = pressTime;
                    }
                    break;
                default:
                    break;
            }
        }
        if(keyMap[player2.controls[5]] == true && this.playerNumber == 2){
            var pressTime = new Date();
            var shurikenSpeed = 4;
            switch(this.character){
                case "ninja":
                    if(pressTime - this.lastQTime >= 400 * gameArea.slowMode){
                        if(this.shurikenCount >= 4){
                            this.shurikenCount = 0;
                        }
                        this.shurikenCount += 1;
                        if(this.direction == 1){
                            switch(this.shurikenCount){
                                case 1: 
                                    player2Shuriken1 = new shuriken(2, 8, 8, "images/shuriken.png", this.x + this.width, this.y + 6, shurikenSpeed);
                                    break;
                                case 2: 
                                    player2Shuriken2 = new shuriken(2, 8, 8, "images/shuriken.png", this.x + this.width, this.y + 6, shurikenSpeed);
                                    break;
                                case 3: 
                                    player2Shuriken3 = new shuriken(2, 8, 8, "images/shuriken.png", this.x + this.width, this.y + 6, shurikenSpeed);
                                    break;
                                case 4: 
                                    player2Shuriken4 = new shuriken(2, 8, 8, "images/shuriken.png", this.x + this.width, this.y + 6, shurikenSpeed);
                                    break;
                            }
                        }
                        else if(this.direction == -1 || this.direction == 0){
                            switch(this.shurikenCount){
                                case 1: 
                                    player2Shuriken1 = new shuriken(2, 8, 8, "images/shuriken.png", this.x, this.y + 6, -shurikenSpeed);
                                    break;
                                case 2: 
                                    player2Shuriken2 = new shuriken(2, 8, 8, "images/shuriken.png", this.x, this.y + 6, -shurikenSpeed);
                                    break;
                                case 3: 
                                    player2Shuriken3 = new shuriken(2, 8, 8, "images/shuriken.png", this.x, this.y + 6, -shurikenSpeed);
                                    break;
                                case 4: 
                                    player2Shuriken4 = new shuriken(2, 8, 8, "images/shuriken.png", this.x, this.y + 6, -shurikenSpeed);
                                    break;
                            }       
                         }
                    this.lastQTime = pressTime;
                    }
                    break;
                case "mage":
                    if(player2Fireball.usable == true){
                        if((player2Fireball.x < 0 || player2Fireball.x > 0) && (player2Fireball.y < 0 || player2Fireball.y > 134)){
                            player2Fireball = new fireball(2, false, this.x, this.y + 2);
                            player2Fireball.size = 0;   
                        }
                        player2Fireball.size += 0.15;
                        player2Fireball.x = this.x + this.width / 2;
                        player2Fireball.y = this.y + 2;
                        player2Fireball.exploded = false;
                        this.animationFrame = 6;
                        if(player2Fireball.size >= 7.5){
                            player2Fireball.run = true;
                            player2Fireball.usable = false;
                            player2Fireball.setDirection();
                        }
                    }
                    break;
                case "brute":
                    var pressTime = new Date();
                    if(keyMap[player2.controls[5]] == true && keyMap[player2.controls[6]] == false && this.stunned == 0 && this.bruteHammerAnimation <= 5 && pressTime - this.lastQTime >= 400 * gameArea.slowMode){
                        this.alreadyMeleed = false;
                        this.bruteHammering = true;
                        this.lastQTime = pressTime;
                    }
                    break;
                default:
                    break;
            }
        }
    }
    this.meleeAttack = function(){ //not actually meleeAttack in all cases, but too lazy to renames
        if(this.playerNumber == 1){
            switch(this.character){
                case "ninja":
                    if(keyMap[player1.controls[6]] == true && keyMap[player1.controls[5]] == false && this.stunned == 0 && this.reflectCD > 0){
                        var pressTime = new Date();
                        this.reflecting = true;
                        this.lastETime = pressTime;
                        this.reflectCD--;
                        if(this.direction == 1){
                            this.speedX = 0;
                            switch(this.animationFrame){
                                case 0:
                                    this.animationFrame = 7;
                                    break;
                                case 7:
                                    this.animationFrame = 8;
                                    break;
                                case 8: 
                                    this.animationFrame = 9;
                                    break;
                                case 9:
                                    this.animationFrame = 7;
                                    break;
                                default: 
                                    this.animationFrame = 7;
                                    break;
                            }
                            var handX = this.x + 5;
                            var handWidth = 3;
                            var handY = this.y + 5;
                            var handHeight = 3;
                            var hitTime = new Date();
                            if(handX < player2.hitBoxX + player2.width && handX + handWidth  > player2.hitBoxX && handY < player2.y + player2.height && handY + handHeight > player2.y && hitTime - this.lastEHitTime >= 300 * gameArea.slowMode){
                                player2.getHit();
                                //player2.stunned += 250 / gameArea.slowMode;
                                //player2.speedX = 0;
                                this.lastEHitTime = hitTime;
                            }
                        }
                        else if(this.direction == -1){
                            this.speedX = 0;
                            switch(this.animationFrame){
                                case 0:
                                    this.animationFrame = 10;
                                    break;
                                case 10:
                                    this.animationFrame = 11;
                                    break;
                                case 11: 
                                    this.animationFrame = 12;
                                    break;
                                case 12:
                                    this.animationFrame = 10;
                                    break;
                                default: 
                                    this.animationFrame = 10;
                                    break;
                            }
                            var handX = this.x;
                            var handWidth = 3;
                            var handY = this.y + 5;
                            var handHeight = 3;
                            var hitTime = new Date();
                            if(handX < player2.hitBoxX + player2.width  && handX + handWidth  > player2.hitBoxX && handY < player2.y + player2.height && handY + handHeight > player2.y && hitTime - this.lastEHitTime >= 300 * gameArea.slowMode){
                                player2.getHit();
                                //player2.stunned += 250 / gameArea.slowMode;
                                //player2.speedX = 0;
                                this.lastEHitTime = hitTime;
                            }
                        }
                        else{
                            this.direction = 1;
                        }
                    }
                    else{
                        this.reflecting = false;
                        var pressTime = new Date();
                        if(pressTime - this.lastETime >= 500 && this.reflectCD <= 100){
                            this.reflectCD++;
                        }
                    }
                    break;
                case "mage":
                    if(keyMap[player1.controls[6]] == true && keyMap[player1.controls[5]] == false && this.stunned == 0){
                        if(gameArea.timePassed >= 150){
                            this.timeyChargeyUppeyThingey++;
                            var pressTime = new Date();
                            if(pressTime - this.lastETime >= 3000 * gameArea.slowMode){
                                switch(this.animationFrame){
                                    case 0:
                                        this.animationFrame = 7;
                                        break;
                                    case 7:
                                        this.animationFrame = 8;
                                        break;
                                    case 8: 
                                        this.animationFrame = 9;
                                        break;
                                    case 9:
                                        this.animationFrame = 7;
                                        break;
                                    default: 
                                        this.animationFrame = 7;
                                        break;
                                }
                            }
                            if(this.timeyChargeyUppeyThingey >= 150){
                                this.mageTimeyStuffey();
                            }
                        }
                    }
                    break;
                    case "brute":
                        var pressTime = new Date();
                        if(keyMap[player1.controls[6]] == true && keyMap[player1.controls[5]] == false && this.stunned == 0 && this.bruteHammerAnimation <= 5 && pressTime - this.lastQTime >= 400 * gameArea.slowMode){
                            this.alreadyMeleed = false;
                            this.bruteHammering = true;
                            this.lastQTime = pressTime;
                        }
                        break;
            }
        }
        if(this.playerNumber == 2){
            switch(this.character){
                case "ninja":
                    if(keyMap[player2.controls[6]] == true && keyMap[player2.controls[5]] == false && this.stunned == 0 && this.reflectCD > 0){
                        var pressTime = new Date();
                        this.reflecting = true;
                        this.lastETime = pressTime;
                        this.reflectCD--;
                        if(this.direction == 1){
                            this.speedX = 0;
                            switch(this.animationFrame){
                                case 0:
                                    this.animationFrame = 7;
                                    break;
                                case 7:
                                    this.animationFrame = 8;
                                    break;
                                case 8: 
                                    this.animationFrame = 9;
                                    break;
                                case 9:
                                    this.animationFrame = 7;
                                    break;
                                default: 
                                    this.animationFrame = 7;
                                    break;
                            }
                            var handX = this.x + 5;
                            var handWidth = 3;
                            var handY = this.y + 5;
                            var handHeight = 3;
                            var hitTime = new Date();
                            if(handX < player1.hitBoxX + player1.width  && handX + handWidth  > player1.hitBoxX && handY < player1.y + player1.height && handY + handHeight > player1.y && hitTime - this.lastEHitTime >= 300 * gameArea.slowMode){
                                player1.getHit();
                                //player1.stunned += 250 / gameArea.slowMode;
                                //player1.speedX = 0;
                                this.lastEHitTime = hitTime;
                            }
                        }
                        else if(this.direction == -1){
                            this.speedX = 0;
                            switch(this.animationFrame){
                                case 0:
                                    this.animationFrame = 10;
                                    break;
                                case 10:
                                    this.animationFrame = 11;
                                    break;
                                case 11: 
                                    this.animationFrame = 12;
                                    break;
                                case 12:
                                    this.animationFrame = 10;
                                    break;
                                default: 
                                    this.animationFrame = 10;
                                    break;
                            }
                            var handX = this.x;
                            var handWidth = 3;
                            var handY = this.y + 5;
                            var handHeight = 3;
                            var hitTime = new Date();
                            if(handX < player1.hitBoxX + player1.width  && handX + handWidth  > player1.hitBoxX && handY < player1.y + player1.height && handY + handHeight > player1.y && hitTime - this.lastEHitTime >= 300 * gameArea.slowMode){
                                player1.getHit();
                                //player1.stunned += 250 / gameArea.slowMode;
                                //player1.speedX = 0;
                                this.lastEHitTime = hitTime;
                            }
                        }
                        else{
                            this.direction = -1;
                        }
                    }
                    else{
                        this.reflecting = false;
                        var pressTime = new Date();
                        if(pressTime - this.lastETime >= 500 && this.reflectCD <= 100){
                            this.reflectCD++;
                        }
                    }
                    break;
                case "mage":
                    if(keyMap[player2.controls[6]] == true && keyMap[player2.controls[5]] == false && this.playerNumber == 2 && this.stunned == 0){
                        if(gameArea.timePassed >= 150){
                            this.timeyChargeyUppeyThingey++;
                            var pressTime = new Date();
                            if(pressTime - this.lastETime >= 3000 * gameArea.slowMode){
                                switch(this.animationFrame){
                                    case 0:
                                        this.animationFrame = 7;
                                        break;
                                    case 7:
                                        this.animationFrame = 8;
                                        break;
                                    case 8: 
                                        this.animationFrame = 9;
                                        break;
                                    case 9:
                                        this.animationFrame = 7;
                                        break;
                                    default: 
                                        this.animationFrame = 7;
                                        break;
                                }
                            }
                            if(this.timeyChargeyUppeyThingey >= 150){
                                this.mageTimeyStuffey();
                            }
                        }
                    }
                    break;
                case "brute":
                    var pressTime = new Date();
                    if(keyMap[player2.controls[6]] == true && keyMap[player2.controls[5]] == false && this.stunned == 0 && this.bruteHammerAnimation <= 5 && pressTime - this.lastQTime >= 400 * gameArea.slowMode){
                        this.alreadyMeleed = false;
                        this.bruteHammering = true;
                        this.lastQTime = pressTime;
                    }
                    break;
            }
        }
    }
    this.mageTimeyStuffey = function(number){
        var pressTime = new Date();
        if(pressTime - this.lastETime >= 3000 * gameArea.slowMode){
            switch(this.playerNumber){
                case 1:
                    player2.x = player2.timeX[gameArea.timePassed - this.timeyChargeyUppeyThingey];
                    player2.y = player2.timeY[gameArea.timePassed - this.timeyChargeyUppeyThingey];
                    this.timeyChargeyUppeyThingey = 0;
                    this.lastETime = pressTime;
                    break;
                case 2:
                    player1.x = player1.timeX[gameArea.timePassed - this.timeyChargeyUppeyThingey];
                    player1.y = player1.timeY[gameArea.timePassed - this.timeyChargeyUppeyThingey];
                    this.timeyChargeyUppeyThingey = 0;
                    this.lastETime = pressTime;
                    break;
            }
        }
    }
    this.mageFloat = function(){
        if(keyMap[player1.controls[1]] == true && this.character == "mage" && this.gravitySpeed > 0 && this.playerNumber == 1){
            this.gravity = 0;
            this.gravitySpeed = 0.4;
            //Making a cloud here is surprisingly hard
        }
        if(keyMap[player2.controls[1]] == true && this.character == "mage" && this.gravitySpeed > 0 && this.playerNumber == 2){
            this.gravity = 0;
            this.gravitySpeed = 0.4;
        }
    }
    this.getHit = function(){
        if(this.blocking == false){
            this.health -= 1;
            switch(this.character){
                case "ninja": 
                    switch(this.playerNumber){
                        case 1:
                            this.image.src = "images/player1/hurt_ninjaAnimationSheet.png";
                            break;
                        case 2:
                            this.image.src = "images/player2/hurt_ninjaAnimationSheet.png";
                            break;
                    }
                    break;
                case "mage": 
                    switch(this.playerNumber){
                        case 1:
                            this.image.src = "images/player1/hurt_mageAnimationSheet.png";
                            break;
                        case 2:
                            this.image.src = "images/player2/hurt_mageAnimationSheet.png";
                            break;
                    }
                    break;
                case "brute":
                    switch(this.playerNumber){
                        case 1:
                            this.image.src = "images/player1/hurt_bruteAnimationSheet.png";
                            break;
                        case 2:
                            this.image.src = "images/player2/hurt_bruteAnimationSheet.png";
                            break;
                    }
                    break;
                default:
                    switch(this.playerNumber){
                        case 1:
                            this.image.src = "images/player1/hurt_playerModelAnimationSheet.png";
                            break;
                        case 2:
                            this.image.src = "images/player2/hurt_playerModelAnimationSheet.png";
                            break;
                    }
                    break;
                }
            for(i = 1, h = false; h == false; i++){
                if(this.hearts[this.hearts.length - i] != 2){
                    this.hearts[this.hearts.length - i] += 1;
                    h = true;
                }
            }
            switch(this.playerNumber){
                case 1:
                    player1HealthBar.image.src = "images/hurt_heartSheet.png";
                    setTimeout(function(){
                        player1HealthBar.image.src = "images/heartSheet.png";
                        setTimeout(function(){
                            player1HealthBar.image.src = "images/hurt_heartSheet.png";
                            setTimeout(function(){
                                player1HealthBar.image.src = "images/heartSheet.png";
                            }, 75);
                        }, 75);
                    }, 75);
                    setTimeout(function(){
                        player1.image.src = player1.originalImageSrc;
                    }, 175);
                    break;
                case 2:
                    player2HealthBar.image.src = "images/hurt_heartSheet.png";
                    setTimeout(function(){
                        player2HealthBar.image.src = "images/heartSheet.png";
                        setTimeout(function(){
                            player2HealthBar.image.src = "images/hurt_heartSheet.png";
                            setTimeout(function(){
                                player2HealthBar.image.src = "images/heartSheet.png";
                            }, 75);
                        }, 75);
                    }, 75);
                    setTimeout(function(){
                        player2.image.src = player2.originalImageSrc;
                    }, 175);
                    break;
            }
        }
    }
    this.dedCheck = function(){
        if(this.health <= 0){
            if(gameArea.slowMode == 1){
                clearInterval(gameArea.tick, gameArea.updateAnimations);
                gameArea.slowInterval();
                gameArea.slowMode = 8;
                gameArea.canvas.style.opacity = 0;
                setTimeout(function(){
                    location.reload();
                }, 8000);
                if(this.playerNumber == 1){
                    typingText('Player 1 Defeated', 'nothingToSeeHere');
                }
                else if(this.playerNumber == 2){
                    typingText('Player 2 Defeated', 'nothingToSeeHere');
                }
                else{
                    alert("brokin");
                }
            }
        }   
    }
    this.stunnedDecrease = function(){
        if(this.stunned > 0){
            this.stunned -= 20;
        }
        if(this.stunned < 0){
            this.stunned = 0;
        }
    }
    this.bruteHammerSwing = function(){
        if(this.playerNumber == 1){
            if(this.bruteHammering == true && this.charging == false){
                if(this.direction == 1){
                    if(this.bruteHammerAnimation != 6 && this.bruteHammerAnimation != 7 && this.bruteHammerAnimation != 8 && this.bruteHammerAnimation != 9 && this.bruteHammerAnimation != 10 && this.bruteHammerAnimation != 11 && this.bruteHammerAnimation != 12 && this.bruteHammerAnimation != 13){
                        this.x += 6;
                    }
                    switch(this.bruteHammerAnimation){
                        case 0:
                            this.animationFrame = 6;
                            this.bruteHammerAnimation = 6;
                            break;
                        case 6:
                            this.animationFrame = 7;
                            this.bruteHammerAnimation = 7;
                            break;
                        case 7: 
                            this.animationFrame = 8;
                            this.bruteHammerAnimation = 8;
                            break;
                        case 8:
                            this.animationFrame = 9;
                            this.bruteHammerAnimation = 9;
                            break;
                        case 9:
                            this.animationFrame = 10;
                            this.bruteHammerAnimation = 10;
                            break;
                        case 10:
                            this.animationFrame = 11;
                            this.bruteHammerAnimation = 11;
                            break;
                        case 11:
                            this.animationFrame = 12;
                            this.bruteHammerAnimation = 12;
                            break;
                        case 12:
                            this.animationFrame = 13;
                            this.bruteHammerAnimation = 13;
                            break;
                        case 13:
                            this.x -= 6;
                            this.bruteHammering = false;
                            this.animationFrame = 0;
                            this.bruteHammerAnimation = 0;
                            break;
                        default: 
                            this.animationFrame = 9;
                            this.bruteHammerAnimation = 9;
                            break;
                    }
                    var hammerX = this.x + 19;
                    var hammerWidth = 5;
                    var hammerY = this.y + 9;
                    var hammerHeight = 12;
                    if(hammerX < player2.hitBoxX + player2.width && hammerX + hammerWidth  > player2.hitBoxX && hammerY < player2.y + player2.height && hammerY + hammerHeight > player2.y && this.QAble == true && this.alreadyMeleed == false && (this.bruteHammerAnimation == 10 || this.bruteHammerAnimation == 11 || this.bruteHammerAnimation == 12 || this.bruteHammerAnimation == 13)){
                        this.alreadyMeleed = true;
                        player2.getHit();
                        setTimeout(function(){
                            player2.getHit();
                            setTimeout(function(){
                                player2.getHit();
                                setTimeout(function(){
                                    player2.getHit();
                                }, 30);
                            }, 30);
                        }, 30);
                    }
                }
                if(this.direction == -1){
                    if(this.bruteHammerAnimation != 14 && this.bruteHammerAnimation != 15 && this.bruteHammerAnimation != 16 && this.bruteHammerAnimation != 17 && this.bruteHammerAnimation != 18 && this.bruteHammerAnimation != 19 && this.bruteHammerAnimation != 20 && this.bruteHammerAnimation != 21){
                        this.x -= 2;
                    }
                    switch(this.bruteHammerAnimation){
                        case 0:
                            this.animationFrame = 21;
                            this.bruteHammerAnimation = 21;
                            break;
                        case 21:
                            this.animationFrame = 20;
                            this.bruteHammerAnimation = 20;
                            break;
                        case 20: 
                            this.animationFrame = 19;
                            this.bruteHammerAnimation = 19;
                            break;
                        case 19:
                            this.animationFrame = 18;
                            this.bruteHammerAnimation = 18;
                            break;
                        case 18:
                            this.animationFrame = 17;
                            this.bruteHammerAnimation = 17;
                            break;
                        case 17:
                            this.animationFrame = 16;
                            this.bruteHammerAnimation = 16;
                            break;
                        case 16:
                            this.animationFrame = 15;
                            this.bruteHammerAnimation = 15;
                            break;
                        case 15:
                            this.animationFrame = 14;
                            this.bruteHammerAnimation = 14;
                            break;
                        case 14:
                            this.x += 2;
                            this.bruteHammering = false;
                            this.animationFrame = 0;
                            this.bruteHammerAnimation = 0;
                            break;
                        default: 
                            this.animationFrame = 21;
                            this.bruteHammerAnimation = 21;
                            break;
                    }
                    var hammerX = this.x;
                    var hammerWidth = 5;
                    var hammerY = this.y + 9;
                    var hammerHeight = 12;
                    if(hammerX < player2.hitBoxX + player2.width && hammerX + hammerWidth  > player2.hitBoxX && hammerY < player2.y + player2.height && hammerY + hammerHeight > player2.y && this.QAble == true && this.alreadyMeleed == false && (this.bruteHammerAnimation == 14 || this.bruteHammerAnimation == 15 || this.bruteHammerAnimation == 16 || this.bruteHammerAnimation == 17)){
                        this.alreadyMeleed = true;
                        player2.getHit();
                        setTimeout(function(){
                            player2.getHit();
                            setTimeout(function(){
                                player2.getHit();
                                setTimeout(function(){
                                    player2.getHit();
                                }, 30);
                            }, 30);
                        }, 30);
                    }
                }
            }
        }
        if(this.playerNumber == 2){
            if(this.bruteHammering == true && this.charging == false){
                if(this.direction == 1){
                    if(this.bruteHammerAnimation != 6 && this.bruteHammerAnimation != 7 && this.bruteHammerAnimation != 8 && this.bruteHammerAnimation != 9 && this.bruteHammerAnimation != 10 && this.bruteHammerAnimation != 11 && this.bruteHammerAnimation != 12 && this.bruteHammerAnimation != 13){
                        this.x += 6;
                    }
                    switch(this.bruteHammerAnimation){
                        case 0:
                            this.animationFrame = 6;
                            this.bruteHammerAnimation = 6;
                            break;
                        case 6:
                            this.animationFrame = 7;
                            this.bruteHammerAnimation = 7;
                            break;
                        case 7: 
                            this.animationFrame = 8;
                            this.bruteHammerAnimation = 8;
                            break;
                        case 8:
                            this.animationFrame = 9;
                            this.bruteHammerAnimation = 9;
                            break;
                        case 9:
                            this.animationFrame = 10;
                            this.bruteHammerAnimation = 10;
                            break;
                        case 10:
                            this.animationFrame = 11;
                            this.bruteHammerAnimation = 11;
                            break;
                        case 11:
                            this.animationFrame = 12;
                            this.bruteHammerAnimation = 12;
                            break;
                        case 12:
                            this.animationFrame = 13;
                            this.bruteHammerAnimation = 13;
                            break;
                        case 13:
                            this.x -= 6;
                            this.bruteHammering = false;
                            this.animationFrame = 0;
                            this.bruteHammerAnimation = 0;
                            break;
                        default: 
                            this.animationFrame = 9;
                            this.bruteHammerAnimation = 9;
                            break;
                    }
                    var hammerX = this.x + 19;
                    var hammerWidth = 5;
                    var hammerY = this.y + 9;
                    var hammerHeight = 12;
                    if(hammerX < player1.hitBoxX + player1.width && hammerX + hammerWidth  > player1.hitBoxX && hammerY < player1.y + player1.height && hammerY + hammerHeight > player1.y && this.QAble == true && this.alreadyMeleed == false && (this.bruteHammerAnimation == 10 || this.bruteHammerAnimation == 11 || this.bruteHammerAnimation == 12 || this.bruteHammerAnimation == 13)){
                        this.alreadyMeleed = true;
                        player1.getHit();
                        setTimeout(function(){
                            player1.getHit();
                            setTimeout(function(){
                                player1.getHit();
                                setTimeout(function(){
                                    player1.getHit();
                                }, 30);
                            }, 30);
                        }, 30);
                    }
                }
                if(this.direction == -1){
                    if(this.bruteHammerAnimation != 14 && this.bruteHammerAnimation != 15 && this.bruteHammerAnimation != 16 && this.bruteHammerAnimation != 17 && this.bruteHammerAnimation != 18 && this.bruteHammerAnimation != 19 && this.bruteHammerAnimation != 20 && this.bruteHammerAnimation != 21){
                        this.x -= 2;
                    }
                    switch(this.bruteHammerAnimation){
                        case 0:
                            this.animationFrame = 21;
                            this.bruteHammerAnimation = 21;
                            break;
                        case 21:
                            this.animationFrame = 20;
                            this.bruteHammerAnimation = 20;
                            break;
                        case 20: 
                            this.animationFrame = 19;
                            this.bruteHammerAnimation = 19;
                            break;
                        case 19:
                            this.animationFrame = 18;
                            this.bruteHammerAnimation = 18;
                            break;
                        case 18:
                            this.animationFrame = 17;
                            this.bruteHammerAnimation = 17;
                            break;
                        case 17:
                            this.animationFrame = 16;
                            this.bruteHammerAnimation = 16;
                            break;
                        case 16:
                            this.animationFrame = 15;
                            this.bruteHammerAnimation = 15;
                            break;
                        case 15:
                            this.animationFrame = 14;
                            this.bruteHammerAnimation = 14;
                            break;
                        case 14:
                            this.x += 2;
                            this.bruteHammering = false;
                            this.animationFrame = 0;
                            this.bruteHammerAnimation = 0;
                            break;
                        default: 
                            this.animationFrame = 21;
                            this.bruteHammerAnimation = 21;
                            break;
                    }
                    var hammerX = this.x;
                    var hammerWidth = 5;
                    var hammerY = this.y + 9;
                    var hammerHeight = 12;
                    if(hammerX < player1.hitBoxX + player1.width && hammerX + hammerWidth  > player1.hitBoxX && hammerY < player1.y + player1.height && hammerY + hammerHeight > player1.y && this.QAble == true && this.alreadyMeleed == false && (this.bruteHammerAnimation == 14 || this.bruteHammerAnimation == 15 || this.bruteHammerAnimation == 16 || this.bruteHammerAnimation == 17)){
                        this.alreadyMeleed = true;
                        player1.getHit();
                        setTimeout(function(){
                            player1.getHit();
                            setTimeout(function(){
                                player1.getHit();
                                setTimeout(function(){
                                    player1.getHit();
                                }, 30);
                            }, 30);
                        }, 30);
                    }
                }
            }
        }
    }
    this.charge = function(){
        this.stunned = 10000;
        this.charging = true;
        if(this.direction == 1){
            this.speedX = 6;
        }
        if(this.direction == -1){
            this.speedX = -6;
        }
    }
    this.chargeCheck = function(){
        if(this.charging == true){
            this.pinCheck();
            if(this.x < 0 || this.x + this.width > 300){
                this.charging = false;
                this.stunned = 200;
                this.speedX = 0;
                if(this.playerNumber == 1 && player2.pinned == true){
                    player2.speedX = 0;
                    player2.pinned = false;
                    player2.getHit();
                    setTimeout(function(){
                        player2.getHit();
                    }, 30);
                }
                if(this.playerNumber == 2 && player1.pinned == true){
                    player1.speedX = 0;
                    player1.pinned = false;
                    player1.getHit();
                    setTimeout(function(){
                        player1.getHit();
                    }, 30);
                }
            }
        }
    }
    this.pinCheck = function(){
        switch(this.playerNumber){
            case 1:
                if(this.x < player2.hitBoxX + player2.width  && this.x + this.width  > player2.hitBoxX && this.y < player2.y + player2.height && this.y + this.height > player2.y){
                    player2.speedX = this.speedX;
                    player2.gravitySpeed = this.gravitySpeed;
                    player2.pinned = true;
                }
                break;
            case 2:
                if(this.x < player1.hitBoxX + player1.width  && this.x + this.width  > player1.hitBoxX && this.y < player1.y + player1.height && this.y + this.height > player1.y){
                    player1.speedX = this.speedX;
                    player1.gravitySpeed = this.gravitySpeed;
                    player1.pinned = true;
                }
        }
    }
    this.rightWalkingAnimation = function() {
        switch(this.animationFrame){
            case 0: 
                this.animationFrame = 2;
                break;
            case 2:
                this.animationFrame = 3;
                break;
            case 3:
                this.animationFrame = 2;
                break;
            default: 
                this.animationFrame = 2;
                break;
        }
    }
    this.leftWalkingAnimation = function() {
        switch(this.animationFrame){
            case 0: 
                this.animationFrame = 4;
                break;
            case 4:
                this.animationFrame = 5;
                break;
            case 5:
                this.animationFrame = 4;
                break;
            default: 
                this.animationFrame = 4;
                break;
        }
    }
}
function platform(width, height, color, x, y, speedX, speedY, changeColor, random){
    this.width = width;
    this.height = height;
    this.changeColor = changeColor;
    this.random = random;
    this.color = color;
    this.x = x;
    this.y = y;
    this.speedX = speedX;
    this.speedY = speedY;
    this.update = function(){
        this.move();
        this.changeColorFunction();
        ctx = gameArea.context;
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    this.move = function(){
        this.x += this.speedX;
        this.y += this.speedY;
        if(this.random == true){
            if(Math.random() - 0.5 > 0){
                this.speedX = Math.random() * 2;
            }
            else{
                this.speedX = -Math.random() * 2;
            }
            this.speedY = -Math.random() * 3;
            if(this.x + this.width >= 300 || this.x <= 0){
                this.y = 160;
                this.x = Math.random() * 300 - this.width;
                this.width = Math.random() * 100 + 20;
            }
            if(this.y <= -5){
                this.y = 160;
                this.x = Math.random() * 300 - this.width;
                this.width = Math.random() * 100 + 20;
            }
            else if(this.y >= 160){
                this.y = -5;
                this.x = Math.random() * 300 - this.width;
                this.width = Math.random() * 100 + 20;
            }
        }
        else{
            if(this.x >= 300){
                this.x = 0 - this.width;
            }
            else if(this.x + this.width <= 0){
                this.x = 300;
            }
            if(this.y <= -5){
                this.y = 160;
            }
            else if(this.y >= 160){
                this.y = -5;
            }
        }
    }
    this.changeColorFunction = function(){
        if(this.changeColor == true){
            this.color = this.getRandomColor();
        }
    }
    this.getRandomColor = function(){ //http://stackoverflow.com/questions/1484506/random-color-generator-in-javascript
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++ ) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
}
function shuriken(playerNumber, width, height, image, x, y, speed){
    this.playerNumber = playerNumber;
    this.width = width;
    this.height = height;
    this.speed = speed;
    this.image = new Image(); 
    this.image.src = image;
    this.x = x;
    this.y = y;
    this.turnedDegrees = 0;
    this.alreadyHit = false;
    this.update = function(){
        this.move();
        this.playerHitCheck();
    }
    this.move = function(){
        this.x += this.speed;
        ctx = gameArea.context;
        ctx.clearRect(0,0, gameArea.width, gameArea.height);
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.turnedDegrees*Math.PI/180);
        this.turnedDegrees -= 35; //45 is the fastest looking
        ctx.translate(-this.x - this.width/2, -this.y - this.height/2);
        ctx.imageSmoothingEnabled = false; //To prevent images from being blurry
        ctx.drawImage(this.image,this.x, this.y, this.width,this.height);
        ctx.restore();
    }
    this.playerHitCheck = function(){
        if(this.x < player1.hitBoxX + player1.width  && this.x + this.width  > player1.hitBoxX &&
		this.y < player1.y + player1.height && this.y + this.height > player1.y && this.playerNumber == 2 && this.alreadyHit == false){
            if(player1.reflecting == true && player1.direction == 1 && this.speed < 0){
                this.speed--;
                this.speed = -this.speed;
                this.playerNumber = 1;
            }
            else if(player1.reflecting == true && player1.direction == -1 && this.speed > 0){
                this.speed++;
                this.speed = -this.speed;
                this.playerNumber = 1;
            }
            else{
                player1.getHit();
                this.alreadyHit = true;
            }
        }
        if(this.x < player2.hitBoxX + player2.width  && this.x + this.width  > player2.hitBoxX &&
		this.y < player2.y + player2.height && this.y + this.height > player2.y && this.playerNumber == 1 && this.alreadyHit == false){
            if(player2.reflecting == true && player2.direction == 1 && this.speed < 0){
                this.speed--;
                this.speed = -this.speed;
                this.playerNumber = 2;
            }
            else if(player2.reflecting == true && player2.direction == -1 && this.speed > 0){
                this.speed++;
                this.speed = -this.speed;
                this.playerNumber = 2;
            }
            else{
                player2.getHit();
                this.alreadyHit = true;
            }
        }
    }
}
function fireball(playerNumber, actualFireball, x, y){
    this.playerNumber = playerNumber;
    this.run = actualFireball;
    this.exploded = false;
    this.usable = true;
    this.x = x;
    this.y = y;
    this.width;
    this.height;
    this.speedX;
    this.speedY;
    this.animationFrame = 0;
    this.size = 0;
    this.alreadyHit = false;
    this.image = new Image();
    this.image.src = "images/fireball.png";
    this.update = function(){
        this.move();
        this.explodeCheck();
        this.playerHitCheck(this.x, this.y);
        this.width = 7 + this.size;
        this.height = 7 + this.size;
        if(this.exploded == false){
            ctx.imageSmoothingEnabled = false;
            ctx.drawImage(this.image, this.animationFrame * 14, 0, 14, 14, this.x - this.width / 2, this.y - this.height * 1.2, this.width, this.height);
        }
    }
    this.setDirection = function(){
        switch(this.playerNumber){
                case 1:
                    this.speedX = 4 * Math.cos(Math.atan(((this.y - this.height / 2) - (player2.y + player2.height / 2))/(this.x - player2.hitBoxX)));
                    this.speedY = 4 * Math.sin(Math.atan(((this.y - this.height / 2) - (player2.y + player2.height / 2))/(this.x - player2.hitBoxX)));
                    if(Math.abs(this.speedX) < 0.3){ //This is because the fireball likes to be dumb when one player is on top another
                        if(player1.y > player2.y){
                            this.speedY = -5;
                        }
                        else{
                            this.speedY = 5;
                        }
                    }
                    break;
                case 2:
                    this.speedX = 4 * Math.cos(Math.atan(((this.y - this.height / 2) - (player1.y + player1.height / 2))/(this.x - player1.hitBoxX)));
                    this.speedY = 4 * Math.sin(Math.atan(((this.y - this.height / 2) - (player1.y + player1.height / 2))/(this.x - player1.hitBoxX)));
                    if(Math.abs(this.speedX) < 0.3){ //This is because the fireball likes to be dumb when one player is on top another
                        if(player2.y > player1.y){
                            this.speedY = -5;
                        }
                        else{
                            this.speedY = 5;
                        }
                    }
                    break;
        }
    }
    this.move = function(){
        if(this.run == true){
            switch(this.playerNumber){
                case 1:
                    if(player1.hitBoxX >= player2.hitBoxX){
                        this.x -= this.speedX;
                        this.y -= this.speedY;
                    }
                    else{
                        this.x += this.speedX;
                        this.y += this.speedY;
                    }
                    break;
                case 2:
                    if(player2.hitBoxX >= player1.hitBoxX){
                        this.x -= this.speedX;
                        this.y -= this.speedY;
                    }
                    else{
                        this.x += this.speedX;
                        this.y += this.speedY;
                    }
                    break;
            }
        }
    }
    this.explodeCheck = function(){
        if(this.run == true){
            this.radius = this.width / 2;
            this.plat1distX = Math.abs(this.x - (platform1.x + platform1.width/2));
            this.plat1distY = Math.abs((this.y - this.height) - (platform1.y - platform1.height/2));
            this.plat2distX = Math.abs(this.x - (platform2.x + platform2.width/2));
            this.plat2distY = Math.abs((this.y - this.height) - (platform2.y - platform2.height/2));
            this.plat3distX = Math.abs(this.x - (platform3.x + platform3.width/2));
            this.plat3distY = Math.abs((this.y - this.height) - (platform3.y - platform3.height/2));
            if((this.plat1distX <= platform1.width/2 && this.plat1distY <= platform1.height/2)
                || (this.plat2distX <= platform2.width/2 && this.plat2distY <= platform2.height/2)
                || (this.plat3distX <= platform3.width/2 && this.plat1distY <= platform3.height/2)
                || (this.y - 2 * this.height > 134)
                || (this.x > 325)
                || (this.x < -25)
                || (this.y < -25)
              ){
                this.explode();
            }
        }
    }
    this.explode = function(){
        switch(this.playerNumber){
            case 1:
                this.run = false;
                var player1FireballInterval = setInterval(function(){
                    var posneg = Math.round(Math.random()) * 2 - 1; //Give randomly 1 or -1
                    var randomX = 10 * posneg * Math.random();
                    var randomY = 10 * posneg * Math.random();
                    ctx.drawImage(player1Fireball.image, player1Fireball.animationFrame * 14, 0, 14, 14, (player1Fireball.x - player1Fireball.width / 2) + randomX, (player1Fireball.y - player1Fireball.height * 1.2) + randomY, player1Fireball.width, player1Fireball.height);
                    player1Fireball.playerHitCheck(player1Fireball.x + randomX, player1Fireball.y + randomY);
                }, 10);
                setTimeout(function(){
                    player2Fireball.x = 500;
                    player2Fireball.y = 500;
                    player1Fireball.size = 0;
                    player1Fireball.exploded = true;
                    player1Fireball.usable = true;
                    clearInterval(player1FireballInterval);
                }, 200 * gameArea.slowMode);
                break;
            case 2:
                this.run = false;
                var player2FireballInterval = setInterval(function(){
                    var posneg = Math.round(Math.random()) * 2 - 1; //Give randomly 1 or -1
                    var randomX = 10 * posneg * Math.random();
                    var randomY = 10 * posneg * Math.random();
                    ctx.drawImage(player2Fireball.image, player2Fireball.animationFrame * 14, 0, 14, 14, (player2Fireball.x - player2Fireball.width / 2) + randomX, (player2Fireball.y - player2Fireball.height * 1.2) + randomY, player2Fireball.width, player2Fireball.height);
                    player2Fireball.playerHitCheck(player2Fireball.x + randomX, player2Fireball.y + randomY);
                }, 10);
                setTimeout(function(){
                    player2Fireball.x = 500;
                    player2Fireball.y = 500;
                    player2Fireball.size = 0;
                    player2Fireball.exploded = true;
                    player2Fireball.usable = true;
                    clearInterval(player2FireballInterval);
                }, 200 * gameArea.slowMode);
                break;
        }
        }
    this.playerHitCheck = function(fireballX, fireballY){
        switch(this.playerNumber){
            case 1:
                if(collisionTest(fireballX, fireballY, this.width, player2.hitBoxX, player2.y, player2.width, player2.height) && this.alreadyHit == false){
                    player2.getHit();
                    this.explode();
                    this.alreadyHit = true;
                    setTimeout(function(){
                        player2.getHit();
                        if(player1Fireball.size >= 7.5){
                            setTimeout(function(){
                                player2.getHit();
                                setTimeout(function(){
                                    player2.getHit();
                                    setTimeout(function(){
                                        player2.getHit();
                                    }, 30);
                                }, 30);
                            }, 30);
                        }
                    }, 30);
                }
                break;
            case 2:
                if(collisionTest(fireballX, fireballY, this.width, player1.hitBoxX, player1.y, player1.width, player1.height) && this.alreadyHit == false){
                    player1.getHit();
                    this.explode();
                    this.alreadyHit = true;
                    setTimeout(function(){
                        player1.getHit();
                        if(player2Fireball.size >= 7.5){
                            setTimeout(function(){
                                player1.getHit();
                                setTimeout(function(){
                                    player1.getHit();
                                    setTimeout(function(){
                                        player1.getHit();
                                    }, 30);
                                }, 30);
                            }, 30);
                        }
                    }, 30);
                }
                break;
            }
        
        
    }//http://stackoverflow.com/questions/21089959/detecting-collision-of-rectangle-with-circle
    this.animation = function(){
        switch(this.animationFrame){
            case 0:
                this.animationFrame = 1;
                break;
            case 1:
                this.animationFrame = 2;
                break;
            case 2: 
                this.animationFrame = 3;
                break;
            case 3:
                this.animationFrame = 0;
                break;
            default:
                this.animationFrame = 0;
                break;
        }
    }
    
}
function collisionTest(x, y, width, opx, opy, opwidth, opheight){
        //Add a switch plaernumber
        this.radius = width/2;
        this.thisx = x;
        this.thisy = y;
        this.opX = opx;
        this.opY = opy;
        this.opW = opwidth;
        this.opH = opheight;
        this.distX = Math.abs(this.thisx - this.opX - this.opW / 2);
        this.distY = Math.abs(this.thisy - this.opY - this.opH / 2);
        //document.getElementById("sideBox3").innerHTML = "DistX " + this.distX + " DistY " + this.distY;
        if (this.distX > (this.opW / 2 + this.radius)) {
            return false;
        }
        if (this.distY > (this.opH / 2 + this.radius)) {
            return false;
        }
        if (this.distX <= (this.opW / 2) && this.distY <= (this.opH / 2)) {
            return true;
        }
        this.dx = this.distX - this.opW / 2;
        this.dy = this.distY - this.opH / 2;
        return (this.dx * this.dx + this.dy * this.dy <= (this.radius * this.radius));
}
function healthBar(playerNumber, maxHealth){ //remake bettar
    this.playerNumber = playerNumber;
    this.maxHealth = maxHealth;
    this.x;
    this.y;
    this.height = 12;
    this.width = 16;
    this.heartCount = maxHealth;
    this.image = new Image();
    this.image.src = "images/heartSheet.png";
    this.healthDisplay = function(){
        switch(this.playerNumber){
            case 1:
                this.x = 5;
                this.y = 5;
                ctx = gameArea.context;
                ctx.imageSmoothingEnabled = false; //To prevent images from being blurry
                for(i = 0; i < this.heartCount; i++){
                    if(i >= 10){
                        ctx.drawImage(this.image, player1.hearts[i] * this.width, 0, this.width, this.height, this.x + ((i-10) * 14), this.y + this.height, 14, 10);
                    }
                    else{
                        ctx.drawImage(this.image, player1.hearts[i] * this.width, 0, this.width, this.height, this.x + (i * 14), this.y, 14, 10);
                    }
                }
                break;
            case 2:
                this.x = 225;
                this.y = 5;
                ctx = gameArea.context;
                ctx.imageSmoothingEnabled = false; //To prevent images from being blurry
                for(i = 0; i < this.heartCount; i++){
                    if(this.heartCount >= 20){
                        this.x = 155;
                    }
                    if(i >= 10){
                        ctx.drawImage(this.image, player2.hearts[i] * this.width, 0, this.width, 12, this.x + ((i-10) * 14), this.y + 12, 14, 10);
                    }
                    else{
                        ctx.drawImage(this.image, player2.hearts[i] * this.width, 0, this.width, 12, this.x + (i * 14), this.y, 14, 10);
                    }
                }
                break;
        }
    }
}
function cooldownIcon(playerNumber, imageSrc, x, y){ //I had a case 3 so that game won't break and I can still have some things not have cd
    this.playerNumber = playerNumber;
    this.image = new Image();
    this.image.src = imageSrc;
    this.x = x;
    this.y = y;
    this.cd;
    this.update = function(){
        if(this.playerNumber == 1 && player1.character == "ninja"){
            this.cd = player1.reflectCD;
        }
        if(this.playerNumber == 1 && player1.character == "mage"){
            var pressTime = new Date();
            this.cd = (pressTime - player1.lastETime) / 30;
        }
        if(this.playerNumber == 2 && player2.character == "ninja"){
            this.cd = player2.reflectCD;
        }
        if(this.playerNumber == 2 && player2.character == "mage"){
            var pressTime = new Date();
            this.cd = (pressTime - player2.lastETime) / 30;
        }
        if(this.playerNumber == 3){ //So that the thing won't appear
            this.cd = 0;
            this.x = 10000;
        }
        ctx.drawImage(this.image, this.x, this.y, 10, 10);
        ctx.fillStyle='#f1f1f1';
        ctx.fillRect(this.x, this.y, 10, 10-10*this.cd / 100);
    }
}
var keyMap = {81: false, 69: false, 87: false, 82: false, 85: false, 79: false, 191: false, 16: false};
document.addEventListener('keydown', function(event) {
    switch(event.keyCode){
        case 38: case 40: case 32:
            event.preventDefault(); //Prevents down and up arrows from scrolling page
        }
    if(event.keyCode == 32){ //Because waiting for the start menu is boring
        typingText.typeSpeed = 1000;
        typeFaster();
    }
    if(event.keyCode == 13 && document.getElementById("startGameButton").style.display != 'none'){
        startGame();
    }
    keyMap[event.keyCode] = true;
        if(player1.stunned == 0){
            if(event.keyCode == player1.controls[1] && player1.stunned == 0){ //W down
                if(player1.onGround == true){
                    player1.gravity = -0.72;
                    setTimeout(function(){
                        if(player1.onGround == false){
                            player1.gravity = 0.2;
                        }
                    }, 125 * gameArea.slowMode)
                }
                else if(player1.character == "ninja" && player1.doubleJumped == false){
                    player1.gravity = -0.6;
                    player1.gravitySpeed = 0;
                    player1.doubleJumped = true;
                    setTimeout(function(){
                        if(player1.onGround == false){
                            player1.gravity = 0.2;
                        }
                    }, 125 * gameArea.slowMode)
                }
            }
            else if(event.keyCode == player1.controls[2] && player1.speedX != -4 && keyMap[player1.controls[6]] == false && player1.stunned == 0){ //A down
                switch(player1.character){
                    case "ninja":
                        player1.speedX = -1.5;
                        break;
                    case "mage":
                        player1.speedX = -0.9;
                        break;
                    default:
                        player1.speedX = -1;
                        break;
                }
                player1.direction = -1;
                var pressTime = new Date();
                if(pressTime - player1.leftLastPressTime <= 500 && pressTime - player1.leftLastLiftTime <= 300){
                    switch(player1.character){
                        case "ninja":
                            player1.speedX = -4;
                            break;
                        case "brute":
                            if(player1.x + player1.width <= 310){
                                player1.charge();
                            }
                            break;
                        default:
                            break;
                    }
                    pressTime = 0;
                }
                player1.leftLastPressTime = pressTime;
            }
            else if(event.keyCode == player1.controls[4] && player1.speedX != 4 && keyMap[player1.controls[6]] == false && player1.stunned == 0){ //D down
                switch(player1.character){
                    case "ninja":
                        player1.speedX = 1.5;
                        break;
                    case "mage":
                        player1.speedX = 0.9;
                        break;
                    default:
                        player1.speedX = 1;
                        break;
                }
                player1.direction = 1;
                var pressTime = new Date();
                if(pressTime - player1.rightLastPressTime <= 500 && pressTime - player1.rightLastLiftTime <= 300){
                    switch(player1.character){
                        case "ninja":
                            player1.speedX = 4;
                            break;
                        case "brute":
                            if(player1.x >= -10){
                                player1.charge();
                            }
                            break;
                        default:
                            break;
                    }
                    pressTime = 0;
                }
                player1.rightLastPressTime = pressTime;
            }
        }
            //Player 2 stuff
        if(player2.stunned == 0){
            if(event.keyCode == player2.controls[1] && player2.stunned == 0){ //Up down
                if(player2.onGround == true){
                    player2.gravity = -0.72;
                    setTimeout(function(){
                        if(player2.onGround == false){
                            player2.gravity = 0.2;
                        }
                    }, 125 * gameArea.slowMode)
                }
                else if(player2.character == "ninja" && player2.doubleJumped == false){
                    player2.gravity = -0.6;
                    player2.gravitySpeed = 0;
                    player2.doubleJumped = true;
                    setTimeout(function(){
                        if(player2.onGround == false){
                            player2.gravity = 0.2;
                        }
                    }, 125 * gameArea.slowMode)
                }
            }
            else if(event.keyCode == player2.controls[2] && player2.speedX != -4 && keyMap[player2.controls[6]] == false && player2.stunned == 0){ //Left down
                switch(player2.character){
                    case "ninja":
                        player2.speedX = -1.5;
                        break;
                    case "mage":
                        player2.speedX = -0.9;
                        break;
                    default:
                        player2.speedX = -1;
                        break;
                }
                player2.direction = -1;
                var pressTime = new Date();
                if(pressTime - player2.leftLastPressTime <= 500 && pressTime - player2.leftLastLiftTime <= 300){
                    switch(player2.character){
                        case "ninja":
                            player2.speedX = -4;
                            break;
                        case "brute":
                            if(player2.x + player1.width <= 310){
                                player2.charge();
                            }
                            break;
                        default:
                            break;
                    }
                    pressTime = 0;
                }
                player2.leftLastPressTime = pressTime;
            }
            else if(event.keyCode == player2.controls[4] && player2.speedX != 4 && keyMap[player2.controls[6]] == false && player2.stunned == 0){ //Right down
                switch(player2.character){
                    case "ninja":
                        player2.speedX = 1.5;
                        break;
                    case "mage":
                        player2.speedX = 0.9;
                        break;
                    default:
                        player2.speedX = 1;
                        break;
                }
                player2.direction = 1;
                var pressTime = new Date();
                if(pressTime - player2.rightLastPressTime <= 500 && pressTime - player2.rightLastLiftTime <= 300){
                    switch(player2.character){
                        case "ninja":
                            player2.speedX = 4;
                            break;
                        case "brute":
                            if(player2.x >= -10){
                                player2.charge();
                            }
                            break;
                        default:
                            break;
                    }
                    pressTime = 0;
                }
                player2.rightLastPressTime = pressTime;
            }
        }
    });
document.addEventListener('keyup', function(event) {
    keyMap[event.keyCode] = false;
    //player 1 stuff
    if(event.keyCode == player1.controls[1]){ //W lift
        player1.gravity = 0.2;
     }
    else if(event.keyCode == player1.controls[2] && player1.direction == -1 && player1.charging == false){ //A lift
        player1.speedX = 0;
        player1.leftLastLiftTime = new Date();
    }
    else if(event.keyCode == player1.controls[4] && player1.direction == 1 && player1.charging == false){ //D lift
        player1.speedX = 0;
        player1.rightLastLiftTime = new Date();
    }
    if(event.keyCode == player1.controls[5]){
        switch(player1.character){
            case "mage":
                if(player1Fireball.run == false){
                    player1Fireball.run = true;
                    player1Fireball.usable = false;
                    player1Fireball.setDirection();
                }
                break;
        }
    }
    else if(event.keyCode == player1.controls[6]){
        player1.mageTimeyStuffey();
    }
    //player 2 stuff
    if(event.keyCode == player2.controls[1]){ //Up lift
        player2.gravity = 0.2;
    }
    else if(event.keyCode == player2.controls[2] && player2.direction == -1 && player2.charging == false){ //Left lift
        player2.speedX = 0;
        player2.leftLastLiftTime = new Date();
    }
    else if(event.keyCode == player2.controls[4] && player2.direction == 1 && player2.charging == false){ //right lift
        player2.speedX = 0;
        player2.rightLastLiftTime = new Date();
    }
    if(event.keyCode == player2.controls[5]){
        switch(player2.character){
            case "mage":
                if(player2Fireball.run == false){
                    player2Fireball.run = true;
                    player2Fireball.usable = false;
                    player2Fireball.setDirection();
                }
                break;
        }
    }
    else if(event.keyCode == player2.controls[6]){
        player2.mageTimeyStuffey();
    }
});
function updateGameArea() {
    gameArea.clear();
    gameArea.timePassed++;
    player1.newPos();
    player1.update();
    player2.newPos();
    player2.update();
    platform1.update();
    platform2.update();
    platform3.update();
    platform4.update();
    platform5.update();
    //document.getElementById("sideBox").innerHTML = "Player 1 X: " + player1.x + " Y: " + player1.y + " X Speed: " + player1.speedX + " Y Speed: " + player1.speedY + " <br>Gravity: " + player1.gravity + " Gravity Speed: " + player1.gravitySpeed + " Stunned: " + player1.stunned + "<br>Player 2 X: " + player2.x + " Y: " + player2.y + " X Speed: " + player2.speedX + " Y Speed: " + player2.speedY + " <br>Gravity: " + player2.gravity + " Gravity Speed: " + player2.gravitySpeed + " Stunned: " + player2.stunned + "<br>P1 Chracter:" + player1.character;
    player1Shuriken1.update();
    player1Shuriken2.update();
    player1Shuriken3.update();
    player1Shuriken4.update();
    player2Shuriken1.update();
    player2Shuriken2.update();
    player2Shuriken3.update();
    player2Shuriken4.update();
    player1Fireball.update();
    player2Fireball.update();
    player1HealthBar.healthDisplay();
    player2HealthBar.healthDisplay();
    player1CD.update();
    player2CD.update();
}
function updateAnimations(){
    if(player1.onGround == false){
        player1.jumpingAnimation();
    }
    else if(player1.speedX != 0 && player1.direction == -1){
        player1.leftWalkingAnimation();
    }
    else if(player1.speedX != 0 && player1.direction == 1){
        player1.rightWalkingAnimation();
    }
    else{
        player1.animationFrame = 0;
    }
    if(player2.onGround == false){
        player2.jumpingAnimation();
    }
    else if(player2.speedX != 0 && player2.direction == -1){
        player2.leftWalkingAnimation();
    }
    else if(player2.speedX != 0 && player2.direction == 1){
        player2.rightWalkingAnimation();
    }
    else{
        player2.animationFrame = 0;
    }
    player1Fireball.animation();
    player1.bruteHammerSwing();
    player2.bruteHammerSwing();
}
function checkOutside(){
    if(player1.hitBoxX > 300 || player1.hitBoxX + player1.width < 0){
        player1.getHit();
    }
    if(player2.hitBoxX > 300 || player2.hitBoxX + player2.width < 0){
        player2.getHit();
    }
}