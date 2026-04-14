class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const sortedStringsMap = new Map();

        for (let i = 0; i < strs.length; i++) {
            const sorted = strs[i].split("").sort().join("");
            if (!sortedStringsMap.has(sorted)) sortedStringsMap.set(sorted, []);
            sortedStringsMap.get(sorted).push(strs[i]);
        }

        let res = [];
        for (const value of sortedStringsMap.values()) res.push(value);

        return res;
    }
}