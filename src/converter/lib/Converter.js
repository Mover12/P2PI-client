import Vector from './Vector'
export default class Converter {
    static CaToMo(pos, offset, scale) {
        return pos.sub(offset).mult(scale);
    }

    static MoToCa(pos, offset, scale) {
        return pos.div(scale).add(offset);
    }

    static CaToCh(pos, chunkPSize) {
        var chunkX = Math.floor(pos.x / (chunkPSize));
        var chunkY = Math.floor(pos.y / (chunkPSize));
        return new Vector(chunkX, chunkY);
    }

    static CaToCe(pos, chunkPSize, cellPSize) {
        var cellX = Math.floor((pos.x - this.CaToCh(pos, chunkPSize).x * chunkPSize) / (cellPSize));
        var cellY = Math.floor((pos.y - this.CaToCh(pos, chunkPSize).y * chunkPSize) / (cellPSize));
        return new Vector(cellX, cellY);
    }
}