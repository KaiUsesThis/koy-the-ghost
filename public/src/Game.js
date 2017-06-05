var unitGame = unitGame || {};

unitGame.Game = function(){};



unitGame.Game.prototype = {

    create: function() {
    
        this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.game.scale.updateLayout(true);
       
        
        this.score = 0;
    
        
         
        // sprites.js
        this.addSprites();
        

        
        // platforms.js
        this.createPlatforms();
        this.stars = this.game.add.group();
    
        this.scoreText = this.game.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#000' });
        this.stars.enableBody = true;
    
    
        for (var i = 0; i < 12; i++)
        {
           
            this.star = this.stars.create(i * 70, 0, 'star');
    
            this.star.body.gravity.y = 300;
    
          
            this.star.body.bounce.y = 0.7 + Math.random() * 0.2;
        }

    
      
        this.cursors = this.game.input.keyboard.createCursorKeys();
    },


    update: function() {


        this.game.physics.arcade.collide(this.player, this.platforms);
        this.game.physics.arcade.collide(this.stars, this.platforms);
        
        this.game.physics.arcade.collide(this.enemy, this.platforms);
        
    
        this.game.physics.arcade.overlap(this.player, this.stars, this.collectStar, null, this);
        this.game.physics.arcade.overlap(this.enemy, this.player, this.enemyCollide, null, this);
        
        this.player.body.velocity.x = 300;
        this.player.animations.play('right');

            
        if (this.cursors.right.isDown) {

            this.player.body.velocity.x = 150;
            this.sky.tilePosition.x -= 3;
        
        }
        else {
    
            // this.player.frame = 6;
            // this.player.body.velocity.x = 0;
        }
        

        if (this.cursors.up.isDown && this.player.body.touching.down) {
            this.player.body.velocity.y = -1000;
        }
        
        this.camera.follow(this.player);




    },

    
    collectStar: function(player, star) {

    
      
        star.kill();
    
        this.score += 10;
    
        console.log(this.score);
    
    
        this.scoreText.text = 'Score: ' + this.score;
    
        
    
    }
    
}

