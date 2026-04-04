class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        const maxHeap = new MaxPriorityQueue();
        for (let i = 0; i < stones.length; i++) {
            maxHeap.enqueue(stones[i]);
        }
        while (maxHeap.size() > 1) {
            const stone1 = maxHeap.dequeue();
            const stone2 = maxHeap.dequeue();
            if (stone1 !== stone2) {
                maxHeap.enqueue(Math.abs(stone1 - stone2));
            }
        }
        return maxHeap.size() > 0 ? maxHeap.dequeue() : 0;
    }
}
