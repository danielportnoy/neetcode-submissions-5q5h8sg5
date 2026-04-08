class Coord {
    constructor(r, c) {
        this.r = r;
        this.c = c;
    }

    toString() {
        return `${this.r},${this.c}`;
    }
}

class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    shortestPathBinaryMatrix(grid) {
        if (!grid?.length || !grid[0]) return -1;
        let queue = [new Coord(0, 0)];
        let visited = new Set();
        let lenght = 1;

        while (queue.length != 0) {
            let size = queue.length;
            for (let i = 0; i < size; i++) {
                let coord = queue.shift();

                if (visited.has(coord.toString())) continue;
                visited.add(coord.toString());

                let r = coord.r;
                let c = coord.c;

                if (r < 0 || r >= grid.length || c < 0 || c >= grid[0].length) continue;
                if (grid[r][c] === 1) continue;

                if (r === grid.length - 1 && c === grid[0].length - 1) return lenght;

                queue.push(new Coord(r - 1, c));
                queue.push(new Coord(r, c - 1));
                queue.push(new Coord(r + 1, c));
                queue.push(new Coord(r, c + 1));
                queue.push(new Coord(r - 1, c - 1));
                queue.push(new Coord(r + 1, c + 1));
                queue.push(new Coord(r - 1, c + 1));
                queue.push(new Coord(r + 1, c - 1));
            }

            lenght += 1;
        }

        return -1;
    }
}
