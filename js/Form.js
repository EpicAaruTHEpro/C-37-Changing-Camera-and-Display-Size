class Form {

  constructor() {
    this.input = createInput("");
    this.button = createButton('Play');
    this.greeting = createElement('h2');
    this.reset = createButton('Reset');
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    //this.reset.hide();
  }

  restart() {
    allPlayers = database.ref('players');
    allPlayers.remove();
    database.ref('/').update({
      playerCount: 0
    });
    database.ref('/').update({
      gameState: 0
    });
    //playerCount = 0;
    //gameState = 0;
  }

  display(){
    var title = createElement('h2')
    title.html("Car Racing Game");
    title.position((displayWidth/2)-50, 0);

    this.input.position((displayWidth/2)-40, (displayHeight/2)-80);
    this.button.position((displayWidth/2)+30, displayHeight/2);
    this.reset.position(displayWidth-100, 0);

    this.reset.mousePressed(()=> {
      form.restart();
      //playerCount = 0;
      //gameState = 0;
    })
    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name)
      this.greeting.position((displayWidth/2)-40, displayHeight/4);
    });

  }
}
