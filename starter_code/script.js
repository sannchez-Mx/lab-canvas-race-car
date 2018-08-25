window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  function startGame() {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");

    ctx.fillStyle = "#008c0c";
    ctx.fillRect(0,0,400,600);
    ctx.fillStyle = "#7f7f7f";
    ctx.fillRect(30,0,340,600);
    ctx.strokeStyle = "white";
    ctx.lineWidth = 10;
    ctx.beginPath();
    ctx.moveTo(50,0);
    ctx.lineTo(50,600);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(350,0);
    ctx.lineTo(350,600);
    ctx.stroke();
    ctx.lineWidth = 8;
    ctx.beginPath();
    ctx.setLineDash([40,25]);
    ctx.moveTo(200,0);
    ctx.lineTo(200,600);
    ctx.stroke();
    
    /*var image = new Image();
    image.src = "./images/car.png";
    image.onload = function(){
    ctx.drawImage(image, 170, 485, 60, 95);*/

    class Car{
      constructor(){
        this.x = 170;
        this.y = 485;
        this.width = 60;
        this.height = 95;    
        this.speedX = 0;
        this.newPos = function(){
          this.x += this.speedX;
        }    
        this.image1 = new Image();
        this.image1.src = "./images/car.png";
        this.image = this.image1;
      } 
      collision(item){
        return (this.x < item.x + item.width) &&
        (this.x + this.width > item.x) &&
        (this.y < item.y + item.height) &&
        (this.y + this.height > item.y);
      }

      draw(){
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);

      };
    }

    class Highway{
      constructor(){
          this.x = 0;
          this.y = 0;
          this.width = canvas.width;
          this.height = canvas.height;
          this.image = new Image();
          this.image.src = "./images/pista.png";
        }
        
       gameOver(){
          sonido.pause();
          clearInterval(interval);
          ctx.font = "40px Avenir";
          ctx.fillText("GameOver", 115, 100);
        }
  
      draw(){
          this.y++;
          if(this.y < -canvas.height) this.y = 0;
          ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
          ctx.drawImage(this.image, this.x, this.y - this.height, this.width, this.height);
        }
      };

    var car = new Car();
    var highway = new Highway();

    var frames = 0;
    var interval = setInterval(function(){
      frames++;
      ctx.clearRect(0,0, 400, 600);
      highway.draw();
      car.draw();
      gameArea();
    }, 1000/60);
    
    function gameArea() {
      car.newPos();
    }
    
    addEventListener("keydown", function(e){
      if(e.keyCode === 37){
        car.speedX -= 1;
      }
      if(e.keyCode === 39){
        car.speedX += 1;
    }
  });
};

};