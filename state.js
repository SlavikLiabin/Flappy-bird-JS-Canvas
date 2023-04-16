export default class State {
  constructor(current, getReady, game, over) {
    this.current = current = 0;
    this.getReady = getReady = 0;
    this.game = game = 1;
    this.over = over = 2;
  }
}
