class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let max = Math.max(...piles);
        let min = 1;

        while (min <= max) {
            let mid = Math.floor((min + max) / 2);

            let hours = 0;
            for (let i = 0; i < piles.length; i++) {
                hours += Math.ceil(piles[i] / mid);
            }

            if (hours <= h) {
                max = mid - 1;
            } else {
                min = mid + 1;
            }
        }

        return min;
    }
}
