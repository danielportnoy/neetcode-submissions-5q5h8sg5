/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number[]}
     */
    rightSideView(root) {
        if (root === null) return [];
        let res = [];
        let queue = [root];
        while (queue.length > 0) {
            console.log(`queue: [${queue.map((node) => node.val).join(", ")}]`);
            res.push(queue[queue.length - 1].val);
            console.log(`res: [${res.join(", ")}]`);
            let size = queue.length;
            for (let i = 0; i < size; i++) {
                console.log(
                    `i: ${i}, queue: [${queue.map((node) => node.val).join(", ")}]`
                );
                let node = queue.shift();
                console.log(`node: ${node.val}`);
                if (node.left !== null) queue.push(node.left);
                if (node.right !== null) queue.push(node.right);
                console.log(`queue: [${queue.map((node) => node.val).join(", ")}]`);
            }
        }
        return res;
    }
}
