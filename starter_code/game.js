window.onload = function() {
    document.getElementById("start-button").onclick = function() {
      startGame();
    };
  
    function startGame() {
      highway.start();
    };

    var highway = {
        canvas : document.createElement("canvas"),
        start : function(){
            this.canavas.width = 500;
            this.canavas.height = 600;
            this.ctx = this.canavas.getContext("2d");
        } 
    }

    class
};