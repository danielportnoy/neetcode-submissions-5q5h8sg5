class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        function dfs(r, c) {
            if (r < 0 || r >= grid.length || c < 0 || c >= grid[0].length) return 0;

            if (grid[r][c] === 0) return 0;

            grid[r][c] = 0;

            let r_u = dfs(r - 1, c);
            let r_d = dfs(r + 1, c);
            let c_l = dfs(r, c - 1);
            let c_r = dfs(r, c + 1);

            return r_u + r_d + c_l + c_r + 1;
        }

        let maxArea = 0;
        for (let r = 0; r < grid.length; r++) {
            for (let c = 0; c < grid[0].length; c++) {
                if (grid[r][c] === 1) {
                    maxArea = Math.max(maxArea, dfs(r, c));
                }
            }
        }

        return maxArea;
    }
}