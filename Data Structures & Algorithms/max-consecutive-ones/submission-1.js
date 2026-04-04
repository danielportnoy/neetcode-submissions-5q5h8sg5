class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
        let maxConsecutiveOnes = 0;
        let currConsecutiveOnes = 0;

        for (let i = 0; i < nums.length; i++) {
            if (nums[i] === 1) {
                currConsecutiveOnes++;
            } else {
                if (currConsecutiveOnes > maxConsecutiveOnes) {
                    maxConsecutiveOnes = currConsecutiveOnes;
                }
                currConsecutiveOnes = 0;
            }
        }

        if (currConsecutiveOnes > maxConsecutiveOnes) {
            maxConsecutiveOnes = currConsecutiveOnes;
        }

        return maxConsecutiveOnes;
    }
}
