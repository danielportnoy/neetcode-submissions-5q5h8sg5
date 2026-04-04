class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let countsMap = new Map();
        for (let i = 0; i < nums.length; i++) {
            if (countsMap.has(nums[i])) {
                return true;
            }
            countsMap.set(nums[i], 1);
        }
        return false;
    }
}
