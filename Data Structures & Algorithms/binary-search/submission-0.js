class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let l = 0,
            r = nums.length - 1;
        while (l <= r) {
            let m = Math.floor((r + l) / 2);
            console.log(`l: ${l}, r: ${r}`);
            console.log(`m: ${m}`);
            if (target < nums[m]) {
                r = m - 1;
            } else if (target > nums[m]) {
                l = m + 1;
            } else {
                return m;
            }
        }

        return -1;

    }
}
