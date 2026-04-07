class Solution {
    /**
     * @param {number[][]} image
     * @param {number} sr
     * @param {number} sc
     * @param {number} color
     * @return {number[][]}
     */
    floodFill(image, sr, sc, color) {
        let visited = new Set();
        let originalColor = image[sr][sc];

        function dfs(sr, sc) {
            if (sr < 0 || sr >= image.length || sc < 0 || sc >= image[0].length)
                return;

            if (visited.has(`${sr},${sc}`)) return;
            visited.add(`${sr},${sc}`);
            if (image[sr][sc] !== originalColor) {
                return;
            }
            image[sr][sc] = color;

            dfs(sr + 1, sc);
            dfs(sr - 1, sc);
            dfs(sr, sc + 1);
            dfs(sr, sc - 1);
        }

        dfs(sr, sc);
        return image;
    }
}