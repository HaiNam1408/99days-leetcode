/*
Given an array of strings strs, group the anagrams together. 
You can return the answer in any order.

Example 1:
Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
Explanation:
There is no string in strs that can be rearranged to form "bat".
The strings "nat" and "tan" are anagrams as they can be rearranged to form each other.
The strings "ate", "eat", and "tea" are anagrams as they can be rearranged to form each other.

Example 2:
Input: strs = [""]
Output: [[""]]

Example 3:
Input: strs = ["a"]
Output: [["a"]]

Constraints:
- 1 <= strs.length <= 104
- 0 <= strs[i].length <= 100
- strs[i] consists of lowercase English letters.
*/

// Solution 1:
function groupAnagrams(strs: string[]): string[][] {
    let map = {};

    for (let i = 0; i < strs.length; i++) {
        let key = strs[i].split("").sort().join("");
        if (map[key]) {
            map[key] = [...map[key], strs[i]];
        } else {
            map[key] = [strs[i]];
        }
    }

    return Object.values(map);
};

// Solution 2:
function groupAnagrams2(strs: string[]): string[][] {
    let map = {};
    let key;

    for (let i = 0; i < strs.length; i++) {
        key = Array(26).fill(0);
        for (let char of strs[i]) {
            key[char.charCodeAt(0) - 97]++;
        }

        key = key.join("#");

        if (!map[key]) {
            map[key] = [];
        }
        map[key] = [...map[key], strs[i]];
    }

    return Object.values(map);
};