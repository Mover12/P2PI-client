export default class Chunk {
  cells;
  constructor(cellCount) {
    this.cellCount = cellCount;
    this.cells = Array(cellCount).fill().map(() => Array(cellCount).fill(0));
  }
}