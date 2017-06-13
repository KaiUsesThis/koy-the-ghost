var unitGame = unitGame || {};



unitGame.Game.prototype.addSprites = function() {
    
    this.sky = this.game.add.tileSprite(0, 0, 1500000, 1500000 , 'sky');

    // Adds in player
    this.player = this.game.add.sprite(32, 125, 'dude');
    this.player.scale.setTo(2,2);

    
    this.game.physics.arcade.enable(this.player);

    // this.player.body.bounce.y = 0.2;
    this.player.body.gravity.y = 1000;
    this.player.body.collideWorldBounds = false;
    
        
    this.player.animations.add('right', [0, 1], 2, true);
    // this.player.animations.add('left', [8, 9, 10, 11, 12, 13, 14], 7, true);
    
    
    
  

        
    this.enemies = this.game.add.group();
    this.enemies.enableBody = true;
    // this.game.physics.arcade.enable(this.enemies);
    
    
    for (var i = 0; i < 1200; i++) {
       
        this.enemy = this.enemies.create(i * 70, 1000, 'enemy');

        this.enemy.body.gravity.y = 300;

      
        this.enemy.body.bounce.y = 1 + Math.random() * 0.85654;
    }

    
    

    
    
};

