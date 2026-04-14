class Solution {
    /**
     * @param {number} m
     * @param {number} n
     * @return {number}
     */
    uniquePaths(m, n) {
        let previousRow = new Array(n).fill(0);

        for (let r = 0; r < m; r++) {
            let currentRow = [1];

            for (let c = 1; c < n; c++) {
                currentRow.push(previousRow[c] + currentRow[c - 1]);
            }

            for (let i = 0; i < n; i++) {
                previousRow[i] = currentRow[i];
            }
        }

        return previousRow[n - 1];
    }
}