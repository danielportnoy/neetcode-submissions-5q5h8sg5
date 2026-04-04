class KthLargest {
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k, nums) {
        this.k = k;
        this.maxHeap = new MaxPriorityQueue();
        for (let i = 0; i < nums.length; i++) {
            this.maxHeap.enqueue(nums[i]);
        }
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val) {
        this.maxHeap.enqueue(val);

        let kLargest = [];

        for (let i = 0; i < this.k; i++) {
            kLargest.push(this.maxHeap.dequeue());
        }

        const res = kLargest[this.k - 1];

        for (let i = 0; i < kLargest.length; i++) {
            this.maxHeap.enqueue(kLargest[i]);
        }

        return res;
    }
}

const kthLargest = new KthLargest(3, [1, 2, 3, 3]);
console.log(kthLargest.add(3)); // return 3
console.log(kthLargest.add(5)); // return 3
console.log(kthLargest.add(6)); // return 3
console.log(kthLargest.add(7)); // return 5
console.log(kthLargest.add(8)); // return 6
