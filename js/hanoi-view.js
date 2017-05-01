class View{
  constructor(hanoiGame, $el) {
    this.game = hanoiGame;
    this.$el = $el;
    this.setupBoard();
    this.startId = null;
    this.$el.on('click', 'ul', this.clickTower.bind(this))
    this.render();
  }

  setupBoard() {
    this.$el.addClass("group");
    for (let towerNum = 0; towerNum < 3; towerNum++) {
      let $tower = $("<ul>");
      for (let discNum = 0; discNum < 3; discNum++) {
        let $disc = $("<li>");
        $tower.append($disc);
      }
      this.$el.append($tower);
    }
  }

  render() {
    let $towers = $("ul");
    $towers.removeClass();
    if (this.startId !== null) {
      $towers.eq(this.startId).addClass('selected')
    }
    this.game.towers.forEach((disks, towerIdx) => {
      let $disks = $towers.eq(towerIdx).children();
      $disks.removeClass();
      disks.forEach((diskWidth, diskIdx) => {
        $disks.eq((-1*(diskIdx + 1))).addClass(`disc-${diskWidth}`)
      });
    });
  }

  clickTower(event) {
    const clickedTower = $(event.currentTarget).index();

    if (this.startId !== null) {
      if (!this.game.move(this.startId, clickedTower)) {
        alert("INVALID MOVE :(");
      }
      this.startId = null;
    } else {
      this.startId = clickedTower;
    }

    if (this.game.isWon()) {
      this.$el.off("click");
      this.$el.addClass("game-over");
      this.render();

      alert("LOOK AT YOU! YOU DID IT!");
    }

    this.render();
  }
}

module.exports = View;
