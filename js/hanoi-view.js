class View{
  constructor(hanoiGame, $el) {
    this.game = hanoiGame;
    this.$el = $el;
    this.setupBoard();
  }

  setupBoard() {
    this.$el.addClass("group");
    for (let towerNum = 0; towerNum < 3; towerNum++) {
      let $tower = $("<ul>")
      for (let discNum = 0; discNum < 3; discNum++) {
        let $disc = $("<li>");
        $disc.data("towerNum", towerNum);
        $tower.append($disc);
      }
      this.$el.append($tower);
    }
  }
}

module.exports = View;
