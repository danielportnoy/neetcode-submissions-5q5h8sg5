class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        let stack = [];
    let p = -1;
    for (let i = 0; i < operations.length; i++) {
      if (operations[i] === "D") {
        stack.push(parseInt(stack[p]) * 2);
        p = p + 1;
      } else if (operations[i] === "C") {
        stack.pop(p);
        p = p - 1;
      } else if (operations[i] === "+") {
        stack.push(parseInt(stack[p]) + parseInt(stack[p - 1]));
        p = p + 1;
      } else {
        stack.push(operations[i]);
        p = p + 1;
      }
    }
    return stack.reduce((a, b) => parseInt(a) + parseInt(b), 0);
    }
}
