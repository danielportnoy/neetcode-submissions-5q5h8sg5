class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums) {
        let counts = [0, 0, 0];
        for (let i = 0; i < nums.length; i++) {
            counts[nums[i]]++;
        }

        let p = 0

        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < counts[i]; j++) {
                nums[p] = i;
                p++;
            }
        }
    }
}
