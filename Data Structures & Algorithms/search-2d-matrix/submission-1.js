class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let rows = matrix.length;
        let cols = matrix[0].length;

        let rows_l = 0;
        let rows_r = rows - 1;
        let rows_m = -1;

        while (rows_l <= rows_r) {
            rows_m = Math.floor((rows_l + rows_r) / 2);

            console.log(`rows_l: ${rows_l}, rows_r: ${rows_r}, rows_m: ${rows_m}`);
            if (target > matrix[rows_m][cols - 1]) {
                rows_l = rows_m + 1;
            } else if (target < matrix[rows_m][0]) {
                rows_r = rows_m - 1;
            } else {
                break;
            }
        }

        let target_row = rows_m;

        let cols_l = 0;
        let cols_r = cols - 1;

        while (cols_l <= cols_r) {
            let cols_m = Math.floor((cols_l + cols_r) / 2);
            let cols_m_val = matrix[target_row][cols_m];

            console.log(
                `cols_l: ${cols_l}, cols_r: ${cols_r}, cols_m: ${cols_m}, cols_m_val: ${cols_m_val}`
            );

            if (target < cols_m_val) {
                cols_r = cols_m - 1;
            } else if (target > cols_m_val) {
                cols_l = cols_m + 1;
            } else {
                return true;
            }
        }

        return false;
    }
}
