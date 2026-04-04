class KthLargest {
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k, nums) {
        console.log(`k: ${k}, nums: ${nums}`);
        this.k = k;
        let maxHeap = new MaxPriorityQueue();
        this.minHeap = new MinPriorityQueue();
        for (let i = 0; i < nums.length; i++) {
            maxHeap.enqueue(nums[i]);
        }
        console.log(
            `maxHeap: ${maxHeap.toArray()}, maxHeap size: ${maxHeap.size()}`
        );
        while (maxHeap.size() > 0) {
            this.minHeap.enqueue(maxHeap.dequeue());
            if (this.minHeap.size() >= this.k) {
                break;
            }
        }
        console.log(`minHeap: ${this.minHeap.toArray()}`);
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val) {
        console.log(`adding val: ${val}`);
        let kLargest = this.minHeap.front();

        console.log(`kLargest: ${kLargest}`);

        if (val <= kLargest) {
            console.log(`val <= kLargest, returning kLargest: ${kLargest}`);
            return kLargest;
        }

        console.log(`val > kLargest, dequeuing kLargest and enqueuing val`);
        if (this.minHeap.size() >= this.k) {
            console.log(`minHeap size >= k, dequeuing minHeap front`);
            this.minHeap.dequeue();
        }
        this.minHeap.enqueue(val);
        console.log(`minHeap: ${this.minHeap.toArray()}`);
        return this.minHeap.front();
    }
}