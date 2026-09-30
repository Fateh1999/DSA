// Theme system for each map category
const mapThemes = {
    stack: {
        name: 'Stack World',
        skyColor: '#ff6b6b',
        groundColor: '#8b4513',
        cloudColor: '#ffa07a',
        platformColor: '#cd853f',
        weather: 'sunny',
        accentColor: '#ff4444'
    },
    linkedlist: {
        name: 'Linked List World',
        skyColor: '#4ecdc4',
        groundColor: '#2d6a4f',
        cloudColor: '#80cbc4',
        platformColor: '#40e0d0',
        weather: 'rainy',
        accentColor: '#00b894'
    },
    binarytree: {
        name: 'Binary Tree World',
        skyColor: '#95e1d3',
        groundColor: '#228b22',
        cloudColor: '#b8e994',
        platformColor: '#27ae60',
        weather: 'windy',
        accentColor: '#27ae60'
    },
    bst: {
        name: 'BST World',
        skyColor: '#a8e6cf',
        groundColor: '#1b4332',
        cloudColor: '#c8f7dc',
        platformColor: '#2d6a4f',
        weather: 'cloudy',
        accentColor: '#1b4332'
    },
    mixedtree: {
        name: 'Mixed Trees World',
        skyColor: '#fdcb6e',
        groundColor: '#8b5a2b',
        cloudColor: '#ffeaa7',
        platformColor: '#d35400',
        weather: 'sunny',
        accentColor: '#e17055'
    },
    arraystring: {
        name: 'Array & String World',
        skyColor: '#74b9ff',
        groundColor: '#6c5ce7',
        cloudColor: '#a29bfe',
        platformColor: '#6c5ce7',
        weather: 'stormy',
        accentColor: '#0984e3'
    },
    heap: {
        name: 'Heap World',
        skyColor: '#fd79a8',
        groundColor: '#6c5ce7',
        cloudColor: '#fdcb6e',
        platformColor: '#e84393',
        weather: 'foggy',
        accentColor: '#e84393'
    },
    mathematics: {
        name: 'Mathematics World',
        skyColor: '#dfe6e9',
        groundColor: '#636e72',
        cloudColor: '#b2bec3',
        platformColor: '#636e72',
        weather: 'cloudy',
        accentColor: '#2d3436'
    },
    searchingsorting: {
        name: 'Searching & Sorting World',
        skyColor: '#00cec9',
        groundColor: '#00b894',
        cloudColor: '#81ecec',
        platformColor: '#00b894',
        weather: 'rainy',
        accentColor: '#00cec9'
    },
    graph: {
        name: 'Graph World',
        skyColor: '#e056fd',
        groundColor: '#686de0',
        cloudColor: '#be2edd',
        platformColor: '#686de0',
        weather: 'nebula',
        accentColor: '#e056fd'
    },
    dp: {
        name: 'Dynamic Programming World',
        skyColor: '#ffeaa7',
        groundColor: '#fdcb6e',
        cloudColor: '#fd79a8',
        platformColor: '#fdcb6e',
        weather: 'sunny',
        accentColor: '#fdcb6e'
    },
    bfsdfs: {
        name: 'BFS/DFS World',
        skyColor: '#55efc4',
        groundColor: '#00b894',
        cloudColor: '#00cec9',
        platformColor: '#00b894',
        weather: 'windy',
        accentColor: '#00cec9'
    },
    textprocessing: {
        name: 'Text Processing World',
        skyColor: '#fab1a0',
        groundColor: '#e17055',
        cloudColor: '#ffeaa7',
        platformColor: '#e17055',
        weather: 'sunny',
        accentColor: '#d63031'
    },
    numbertheory: {
        name: 'Number Theory World',
        skyColor: '#6c5ce7',
        groundColor: '#341f97',
        cloudColor: '#a29bfe',
        platformColor: '#6c5ce7',
        weather: 'starry',
        accentColor: '#6c5ce7'
    },
    geometry: {
        name: 'Geometry World',
        skyColor: '#00d2d3',
        groundColor: '#01a3a4',
        cloudColor: '#81ecec',
        platformColor: '#01a3a4',
        weather: 'clear',
        accentColor: '#00d2d3'
    },
    gametheory: {
        name: 'Game Theory World',
        skyColor: '#ff7675',
        groundColor: '#d63031',
        cloudColor: '#fab1a0',
        platformColor: '#d63031',
        weather: 'intense',
        accentColor: '#d63031'
    }
};

// Question data for each map - From DSA SHEET by NISHANT CHAHAR
const questionsData = {
    stack: [
        { id: 1, title: "Next Greater Element on right", difficulty: "medium", readLink: "https://www.geeksforgeeks.org/next-greater-element/" },
        { id: 2, title: "Next Greater Element 2", difficulty: "medium", readLink: "https://leetcode.com/problems/next-greater-element-ii/" },
        { id: 3, title: "Daily Temperatures", difficulty: "medium", readLink: "https://leetcode.com/problems/daily-temperatures/" },
        { id: 4, title: "Maximum difference between left and right smaller", difficulty: "medium", readLink: "https://www.geeksforgeeks.org/find-maximum-difference-between-nearest-left-and-right-smaller-elements/" },
        { id: 5, title: "Stock Span Problem", difficulty: "medium", readLink: "https://www.geeksforgeeks.org/the-stock-span-problem/" },
        { id: 6, title: "Largest Rectangular Area Histogram", difficulty: "hard", readLink: "https://leetcode.com/problems/largest-rectangle-in-histogram/" },
        { id: 7, title: "Maximum size binary matrix containing 1", difficulty: "hard", readLink: "https://leetcode.com/problems/maximal-rectangle/" },
        { id: 8, title: "Valid Parentheses", difficulty: "easy", readLink: "https://leetcode.com/problems/valid-parentheses/" },
        { id: 9, title: "Length of longest valid substring", difficulty: "medium", readLink: "https://www.geeksforgeeks.org/length-of-the-longest-valid-substring/" },
        { id: 10, title: "Count of duplicate Parentheses", difficulty: "medium", readLink: "https://www.geeksforgeeks.org/find-expression-duplicate-parenthesis-not/" },
        { id: 11, title: "Decode String", difficulty: "medium", readLink: "https://leetcode.com/problems/decode-string/" },
        { id: 12, title: "Minimum Add To make Parentheses Valid", difficulty: "medium", readLink: "https://leetcode.com/problems/minimum-add-to-make-parentheses-valid/" },
        { id: 13, title: "Print Bracket Number", difficulty: "medium", readLink: "https://www.geeksforgeeks.org/print-bracket-number/" },
        { id: 14, title: "Asteroid Collision", difficulty: "medium", readLink: "https://leetcode.com/problems/asteroid-collision/" },
        { id: 15, title: "Backspace String Compare", difficulty: "medium", readLink: "https://leetcode.com/problems/backspace-string-compare/" },
        { id: 16, title: "Print Binary Number", difficulty: "medium", readLink: "https://www.geeksforgeeks.org/interesting-method-generate-binary-numbers-1-n/" },
        { id: 17, title: "Score Of String", difficulty: "medium", readLink: "https://leetcode.com/problems/score-of-parentheses/" },
        { id: 18, title: "Remove K digits From number", difficulty: "medium", readLink: "https://leetcode.com/problems/remove-k-digits/" },
        { id: 19, title: "Car fleet", difficulty: "medium", readLink: "https://leetcode.com/problems/car-fleet/" },
        { id: 20, title: "First negative Integer in k sized window", difficulty: "medium", readLink: "https://www.geeksforgeeks.org/first-negative-integer-every-window-size-k/" },
        { id: 21, title: "Addition", difficulty: "medium", readLink: "https://www.codechef.com/DEC19A/problems/BINADD" },
        { id: 22, title: "Gas Station", difficulty: "medium", readLink: "https://leetcode.com/problems/gas-station/" },
        { id: 23, title: "Maximum sum of smallest and second smallest", difficulty: "medium", readLink: "https://www.geeksforgeeks.org/maximum-sum-of-smallest-and-second-smallest-in-an-array/" },
        { id: 24, title: "Min Stack", difficulty: "medium", readLink: "https://leetcode.com/problems/min-stack/" },
        { id: 25, title: "K stacks in a single array", difficulty: "hard", readLink: "https://www.geeksforgeeks.org/efficiently-implement-k-stacks-single-array/" },
        { id: 26, title: "Validate Stack", difficulty: "medium", readLink: "https://leetcode.com/problems/validate-stack-sequences/" },
        { id: 27, title: "K reverse in a queue", difficulty: "medium", readLink: "https://www.geeksforgeeks.org/reversing-first-k-elements-queue/" },
        { id: 28, title: "Largest Pair sum in unsorted array", difficulty: "medium", readLink: "https://www.geeksforgeeks.org/find-the-largest-pair-sum-in-an-unsorted-array/" }
    ],
    linkedlist: [
        { id: 29, title: "Reverse LinkedList", difficulty: "easy", readLink: "https://leetcode.com/problems/reverse-linked-list/" },
        { id: 30, title: "K reverse", difficulty: "medium", readLink: "https://www.geeksforgeeks.org/reverse-a-list-in-groups-of-given-size/" },
        { id: 31, title: "Floyd cycle", difficulty: "medium", readLink: "https://www.geeksforgeeks.org/detect-loop-in-a-linked-list/" },
        { id: 32, title: "Merge LinkedList", difficulty: "medium", readLink: "https://www.geeksforgeeks.org/merge-a-linked-list-into-another-linked-list-at-alternate-positions/" },
        { id: 33, title: "Clone a linkedlist", difficulty: "medium", readLink: "https://www.geeksforgeeks.org/a-linked-list-with-next-and-arbit-pointer/" },
        { id: 34, title: "Find modular node", difficulty: "medium", readLink: "https://www.geeksforgeeks.org/find-modular-node-linked-list/" },
        { id: 35, title: "Remove duplicate from sorted", difficulty: "easy", readLink: "https://www.geeksforgeeks.org/remove-duplicates-from-a-sorted-linked-list/" },
        { id: 36, title: "Find the middle element", difficulty: "easy", readLink: "https://www.geeksforgeeks.org/write-a-c-function-to-print-the-middle-of-the-linked-list/" },
        { id: 37, title: "Nth element from end", difficulty: "medium", readLink: "https://www.geeksforgeeks.org/nth-node-from-the-end-of-a-linked-list/" },
        { id: 38, title: "LRU Cache", difficulty: "medium", readLink: "https://leetcode.com/problems/lru-cache/" }
    ],
    binarytree: [
        { id: 39, title: "Inorder Traversal", difficulty: "easy", readLink: "https://leetcode.com/problems/binary-tree-inorder-traversal/" },
        { id: 40, title: "Preorder Traversal", difficulty: "easy", readLink: "https://leetcode.com/problems/binary-tree-preorder-traversal/" },
        { id: 41, title: "Postorder Traversal", difficulty: "easy", readLink: "https://leetcode.com/problems/binary-tree-postorder-traversal/" },
        { id: 42, title: "Print ancestor of given tree", difficulty: "medium", readLink: "https://www.geeksforgeeks.org/print-ancestors-of-a-given-node-in-binary-tree/" },
        { id: 43, title: "Binary Tree Level Order", difficulty: "medium", readLink: "https://leetcode.com/problems/binary-tree-level-order-traversal/" },
        { id: 44, title: "Average of levels", difficulty: "medium", readLink: "https://leetcode.com/problems/average-of-levels-in-binary-tree/" },
        { id: 45, title: "All Nodes at distance K", difficulty: "medium", readLink: "https://leetcode.com/problems/all-nodes-distance-k-in-binary-tree/" },
        { id: 46, title: "Count bst in a given range", difficulty: "medium", readLink: "https://www.geeksforgeeks.org/count-bst-nodes-that-are-in-a-given-range/" },
        { id: 47, title: "Binary search tree to greater sum", difficulty: "medium", readLink: "https://leetcode.com/problems/binary-search-tree-to-greater-sum-tree/" },
        { id: 48, title: "Binary Tree Cameras", difficulty: "medium", readLink: "https://leetcode.com/problems/binary-tree-cameras/" },
        { id: 49, title: "Binary Tree Maximum Path Sum", difficulty: "hard", readLink: "https://leetcode.com/problems/binary-tree-maximum-path-sum/" },
        { id: 50, title: "Binary Tree to BST", difficulty: "medium", readLink: "https://practice.geeksforgeeks.org/problems/binary-tree-to-bst/1" },
        { id: 51, title: "Right side view", difficulty: "medium", readLink: "https://leetcode.com/problems/binary-tree-right-side-view/" },
        { id: 52, title: "Left View", difficulty: "medium", readLink: "https://practice.geeksforgeeks.org/problems/left-view-of-binary-tree/1" },
        { id: 53, title: "Vertical order", difficulty: "medium", readLink: "https://leetcode.com/problems/vertical-order-traversal-of-a-binary-tree/" },
        { id: 54, title: "Top View", difficulty: "medium", readLink: "https://www.geeksforgeeks.org/print-nodes-in-the-top-view-of-binary-tree-set-3/" },
        { id: 55, title: "Bottom View", difficulty: "medium", readLink: "https://practice.geeksforgeeks.org/problems/bottom-view-of-binary-tree/1" },
        { id: 56, title: "Diagonal Traversal", difficulty: "medium", readLink: "https://www.geeksforgeeks.org/diagonal-traversal-of-binary-tree/" },
        { id: 57, title: "Leftmost and rightmost node", difficulty: "medium", readLink: "https://practice.geeksforgeeks.org/problems/leftmost-and-rightmost-nodes-of-binary-tree/1" },
        { id: 58, title: "Kth smallest element", difficulty: "medium", readLink: "https://leetcode.com/problems/kth-smallest-element-in-a-bst/" },
        { id: 59, title: "Binary Tree Tilt", difficulty: "medium", readLink: "https://leetcode.com/problems/binary-tree-tilt/" },
        { id: 60, title: "Print all nodes that dont have siblings", difficulty: "medium", readLink: "https://www.geeksforgeeks.org/print-nodes-dont-sibling-binary-tree/" },
        { id: 61, title: "House robber 3", difficulty: "medium", readLink: "https://leetcode.com/problems/house-robber-iii/" },
        { id: 62, title: "Boundary Traversal", difficulty: "medium", readLink: "https://leetcode.com/problems/boundary-of-binary-tree/" }
    ],
    bst: [
        { id: 63, title: "Lowest common ancestor in BST", difficulty: "medium", readLink: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/" },
        { id: 64, title: "Lowest common ancestor", difficulty: "medium", readLink: "https://practice.geeksforgeeks.org/problems/lowest-common-ancestor-in-a-binary-tree/1" },
        { id: 65, title: "Square root decomposition", difficulty: "hard", readLink: "https://www.spoj.com/problems/RMQSQ/" },
        { id: 66, title: "Delete Node in BST", difficulty: "medium", readLink: "https://leetcode.com/problems/delete-node-in-a-bst/" },
        { id: 67, title: "Construct from inorder and preorder", difficulty: "medium", readLink: "https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/" },
        { id: 68, title: "Construct from inorder and postorder", difficulty: "medium", readLink: "https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/" },
        { id: 69, title: "Construct bst using postorder", difficulty: "medium", readLink: "https://www.geeksforgeeks.org/construct-a-binary-search-tree-from-given-postorder/" },
        { id: 70, title: "Inorder and level order", difficulty: "medium", readLink: "https://www.geeksforgeeks.org/construct-tree-inorder-level-order-traversals/" },
        { id: 71, title: "Serialize and deserialise", difficulty: "medium", readLink: "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/" },
        { id: 72, title: "Distribute coins in a binary tree", difficulty: "medium", readLink: "https://leetcode.com/problems/distribute-coins-in-binary-tree/" },
        { id: 73, title: "Duplicate subtree in a binary tree", difficulty: "medium", readLink: "https://leetcode.com/problems/find-duplicate-subtrees/" }
    ],
    mixedtree: [
        { id: 74, title: "AVL tree", difficulty: "hard", readLink: "https://www.geeksforgeeks.org/avl-tree-set-1-insertion/" },
        { id: 75, title: "Image multiplication", difficulty: "medium", readLink: "https://practice.geeksforgeeks.org/problems/image-multiplication/0" },
        { id: 76, title: "Binary TREE longest consecutive sequence", difficulty: "medium", readLink: "https://leetcode.com/problems/binary-tree-longest-consecutive-sequence/" },
        { id: 77, title: "Diameter of a tree", difficulty: "medium", readLink: "https://www.geeksforgeeks.org/diameter-tree-using-dfs/" },
        { id: 78, title: "Kth smallest element of BST", difficulty: "medium", readLink: "https://www.geeksforgeeks.org/kth-smallest-element-in-bst-using-o1-extra-space/" },
        { id: 79, title: "Clone a binary tree with random pointer", difficulty: "medium", readLink: "https://www.geeksforgeeks.org/clone-binary-tree-random-pointers/" },
        { id: 80, title: "Flatten binary tree to linked list", difficulty: "medium", readLink: "https://leetcode.com/problems/flatten-binary-tree-to-linked-list/" },
        { id: 81, title: "Convert a binary tree to circular doubly linked list", difficulty: "medium", readLink: "https://www.geeksforgeeks.org/convert-a-binary-tree-to-a-circular-doubly-link-list/" },
        { id: 82, title: "Conversion of sorted DLL to BST", difficulty: "medium", readLink: "https://www.geeksforgeeks.org/in-place-conversion-of-sorted-dll-to-balanced-bst/" },
        { id: 83, title: "Merge Two BST", difficulty: "medium", readLink: "https://www.geeksforgeeks.org/merge-two-balanced-binary-search-trees/" },
        { id: 84, title: "Pair violating BST property", difficulty: "medium", readLink: "https://www.geeksforgeeks.org/count-of-pairs-violating-bst-property/" },
        { id: 85, title: "Flip binary tree to match preorder", difficulty: "medium", readLink: "https://leetcode.com/problems/flip-binary-tree-to-match-preorder-traversal/" },
        { id: 86, title: "Inorder successor", difficulty: "medium", readLink: "https://leetcode.com/problems/inorder-successor-in-bst/" },
        { id: 87, title: "Rabbits in forest", difficulty: "medium", readLink: "https://leetcode.com/problems/rabbits-in-forest/" }
    ],
    arraystring: [
        { id: 88, title: "Array of doubled Pair", difficulty: "medium", readLink: "https://leetcode.com/problems/array-of-doubled-pairs/" },
        { id: 89, title: "Find smallest size of string containing all char of other", difficulty: "hard", readLink: "https://www.geeksforgeeks.org/find-the-smallest-window-in-a-string-containing-all-characters-of-another-string/" },
        { id: 90, title: "Longest consecutive 1's", difficulty: "medium", readLink: "https://www.geeksforgeeks.org/maximum-consecutive-ones-or-zeros-in-a-binary-array/" },
        { id: 91, title: "Number of subarrays sum exactly k", difficulty: "medium", readLink: "https://leetcode.com/problems/subarray-sum-equals-k/" },
        { id: 92, title: "Subarray sum Divisible by k", difficulty: "medium", readLink: "https://www.geeksforgeeks.org/count-sub-arrays-sum-divisible-k/" },
        { id: 93, title: "Longest substring with unique character", difficulty: "medium", readLink: "https://www.geeksforgeeks.org/length-of-the-longest-substring-without-repeating-characters/" },
        { id: 94, title: "Subarray with equal number of 0 and 1", difficulty: "medium", readLink: "https://www.geeksforgeeks.org/count-subarrays-equal-number-1s-0s/" },
        { id: 95, title: "Substring with equal 0 1 and 2", difficulty: "medium", readLink: "https://www.geeksforgeeks.org/substring-equal-number-0-1-2/" },
        { id: 96, title: "Same frequency after one removal", difficulty: "medium", readLink: "https://www.geeksforgeeks.org/check-if-frequency-of-all-characters-can-become-same-by-one-removal/" },
        { id: 97, title: "K closest point from origin", difficulty: "medium", readLink: "https://leetcode.com/problems/k-closest-points-to-origin/" },
        { id: 98, title: "Anagram Palindrome", difficulty: "medium", readLink: "https://www.geeksforgeeks.org/check-anagram-string-palindrome-not/" },
        { id: 99, title: "Minimum number of refueling spots", difficulty: "hard", readLink: "https://leetcode.com/problems/minimum-number-of-refueling-stops/" },
        { id: 100, title: "Find all anagrams in a string", difficulty: "medium", readLink: "https://leetcode.com/problems/find-all-anagrams-in-a-string/" },
        { id: 101, title: "K anagram", difficulty: "medium", readLink: "https://www.geeksforgeeks.org/check-two-strings-k-anagrams-not/" },
        { id: 102, title: "Smallest number whose digit mult to given no.", difficulty: "medium", readLink: "https://www.geeksforgeeks.org/find-smallest-number-whose-digits-multiply-given-number-n/" },
        { id: 103, title: "Group anagram", difficulty: "medium", readLink: "https://leetcode.com/problems/group-anagrams/" },
        { id: 104, title: "Huffman coding", difficulty: "hard", readLink: "https://www.geeksforgeeks.org/huffman-coding-greedy-algo-3/" },
        { id: 105, title: "Isomorphic string", difficulty: "medium", readLink: "https://leetcode.com/problems/isomorphic-strings/" },
        { id: 106, title: "Check AP sequence", difficulty: "medium", readLink: "https://www.geeksforgeeks.org/check-whether-arithmetic-progression-can-formed-given-array/" },
        { id: 107, title: "Count Pair whose sum is divisible by k", difficulty: "medium", readLink: "https://www.geeksforgeeks.org/count-pairs-in-array-whose-sum-is-divisible-by-k/" },
        { id: 108, title: "Smallest subarray with all the occurence of MFE", difficulty: "medium", readLink: "https://www.geeksforgeeks.org/smallest-subarray-with-all-occurrences-of-a-most-frequent-element/" },
        { id: 109, title: "Morning Assembly", difficulty: "medium", readLink: "https://practice.geeksforgeeks.org/problems/morning-assembly/0" },
        { id: 110, title: "Kth smallest element in sorted 2d matrix", difficulty: "medium", readLink: "https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/" },
        { id: 111, title: "Kth smallest prime fraction", difficulty: "medium", readLink: "https://leetcode.com/problems/k-th-smallest-prime-fraction/" },
        { id: 112, title: "Max points on a line", difficulty: "hard", readLink: "https://leetcode.com/problems/max-points-on-a-line/" },
        { id: 113, title: "Brick wall", difficulty: "medium", readLink: "https://leetcode.com/problems/brick-wall/" },
        { id: 114, title: "Array Pair sum divisibility", difficulty: "medium", readLink: "https://practice.geeksforgeeks.org/problems/array-pair-sum-divisibility-problem/0" },
        { id: 115, title: "A simple fraction", difficulty: "medium", readLink: "https://practice.geeksforgeeks.org/problems/a-simple-fraction/0" },
        { id: 116, title: "Grid illumination", difficulty: "hard", readLink: "https://leetcode.com/problems/grid-illumination/" },
        { id: 117, title: "Insert Delete GetRandom O(1)", difficulty: "medium", readLink: "https://leetcode.com/problems/insert-delete-getrandom-o1/" },
        { id: 118, title: "Count of substring with k 1", difficulty: "medium", readLink: "https://www.geeksforgeeks.org/count-substrings-binary-string-containing-k-ones/" },
        { id: 119, title: "Incomplete array", difficulty: "medium", readLink: "https://practice.geeksforgeeks.org/problems/incomplete-array/0" },
        { id: 120, title: "Long Pressed Name", difficulty: "medium", readLink: "https://leetcode.com/problems/long-pressed-name" },
        { id: 121, title: "Range Addition", difficulty: "medium", readLink: "https://leetcode.com/problems/range-addition" },
        { id: 122, title: "Max range query", difficulty: "medium", readLink: "https://www.codechef.com/COOK103B/problems/MAXREMOV" },
        { id: 123, title: "Magic Squares In Grid", difficulty: "medium", readLink: "https://leetcode.com/problems/magic-squares-in-grid" },
        { id: 124, title: "Next Greater Element III", difficulty: "medium", readLink: "https://leetcode.com/problems/next-greater-element-iii" },
        { id: 125, title: "Orderly Queue", difficulty: "medium", readLink: "https://leetcode.com/problems/orderly-queue" },
        { id: 126, title: "Maximum subarray", difficulty: "medium", readLink: "https://leetcode.com/problems/maximum-subarray/" },
        { id: 127, title: "K-CON", difficulty: "medium", readLink: "https://www.codechef.com/JAN18/problems/KCON" },
        { id: 128, title: "Rotate Array", difficulty: "medium", readLink: "https://leetcode.com/problems/rotate-array" },
        { id: 129, title: "Remove Duplicates from Sorted Array", difficulty: "medium", readLink: "https://leetcode.com/problems/remove-duplicates-from-sorted-array" },
        { id: 130, title: "X of akind in a deck", difficulty: "medium", readLink: "https://leetcode.com/problems/x-of-a-kind-in-a-deck-of-cards/" },
        { id: 131, title: "Merge k sorted array", difficulty: "medium", readLink: "https://practice.geeksforgeeks.org/problems/merge-k-sorted-arrays/1" },
        { id: 132, title: "Kth smallest after removing natural numbers", difficulty: "medium", readLink: "https://www.geeksforgeeks.org/k-th-smallest-element-removing-integers-natural-numbers/" },
        { id: 133, title: "Rearrange character string such that no two are same", difficulty: "medium", readLink: "https://www.geeksforgeeks.org/rearrange-characters-string-no-two-adjacent/" },
        { id: 134, title: "Longest consecutive sequence", difficulty: "medium", readLink: "https://leetcode.com/problems/longest-consecutive-sequence/" },
        { id: 135, title: "Length of largest subarray with continuous element", difficulty: "medium", readLink: "https://www.geeksforgeeks.org/length-largest-subarray-contiguous-elements-set-2/" },
        { id: 136, title: "Length of largest subarray with cont element 2", difficulty: "medium", readLink: "https://www.geeksforgeeks.org/length-largest-subarray-contiguous-elements-set-2/" },
        { id: 137, title: "Anagram mapping", difficulty: "medium", readLink: "https://leetcode.com/problems/find-anagram-mappings/" },
        { id: 138, title: "Employee Free time", difficulty: "medium", readLink: "https://leetcode.com/problems/employee-free-time/" },
        { id: 139, title: "Line reflection", difficulty: "medium", readLink: "https://leetcode.com/problems/line-reflection/" }
    ],
    heap: [
        { id: 140, title: "Binary heap", difficulty: "medium", readLink: "https://www.geeksforgeeks.org/binary-heap/" },
        { id: 141, title: "Build heap from array", difficulty: "medium", readLink: "https://www.geeksforgeeks.org/building-heap-from-array/" },
        { id: 142, title: "Island perimeter", difficulty: "medium", readLink: "https://leetcode.com/problems/island-perimeter/" },
        { id: 143, title: "Skyline problem", difficulty: "hard", readLink: "https://leetcode.com/problems/the-skyline-problem/" },
        { id: 144, title: "Pairs of coinciding points", difficulty: "medium", readLink: "https://practice.geeksforgeeks.org/problems/pairs-of-non-coinciding-points/0" },
        { id: 145, title: "Trapping rain water", difficulty: "hard", readLink: "https://leetcode.com/problems/trapping-rain-water/" },
        { id: 146, title: "Trapping Rain Water II", difficulty: "hard", readLink: "https://leetcode.com/problems/trapping-rain-water-ii" },
        { id: 147, title: "Sort a nearly sorted array", difficulty: "medium", readLink: "https://www.geeksforgeeks.org/nearly-sorted-algorithm/" },
        { id: 148, title: "Bulb switcher", difficulty: "medium", readLink: "https://leetcode.com/problems/bulb-switcher/" },
        { id: 149, title: "Max frequency stack", difficulty: "hard", readLink: "https://leetcode.com/problems/maximum-frequency-stack/" },
        { id: 150, title: "Sliding window maximum", difficulty: "hard", readLink: "https://leetcode.com/problems/sliding-window-maximum/" },
        { id: 151, title: "Swim in rising water", difficulty: "hard", readLink: "https://leetcode.com/problems/swim-in-rising-water/" },
        { id: 152, title: "Heap sort", difficulty: "medium", readLink: "https://www.geeksforgeeks.org/heap-sort/" },
        { id: 153, title: "Product of Array Except Self", difficulty: "medium", readLink: "https://leetcode.com/problems/product-of-array-except-self" },
        { id: 154, title: "K empty slots", difficulty: "medium", readLink: "https://leetcode.com/problems/k-empty-slots/" }
    ],
    mathematics: [
        { id: 155, title: "Sieve of Eratosthenes", difficulty: "medium", readLink: "https://www.geeksforgeeks.org/sieve-of-eratosthenes/" },
        { id: 156, title: "Segmented sieve", difficulty: "hard", readLink: "https://www.spoj.com/problems/PRIME1/cstart=10" },
        { id: 157, title: "Squares of a Sorted Array", difficulty: "medium", readLink: "https://leetcode.com/problems/squares-of-a-sorted-array" },
        { id: 158, title: "Fast Exponentiation", difficulty: "medium", readLink: "https://www.geeksforgeeks.org/exponential-squaring-fast-modulo-multiplication/" },
        { id: 159, title: "Fibonacci Number", difficulty: "medium", readLink: "https://leetcode.com/problems/fibonacci-number" },
        { id: 160, title: "Container With Most Water", difficulty: "medium", readLink: "https://leetcode.com/problems/container-with-most-water" }
    ],
    searchingsorting: [
        { id: 161, title: "Segregate 0 and 1", difficulty: "medium", readLink: "https://www.geeksforgeeks.org/segregate-0s-and-1s-in-an-array-by-traversing-array-once/" },
        { id: 162, title: "Segregate 0-1-2", difficulty: "medium", readLink: "https://www.geeksforgeeks.org/sort-an-array-of-0s-1s-and-2s/" },
        { id: 163, title: "Sort Array By Parity", difficulty: "medium", readLink: "https://leetcode.com/problems/sort-array-by-parity" },
        { id: 164, title: "Min Jump required with +i or -i allowed", difficulty: "medium", readLink: "https://www.geeksforgeeks.org/find-the-number-of-jumps-to-reach-x-in-the-number-line-from-zero/" },
        { id: 165, title: "Max chunks to make sorted", difficulty: "medium", readLink: "https://leetcode.com/problems/max-chunks-to-make-sorted/" },
        { id: 166, title: "Max Chunks To Make Sorted II", difficulty: "medium", readLink: "https://leetcode.com/problems/max-chunks-to-make-sorted-ii" },
        { id: 167, title: "Two Sum", difficulty: "medium", readLink: "https://www.geeksforgeeks.org/given-an-array-a-and-a-number-x-check-for-pair-in-a-with-sum-as-x/" },
        { id: 168, title: "Two Difference", difficulty: "medium", readLink: "https://www.geeksforgeeks.org/find-a-pair-with-the-given-difference/" },
        { id: 169, title: "LPS", difficulty: "medium", readLink: "https://www.geeksforgeeks.org/longest-prefix-also-suffix/" },
        { id: 170, title: "Shortest Palindrome", difficulty: "medium", readLink: "https://leetcode.com/problems/shortest-palindrome" },
        { id: 171, title: "Boats to Save People", difficulty: "medium", readLink: "https://leetcode.com/problems/boats-to-save-people" },
        { id: 172, title: "Min No. of Platform", difficulty: "medium", readLink: "https://www.geeksforgeeks.org/minimum-number-platforms-required-railwaybus-station/" },
        { id: 173, title: "Maximum Swap", difficulty: "medium", readLink: "https://leetcode.com/problems/maximum-swap" },
        { id: 174, title: "Optimal Division", difficulty: "medium", readLink: "https://leetcode.com/problems/optimal-division" },
        { id: 175, title: "Max Consecutive Ones II", difficulty: "medium", readLink: "https://leetcode.com/problems/max-consecutive-ones-ii" },
        { id: 176, title: "Max consecutive ones 3", difficulty: "medium", readLink: "https://leetcode.com/problems/max-consecutive-ones-iii/" },
        { id: 177, title: "Majority element", difficulty: "medium", readLink: "https://leetcode.com/problems/majority-element/" },
        { id: 178, title: "Majority element 2", difficulty: "medium", readLink: "https://leetcode.com/problems/majority-element-ii/" },
        { id: 179, title: "Majority element general", difficulty: "medium", readLink: "http://geeksforgeeks.org/given-an-array-of-of-size-n-finds-all-the-elements-that-appear-more-than-nk-times/" },
        { id: 180, title: "Reverse vowels of a string", difficulty: "medium", readLink: "https://leetcode.com/problems/reverse-vowels-of-a-string/" },
        { id: 181, title: "First missing positive", difficulty: "medium", readLink: "https://leetcode.com/problems/first-missing-positive/" },
        { id: 182, title: "Push dominoes", difficulty: "medium", readLink: "https://leetcode.com/problems/push-dominoes/" },
        { id: 183, title: "Moving stones until consecutive 2", difficulty: "medium", readLink: "https://leetcode.com/problems/moving-stones-until-consecutive-ii/" },
        { id: 184, title: "Max product of 3 numbers", difficulty: "medium", readLink: "https://leetcode.com/problems/maximum-product-of-three-numbers/" },
        { id: 185, title: "Largest number atleast twice of others", difficulty: "medium", readLink: "https://leetcode.com/problems/largest-number-at-least-twice-of-others/" },
        { id: 186, title: "Maximum product subarray", difficulty: "medium", readLink: "https://leetcode.com/problems/maximum-product-subarray/" },
        { id: 187, title: "Rotate image", difficulty: "medium", readLink: "https://leetcode.com/problems/rotate-image/" },
        { id: 188, title: "Number of subarrays with bounded maximum", difficulty: "medium", readLink: "https://leetcode.com/problems/number-of-subarrays-with-bounded-maximum/" },
        { id: 189, title: "Partition labels", difficulty: "medium", readLink: "https://leetcode.com/problems/partition-labels/" },
        { id: 190, title: "Global and local inversions", difficulty: "medium", readLink: "https://leetcode.com/problems/global-and-local-inversions/" },
        { id: 191, title: "Partition array into disjoint intervals", difficulty: "medium", readLink: "https://leetcode.com/problems/partition-array-into-disjoint-intervals/" },
        { id: 192, title: "Valid palindrome 2", difficulty: "medium", readLink: "https://leetcode.com/problems/valid-palindrome-ii/" },
        { id: 193, title: "Consecutive number sum", difficulty: "medium", readLink: "https://leetcode.com/problems/consecutive-numbers-sum/" },
        { id: 194, title: "Minimum domino rotation for equal row", difficulty: "medium", readLink: "https://leetcode.com/problems/minimum-domino-rotations-for-equal-row/" },
        { id: 195, title: "Multiply strings", difficulty: "medium", readLink: "https://leetcode.com/problems/multiply-strings/" },
        { id: 196, title: "Smallest range from k lists", difficulty: "medium", readLink: "https://leetcode.com/problems/smallest-range-covering-elements-from-k-lists/" },
        { id: 197, title: "Pascal triangle 2", difficulty: "medium", readLink: "https://leetcode.com/problems/pascals-triangle-ii/" },
        { id: 198, title: "Max sum of two non overlapping subarrays", difficulty: "medium", readLink: "https://leetcode.com/problems/maximum-sum-of-two-non-overlapping-subarrays/" },
        { id: 199, title: "Maximize distance to closest person", difficulty: "medium", readLink: "https://leetcode.com/problems/maximize-distance-to-closest-person/" },
        { id: 200, title: "Subarrays with k different integers", difficulty: "medium", readLink: "https://leetcode.com/problems/subarrays-with-k-different-integers/" },
        { id: 201, title: "Icing on cake", difficulty: "medium", readLink: "https://www.codechef.com/problems/IOC" },
        { id: 202, title: "Search in rotated sorted array", difficulty: "medium", readLink: "https://leetcode.com/problems/search-in-rotated-sorted-array/" },
        { id: 203, title: "Split array largest sum", difficulty: "medium", readLink: "https://leetcode.com/problems/split-array-largest-sum/" },
        { id: 204, title: "Counting sort", difficulty: "medium", readLink: "https://www.geeksforgeeks.org/counting-sort/" },
        { id: 205, title: "Capacity to ship within D days", difficulty: "medium", readLink: "https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/" },
        { id: 206, title: "Insertion sort", difficulty: "medium", readLink: "https://www.geeksforgeeks.org/insertion-sort/" },
        { id: 207, title: "Koko eating bananas", difficulty: "medium", readLink: "https://leetcode.com/problems/koko-eating-bananas/" },
        { id: 208, title: "Median of two sorted array", difficulty: "hard", readLink: "https://leetcode.com/problems/median-of-two-sorted-arrays/" },
        { id: 209, title: "Merge sort", difficulty: "medium", readLink: "https://www.geeksforgeeks.org/merge-sort/" },
        { id: 210, title: "Smallest divisor given a threshold", difficulty: "medium", readLink: "https://leetcode.com/problems/find-the-smallest-divisor-given-a-threshold/" },
        { id: 211, title: "Wiggle sort", difficulty: "medium", readLink: "https://leetcode.com/problems/wiggle-sort/" },
        { id: 212, title: "Best meeting points", difficulty: "medium", readLink: "https://leetcode.com/problems/best-meeting-point/" }
    ],
    graph: [
        { id: 213, title: "BFS of graph", difficulty: "medium", readLink: "https://practice.geeksforgeeks.org/problems/bfs-traversal-of-graph/1" },
        { id: 214, title: "Bipartite graph", difficulty: "medium", readLink: "https://leetcode.com/problems/is-graph-bipartite/" },
        { id: 215, title: "DFS", difficulty: "medium", readLink: "https://practice.geeksforgeeks.org/problems/depth-first-traversal-for-a-graph/1" },
        { id: 216, title: "Detect cycle in undirected graph", difficulty: "medium", readLink: "https://www.geeksforgeeks.org/detect-cycle-undirected-graph/" },
        { id: 217, title: "Prim's Algo", difficulty: "hard", readLink: "https://www.spoj.com/problems/MST/" },
        { id: 218, title: "Dijkstra algo", difficulty: "hard", readLink: "https://www.geeksforgeeks.org/dijkstras-shortest-path-algorithm-greedy-algo-7/" },
        { id: 219, title: "Chef and reversing", difficulty: "hard", readLink: "https://www.codechef.com/problems/REVERSE" },
        { id: 220, title: "Bus routes", difficulty: "hard", readLink: "https://leetcode.com/problems/bus-routes/" },
        { id: 221, title: "Evaluate division", difficulty: "medium", readLink: "https://leetcode.com/problems/evaluate-division/" },
        { id: 222, title: "Topological sorting", difficulty: "medium", readLink: "https://www.geeksforgeeks.org/topological-sorting/" },
        { id: 223, title: "Kahn's algo", difficulty: "medium", readLink: "https://www.geeksforgeeks.org/topological-sorting-indegree-based-solution/" },
        { id: 224, title: "Course schedule 2", difficulty: "medium", readLink: "https://leetcode.com/problems/course-schedule-ii/" },
        { id: 225, title: "Strongly Connected Components (Kosaraju's Algo)", difficulty: "hard", readLink: "https://practice.geeksforgeeks.org/problems/strongly-connected-components-kosarajus-algo/1" },
        { id: 226, title: "Mother Vertex", difficulty: "medium", readLink: "https://practice.geeksforgeeks.org/problems/mother-vertex/1" },
        { id: 227, title: "Rotting Oranges", difficulty: "medium", readLink: "https://leetcode.com/problems/rotting-oranges" },
        { id: 228, title: "Bellman ford", difficulty: "hard", readLink: "https://www.geeksforgeeks.org/bellman-ford-algorithm-dp-23/" },
        { id: 229, title: "Number of Islands", difficulty: "medium", readLink: "https://leetcode.com/problems/number-of-islands" },
        { id: 230, title: "DSU", difficulty: "medium", readLink: "https://www.geeksforgeeks.org/disjoint-set-data-structures/" },
        { id: 231, title: "Number of Enclaves", difficulty: "medium", readLink: "https://leetcode.com/problems/number-of-enclaves" },
        { id: 232, title: "Most Stones Removed with Same Row or Column", difficulty: "medium", readLink: "https://leetcode.com/problems/most-stones-removed-with-same-row-or-column" },
        { id: 233, title: "Regions Cut By Slashes", difficulty: "hard", readLink: "https://leetcode.com/problems/regions-cut-by-slashes" },
        { id: 234, title: "Kruskal's algo", difficulty: "hard", readLink: "https://www.geeksforgeeks.org/kruskals-minimum-spanning-tree-algorithm-greedy-algo-2/" },
        { id: 235, title: "Articulation point", difficulty: "hard", readLink: "https://www.geeksforgeeks.org/articulation-points-or-cut-vertices-in-a-graph/" },
        { id: 236, title: "Doctor Strange", difficulty: "hard", readLink: "https://practice.geeksforgeeks.org/problems/doctor-strange/0" },
        { id: 237, title: "Satisfiability of Equality Equations", difficulty: "medium", readLink: "https://leetcode.com/problems/satisfiability-of-equality-equations" },
        { id: 238, title: "0-1 matrix", difficulty: "medium", readLink: "https://leetcode.com/problems/01-matrix/" },
        { id: 239, title: "Word Ladder", difficulty: "hard", readLink: "https://leetcode.com/problems/word-ladder" },
        { id: 240, title: "Job Sequencing", difficulty: "medium", readLink: "https://www.geeksforgeeks.org/job-sequencing-problem/" },
        { id: 241, title: "Eulerian Path in an Undirected Graph", difficulty: "hard", readLink: "https://practice.geeksforgeeks.org/problems/eulerian-path-in-an-undirected-graph/0" },
        { id: 242, title: "Euler Circuit in a Directed Graph", difficulty: "hard", readLink: "https://practice.geeksforgeeks.org/problems/euler-circuit-in-a-directed-graph/1" },
        { id: 243, title: "Castle RUN", difficulty: "hard", readLink: "https://practice.geeksforgeeks.org/problems/castle-run/0" },
        { id: 244, title: "Sentence Similarity II", difficulty: "medium", readLink: "https://leetcode.com/problems/sentence-similarity-ii" },
        { id: 245, title: "Number of Distinct Islands", difficulty: "medium", readLink: "https://leetcode.com/problems/number-of-distinct-islands" },
        { id: 246, title: "Number of Islands II", difficulty: "hard", readLink: "https://leetcode.com/problems/number-of-islands-ii" },
        { id: 247, title: "Parallel courses", difficulty: "medium", readLink: "https://leetcode.com/problems/parallel-courses/" },
        { id: 248, title: "Optimize water distribution in village", difficulty: "hard", readLink: "https://leetcode.com/problems/optimize-water-distribution-in-a-village/" },
        { id: 249, title: "Connecting cities with minimum cost", difficulty: "medium", readLink: "https://leetcode.com/problems/connecting-cities-with-minimum-cost/" }
    ],
    dp: [
        { id: 250, title: "Minimize Malware Spread", difficulty: "medium", readLink: "https://leetcode.com/problems/minimize-malware-spread" },
        { id: 251, title: "Climbing stairs", difficulty: "medium", readLink: "https://leetcode.com/problems/climbing-stairs/" },
        { id: 252, title: "Jump game 2", difficulty: "medium", readLink: "https://leetcode.com/problems/jump-game-ii/" },
        { id: 253, title: "Min cost path", difficulty: "medium", readLink: "https://leetcode.com/problems/minimum-path-sum/" },
        { id: 254, title: "Max size subsquare with all 1", difficulty: "hard", readLink: "https://www.geeksforgeeks.org/maximum-size-sub-matrix-with-all-1s-in-a-binary-matrix/" },
        { id: 255, title: "0-1 Knapsack", difficulty: "medium", readLink: "https://www.geeksforgeeks.org/0-1-knapsack-problem-dp-10/" },
        { id: 256, title: "Fractional knapsack", difficulty: "medium", readLink: "https://www.geeksforgeeks.org/fractional-knapsack-problem/" },
        { id: 257, title: "Longest increasing subsequence", difficulty: "medium", readLink: "https://leetcode.com/problems/longest-increasing-subsequence/" },
        { id: 258, title: "Minimum number of increasing subsequence", difficulty: "medium", readLink: "https://www.geeksforgeeks.org/minimum-number-of-increasing-subsequences/" },
        { id: 259, title: "Building bridges", difficulty: "medium", readLink: "https://www.geeksforgeeks.org/dynamic-programming-building-bridges/" },
        { id: 260, title: "Box stacking", difficulty: "hard", readLink: "https://www.geeksforgeeks.org/box-stacking-problem-dp-22/" },
        { id: 261, title: "Max sum alternating subsequence", difficulty: "medium", readLink: "https://www.geeksforgeeks.org/maximum-sum-alternating-subsequence-sum/" },
        { id: 262, title: "Best time to buy and sell stock", difficulty: "medium", readLink: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/" },
        { id: 263, title: "Best time to buy and sell 2", difficulty: "medium", readLink: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/" },
        { id: 264, title: "Best time to buy and sell 3", difficulty: "hard", readLink: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/" },
        { id: 265, title: "Best time to buy and sell 4", difficulty: "hard", readLink: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/" },
        { id: 266, title: "Best time to buy and sell with cool down", difficulty: "medium", readLink: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/" },
        { id: 267, title: "Buy and sell with transaction time", difficulty: "medium", readLink: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/" },
        { id: 268, title: "Ugly number", difficulty: "medium", readLink: "https://www.geeksforgeeks.org/ugly-numbers/" },
        { id: 269, title: "Super ugly number", difficulty: "medium", readLink: "https://www.geeksforgeeks.org/super-ugly-number-number-whose-prime-factors-given-set/" },
        { id: 270, title: "Domino and tromino tilling", difficulty: "medium", readLink: "https://leetcode.com/problems/domino-and-tromino-tiling/" },
        { id: 271, title: "Wildcard pattern matching", difficulty: "hard", readLink: "https://www.geeksforgeeks.org/wildcard-pattern-matching/" },
        { id: 272, title: "Regular expression matching", difficulty: "hard", readLink: "https://leetcode.com/problems/regular-expression-matching/" },
        { id: 273, title: "Count all palindromic subsequences", difficulty: "hard", readLink: "https://www.geeksforgeeks.org/count-palindromic-subsequence-given-string/" },
        { id: 274, title: "Count distinct palindromic subsequence", difficulty: "hard", readLink: "https://leetcode.com/problems/count-different-palindromic-subsequences/" },
        { id: 275, title: "Count of binary string without consecutive 1", difficulty: "medium", readLink: "https://www.geeksforgeeks.org/count-number-binary-strings-without-consecutive-1s/" },
        { id: 276, title: "Max sum with no 2 adjacent element", difficulty: "medium", readLink: "https://www.geeksforgeeks.org/maximum-sum-such-that-no-two-elements-are-adjacent/" },
        { id: 277, title: "Pizza with 3n slices", difficulty: "hard", readLink: "https://leetcode.com/problems/pizza-with-3n-slices/" },
        { id: 278, title: "LCS triplet", difficulty: "hard", readLink: "https://www.geeksforgeeks.org/lcs-longest-common-subsequence-three-strings/" },
        { id: 279, title: "Edit distance", difficulty: "hard", readLink: "https://www.geeksforgeeks.org/edit-distance-dp-5/" },
        { id: 280, title: "Frog jump", difficulty: "hard", readLink: "https://leetcode.com/problems/frog-jump/" },
        { id: 281, title: "Friends pairing problem", difficulty: "medium", readLink: "https://www.geeksforgeeks.org/friends-pairing-problem/" },
        { id: 282, title: "Partition of sets into k subsets", difficulty: "hard", readLink: "https://www.geeksforgeeks.org/count-number-of-ways-to-partition-a-set-into-k-subsets/" },
        { id: 283, title: "Can i win", difficulty: "medium", readLink: "https://www.geeksforgeeks.org/optimal-strategy-for-a-game-dp-31/" },
        { id: 284, title: "Knight probability", difficulty: "medium", readLink: "https://www.geeksforgeeks.org/probability-knight-remain-chessboard/" },
        { id: 285, title: "Temple offering", difficulty: "medium", readLink: "https://www.geeksforgeeks.org/temple-offerings/" },
        { id: 286, title: "Highway billboard problem", difficulty: "medium", readLink: "https://www.geeksforgeeks.org/highway-billboard-problem/" },
        { id: 287, title: "No. of sequence of type a^i+b^j+c^k", difficulty: "medium", readLink: "https://www.geeksforgeeks.org/number-subsequences-form-ai-bj-ck/" },
        { id: 288, title: "Boolean parenthesization", difficulty: "hard", readLink: "https://www.geeksforgeeks.org/boolean-parenthesization-problem-dp-37/" },
        { id: 289, title: "Min and max with + and *", difficulty: "hard", readLink: "https://www.geeksforgeeks.org/minimum-maximum-values-expression/" },
        { id: 290, title: "Optimal BST", difficulty: "hard", readLink: "https://www.geeksforgeeks.org/optimal-binary-search-tree-dp-24/" },
        { id: 291, title: "Find water in a glass", difficulty: "medium", readLink: "https://www.geeksforgeeks.org/find-water-in-a-glass/" },
        { id: 292, title: "Cherry pickup", difficulty: "hard", readLink: "https://leetcode.com/problems/cherry-pickup/" },
        { id: 293, title: "Arithmetic slices", difficulty: "medium", readLink: "https://leetcode.com/problems/arithmetic-slices/" },
        { id: 294, title: "Arithmetic slices 2", difficulty: "hard", readLink: "https://leetcode.com/problems/arithmetic-slices-ii-subsequence/" },
        { id: 295, title: "Largest sum subarray atleast k numbers", difficulty: "medium", readLink: "https://www.geeksforgeeks.org/largest-sum-subarray-least-k-numbers/" },
        { id: 296, title: "Maximum sum of 3 non overlapping subarrays", difficulty: "hard", readLink: "https://leetcode.com/problems/maximum-sum-of-3-non-overlapping-subarrays/" },
        { id: 297, title: "Remove min element according to constraint", difficulty: "medium", readLink: "https://www.geeksforgeeks.org/remove-minimum-elements-either-side-2min-max/" },
        { id: 298, title: "Scramble string", difficulty: "hard", readLink: "https://leetcode.com/problems/scramble-string/" },
        { id: 299, title: "Minimum score triangulation", difficulty: "hard", readLink: "https://leetcode.com/problems/minimum-score-triangulation-of-polygon/" },
        { id: 300, title: "2 keys keyboard", difficulty: "medium", readLink: "https://leetcode.com/problems/2-keys-keyboard/" },
        { id: 301, title: "4 keys keyboard", difficulty: "hard", readLink: "https://leetcode.com/articles/4-keys-keyboard/" },
        { id: 302, title: "Mobile numeric keypad", difficulty: "hard", readLink: "https://www.geeksforgeeks.org/mobile-numeric-keypad-problem/" },
        { id: 303, title: "Word break", difficulty: "medium", readLink: "https://leetcode.com/problems/word-break/" },
        { id: 304, title: "Burst balloons", difficulty: "hard", readLink: "https://leetcode.com/problems/burst-balloons/" },
        { id: 305, title: "Encode string with shortest length", difficulty: "hard", readLink: "https://evelynn.gitbooks.io/google-interview/encode-string-with-shortest-length.html" },
        { id: 306, title: "Longest repeating subsequence", difficulty: "medium", readLink: "https://www.geeksforgeeks.org/longest-repeating-subsequence/" },
        { id: 307, title: "String is k palindromic or not", difficulty: "medium", readLink: "https://www.geeksforgeeks.org/find-if-string-is-k-palindrome-or-not/" },
        { id: 308, title: "Count distinct subsequence", difficulty: "hard", readLink: "https://www.geeksforgeeks.org/count-distinct-subsequences/" },
        { id: 309, title: "Shortest uncommon subsequence", difficulty: "medium", readLink: "https://www.geeksforgeeks.org/shortest-uncommon-subsequence/" },
        { id: 310, title: "Minimal moves to form a string", difficulty: "medium", readLink: "https://www.geeksforgeeks.org/minimal-moves-form-string-adding-characters-appending-string/" },
        { id: 311, title: "Paint fence", difficulty: "medium", readLink: "https://leetcode.com/problems/paint-fence/" },
        { id: 312, title: "Paint house", difficulty: "medium", readLink: "https://leetcode.com/problems/paint-house/" },
        { id: 313, title: "Paint house 2", difficulty: "hard", readLink: "https://leetcode.com/problems/paint-house-ii/" }
    ],
    bfsdfs: [
        { id: 314, title: "Sliding Puzzle", difficulty: "hard", readLink: "https://leetcode.com/problems/sliding-puzzle" },
        { id: 315, title: "Find the Maximum Flow", difficulty: "hard", readLink: "https://practice.geeksforgeeks.org/problems/find-the-maximum-flow/0" },
        { id: 316, title: "Maximum Bipartite Matching", difficulty: "hard", readLink: "https://practice.geeksforgeeks.org/problems/maximum-bipartite-matching/1" },
        { id: 317, title: "Reconstruct Itinerary", difficulty: "medium", readLink: "https://leetcode.com/problems/reconstruct-itinerary" },
        { id: 318, title: "Redundant Connection", difficulty: "medium", readLink: "https://leetcode.com/problems/redundant-connection" },
        { id: 319, title: "Redundant connection 2", difficulty: "medium", readLink: "https://leetcode.com/problems/redundant-connection-ii/" },
        { id: 320, title: "Possible Bipartition", difficulty: "medium", readLink: "https://leetcode.com/problems/possible-bipartition" },
        { id: 321, title: "Floyd Warshall", difficulty: "hard", readLink: "https://www.geeksforgeeks.org/floyd-warshall-algorithm-dp-16/" },
        { id: 322, title: "Johnson's algorithm", difficulty: "hard", readLink: "https://www.geeksforgeeks.org/johnsons-algorithm/" },
        { id: 323, title: "Journey to the moon", difficulty: "hard", readLink: "https://www.hackerrank.com/challenges/journey-to-the-moon/problem" },
        { id: 324, title: "Sort item by group accord to dependencies", difficulty: "hard", readLink: "https://leetcode.com/problems/sort-items-by-groups-respecting-dependencies/" },
        { id: 325, title: "As far from land as possible", difficulty: "medium", readLink: "https://leetcode.com/problems/as-far-from-land-as-possible" },
        { id: 326, title: "K-Similar Strings", difficulty: "hard", readLink: "https://leetcode.com/problems/k-similar-strings" },
        { id: 327, title: "Similar String Groups", difficulty: "medium", readLink: "https://leetcode.com/problems/similar-string-groups" },
        { id: 328, title: "Coloring A Border", difficulty: "medium", readLink: "https://leetcode.com/problems/coloring-a-border" },
        { id: 329, title: "Shortest bridge", difficulty: "medium", readLink: "https://leetcode.com/problems/shortest-bridge/" },
        { id: 330, title: "Min swaps required to sort array", difficulty: "medium", readLink: "https://www.geeksforgeeks.org/minimum-number-swaps-required-sort-array/" },
        { id: 331, title: "Walls and gates", difficulty: "medium", readLink: "https://leetcode.com/problems/walls-and-gates/" },
        { id: 332, title: "The maze 2", difficulty: "medium", readLink: "https://leetcode.com/problems/the-maze-ii/" }
    ],
    textprocessing: [
        { id: 333, title: "KMP", difficulty: "hard", readLink: "https://www.spoj.com/problems/NAJPF/" },
        { id: 334, title: "Find string roots", difficulty: "hard", readLink: "https://www.spoj.com/problems/FINDSR/" },
        { id: 335, title: "Z algo", difficulty: "hard", readLink: "https://www.geeksforgeeks.org/z-algorithm-linear-time-pattern-searching-algorithm/" },
        { id: 336, title: "Chef and secret password", difficulty: "hard", readLink: "https://www.codechef.com/COOK103B/problems/SECPASS" },
        { id: 337, title: "Manacher's algo", difficulty: "hard", readLink: "https://www.geeksforgeeks.org/manachers-algorithm-linear-time-longest-palindromic-substring-part-1/" }
    ],
    numbertheory: [
        { id: 338, title: "Euclidean algorithm", difficulty: "medium", readLink: "https://www.codechef.com/problems/FLOW016" },
        { id: 339, title: "Extended Euclidean algorithm", difficulty: "hard", readLink: "https://onlinejudge.org/index.php?option=com_onlinejudge&Itemid=8&page=show_problem&problem=1045" },
        { id: 340, title: "Linear diophantine equation", difficulty: "hard", readLink: "https://www.spoj.com/problems/CEQU/" },
        { id: 341, title: "Euler's totient function", difficulty: "hard", readLink: "https://www.spoj.com/problems/ETF/" },
        { id: 342, title: "Divisors upto n", difficulty: "medium", readLink: "https://www.geeksforgeeks.org/print-divisors-n-1-n/" },
        { id: 343, title: "Fermat's little theorem", difficulty: "hard", readLink: "https://www.geeksforgeeks.org/fermats-little-theorem/" },
        { id: 344, title: "No min No max", difficulty: "hard", readLink: "https://www.codechef.com/JULY18A/problems/NMNMX" },
        { id: 345, title: "Boring factorials", difficulty: "hard", readLink: "https://www.spoj.com/problems/DCEPC11B/" },
        { id: 346, title: "FFT", difficulty: "hard", readLink: "https://www.spoj.com/problems/POLYMUL/" }
    ],
    geometry: [
        { id: 347, title: "Erect the fence", difficulty: "hard", readLink: "https://leetcode.com/problems/erect-the-fence/" }
    ],
    gametheory: [
        { id: 348, title: "5 Pirates and 100 coins", difficulty: "medium", readLink: "https://www.geeksforgeeks.org/puzzle-20-5-pirates-and-100-gold-coins/" },
        { id: 349, title: "Nim game", difficulty: "medium", readLink: "https://www.geeksforgeeks.org/combinatorial-game-theory-set-2-game-nim/" },
        { id: 350, title: "Buddy nim", difficulty: "medium", readLink: "https://www.codechef.com/SNCKPE19/problems/BUDDYNIM" }
    ]
};

// Game state
let currentMap = null;
let gameRunning = false;
let player = { 
    x: 50, 
    y: 300, 
    width: 40, 
    height: 50, 
    speed: 7,
    velocityX: 0,
    velocityY: 0,
    isJumping: false,
    isGrounded: false,
    animationFrame: 0,
    facingRight: true
};
let questionBlocks = [];
let platforms = [];
let keys = {};
let currentQuestion = null;
let gameLoop = null;
let camera = { x: 0, y: 0 };
const GRAVITY = 0.5;
const JUMP_FORCE = -12;
const FRICTION = 0.8;

// Load saved progress
function loadProgress() {
    const saved = localStorage.getItem('dsaQuestProgress');
    if (saved) {
        return JSON.parse(saved);
    }
    return {};
}

// Save progress
function saveProgress(progress) {
    localStorage.setItem('dsaQuestProgress', JSON.stringify(progress));
    updateStats();
}

// Update stats on map selection screen
function updateStats() {
    const progress = loadProgress();
    let totalStars = 0;
    let totalDone = 0;
    
    Object.keys(progress).forEach(mapKey => {
        if (progress[mapKey]) {
            progress[mapKey].forEach(q => {
                if (q.completed) {
                    totalStars++;
                    totalDone++;
                }
            });
        }
    });
    
    document.getElementById('totalStars').textContent = totalStars;
    document.getElementById('totalDone').textContent = totalDone;
}

// Initialize map selection
function initMapSelection() {
    const mapCards = document.querySelectorAll('.map-card');
    mapCards.forEach(card => {
        card.addEventListener('click', () => {
            const mapKey = card.dataset.map;
            startGame(mapKey);
        });
    });
}

// Start game for selected map
function startGame(mapKey) {
    currentMap = mapKey;
    
    // Switch screens
    document.getElementById('mapSelection').classList.add('hidden');
    document.getElementById('gameScreen').classList.remove('hidden');
    
    // Set title from theme
    document.getElementById('currentMapTitle').textContent = mapThemes[mapKey].name;
    
    // Initialize game
    initGame();
}

// Initialize game canvas and entities
function initGame() {
    const canvas = document.getElementById('gameCanvas');
    const ctx = canvas.getContext('2d');
    
    // Set canvas size - much larger for expanded map
    canvas.width = 2000;
    canvas.height = 800;
    
    // Reset player position and physics
    player.x = 50;
    player.y = canvas.height - 200;
    player.velocityX = 0;
    player.velocityY = 0;
    player.isJumping = false;
    player.isGrounded = false;
    player.animationFrame = 0;
    player.facingRight = true;
    
    // Load questions for current map
    const progress = loadProgress();
    const mapQuestions = questionsData[currentMap] || [];
    const savedQuestions = progress[currentMap] || [];
    
    // Get current theme
    const theme = mapThemes[currentMap];
    
    // Create platforms at different heights with more spacing
    platforms = [];
    const groundY = canvas.height - 80;
    
    // Ground platform
    platforms.push({
        x: 0,
        y: groundY,
        width: canvas.width,
        height: 80,
        type: 'ground'
    });
    
    // Generate floating platforms based on number of questions
    const numPlatforms = Math.min(15, Math.max(8, Math.ceil(mapQuestions.length / 3)));
    const platformWidths = [250, 200, 300, 180, 220, 280, 200, 250, 300, 180, 220, 260, 200, 280, 240];
    const platformYs = [
        groundY - 120, groundY - 220, groundY - 150,
        groundY - 280, groundY - 200, groundY - 320,
        groundY - 180, groundY - 250, groundY - 350,
        groundY - 220, groundY - 300, groundY - 180,
        groundY - 260, groundY - 330, groundY - 200
    ];
    const platformXs = [
        200, 500, 800, 1100, 1400, 1700,
        300, 700, 1100, 1500, 1800,
        400, 900, 1300, 1600
    ];
    
    for (let i = 0; i < numPlatforms; i++) {
        platforms.push({
            x: platformXs[i % platformXs.length],
            y: platformYs[i % platformYs.length],
            width: platformWidths[i % platformWidths.length],
            height: 25,
            type: 'floating'
        });
    }
    
    // Create question blocks on platforms with better spacing
    questionBlocks = [];
    const blockSize = 55;
    
    mapQuestions.forEach((q, index) => {
        const savedQ = savedQuestions.find(sq => sq.id === q.id);
        
        // Place blocks on platforms with better distribution
        const platformIndex = index % (platforms.length - 1) + 1; // Skip ground
        const platform = platforms[platformIndex];
        
        // Calculate position on platform
        const blocksOnThisPlatform = Math.ceil(mapQuestions.length / (platforms.length - 1));
        const positionOnPlatform = index % blocksOnThisPlatform;
        const availableWidth = platform.width - blockSize * 2;
        const spacing = availableWidth / (blocksOnThisPlatform + 1);
        
        questionBlocks.push({
            x: platform.x + blockSize + spacing * (positionOnPlatform + 1),
            y: platform.y - blockSize - 8,
            width: blockSize,
            height: blockSize,
            question: q,
            completed: savedQ ? savedQ.completed : false,
            notes: savedQ ? savedQ.notes : '',
            collected: false,
            cooldown: 0
        });
    });
    
    // Update map stats
    updateMapStats();
    
    // Start game loop
    gameRunning = true;
    if (gameLoop) cancelAnimationFrame(gameLoop);
    gameLoop = requestAnimationFrame(() => gameStep(ctx, canvas));
}

// Update map statistics
function updateMapStats() {
    const completed = questionBlocks.filter(qb => qb.completed).length;
    const total = questionBlocks.length;
    document.getElementById('mapStars').textContent = completed;
    document.getElementById('mapProgress').textContent = `${completed}/${total}`;
}

// Game loop
function gameStep(ctx, canvas) {
    if (!gameRunning) return;
    
    // Update camera to follow player
    camera.x = player.x - canvas.width / 3;
    camera.y = player.y - canvas.height / 2;
    
    // Clamp camera to canvas bounds
    camera.x = Math.max(0, Math.min(camera.x, 2000 - canvas.width));
    camera.y = Math.max(0, Math.min(camera.y, 800 - canvas.height));
    
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Save context for camera
    ctx.save();
    ctx.translate(-camera.x, -camera.y);
    
    // Draw background
    drawBackground(ctx, canvas);
    
    // Update player position
    updatePlayer();
    
    // Draw question blocks
    drawQuestionBlocks(ctx);
    
    // Draw player
    drawPlayer(ctx);
    
    // Check collisions
    checkCollisions();
    
    // Restore context
    ctx.restore();
    
    // Continue game loop
    gameLoop = requestAnimationFrame(() => gameStep(ctx, canvas));
}

// Draw background with theme
function drawBackground(ctx, canvas) {
    const theme = mapThemes[currentMap];
    
    // Sky
    ctx.fillStyle = theme.skyColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Draw weather effects based on theme
    drawWeatherEffects(ctx, canvas, theme.weather);
    
    // Draw clouds
    ctx.fillStyle = theme.cloudColor;
    for (let i = 0; i < 12; i++) {
        drawCloud(ctx, 150 + i * 180, 60 + (i % 3) * 80);
    }
    
    // Draw platforms with theme colors
    platforms.forEach(platform => {
        if (platform.type === 'ground') {
            // Ground with theme color
            ctx.fillStyle = theme.groundColor;
            ctx.fillRect(platform.x, platform.y, platform.width, platform.height);
            
            // Ground details
            ctx.fillStyle = adjustColor(theme.groundColor, -30);
            for (let i = 0; i < platform.width; i += 60) {
                ctx.fillRect(platform.x + i, platform.y, 40, 15);
            }
        } else {
            // Floating platform with theme color
            ctx.fillStyle = theme.platformColor;
            ctx.fillRect(platform.x, platform.y, platform.width, platform.height);
            
            // Platform pattern
            ctx.strokeStyle = adjustColor(theme.platformColor, -20);
            ctx.lineWidth = 2;
            for (let i = 0; i < platform.width; i += 50) {
                ctx.strokeRect(platform.x + i, platform.y, 50, platform.height);
            }
            
            // Platform top highlight
            ctx.fillStyle = adjustColor(theme.platformColor, 20);
            ctx.fillRect(platform.x, platform.y, platform.width, 6);
        }
    });
}

// Draw weather effects
function drawWeatherEffects(ctx, canvas, weather) {
    const time = Date.now() / 1000;
    
    switch(weather) {
        case 'rainy':
            ctx.strokeStyle = 'rgba(100, 149, 237, 0.6)';
            ctx.lineWidth = 2;
            for (let i = 0; i < 100; i++) {
                const x = (i * 37 + time * 200) % canvas.width;
                const y = (i * 23 + time * 300) % canvas.height;
                ctx.beginPath();
                ctx.moveTo(x, y);
                ctx.lineTo(x - 5, y + 15);
                ctx.stroke();
            }
            break;
        case 'stormy':
            ctx.strokeStyle = 'rgba(70, 70, 70, 0.8)';
            ctx.lineWidth = 3;
            for (let i = 0; i < 150; i++) {
                const x = (i * 41 + time * 400) % canvas.width;
                const y = (i * 29 + time * 500) % canvas.height;
                ctx.beginPath();
                ctx.moveTo(x, y);
                ctx.lineTo(x - 8, y + 20);
                ctx.stroke();
            }
            // Lightning effect
            if (Math.random() < 0.02) {
                ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
                ctx.fillRect(Math.random() * canvas.width, 0, 50, canvas.height);
            }
            break;
        case 'windy':
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
            ctx.lineWidth = 1;
            for (let i = 0; i < 30; i++) {
                const x = (i * 67 + time * 150) % canvas.width;
                const y = 100 + (i * 43) % (canvas.height - 200);
                ctx.beginPath();
                ctx.moveTo(x, y);
                ctx.quadraticCurveTo(x + 50, y + 20, x + 100, y);
                ctx.stroke();
            }
            break;
        case 'foggy':
            ctx.fillStyle = 'rgba(200, 200, 200, 0.3)';
            for (let i = 0; i < 5; i++) {
                const x = (i * 400 + time * 20) % (canvas.width + 400) - 200;
                ctx.fillRect(x, canvas.height - 200, 400, 200);
            }
            break;
        case 'starry':
            ctx.fillStyle = '#ffffff';
            for (let i = 0; i < 200; i++) {
                const x = (i * 73) % canvas.width;
                const y = (i * 47) % (canvas.height - 100);
                const size = (i % 3) + 1;
                ctx.beginPath();
                ctx.arc(x, y, size, 0, Math.PI * 2);
                ctx.fill();
            }
            break;
        case 'nebula':
            // Nebula effect
            const gradient = ctx.createRadialGradient(
                canvas.width / 2, canvas.height / 2, 0,
                canvas.width / 2, canvas.height / 2, canvas.width / 2
            );
            gradient.addColorStop(0, 'rgba(224, 86, 253, 0.3)');
            gradient.addColorStop(0.5, 'rgba(104, 109, 224, 0.2)');
            gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            break;
        case 'intense':
            // Intense atmosphere
            ctx.fillStyle = 'rgba(255, 0, 0, 0.1)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            // Heat waves
            ctx.strokeStyle = 'rgba(255, 100, 0, 0.2)';
            ctx.lineWidth = 2;
            for (let i = 0; i < 20; i++) {
                const x = (i * 100) % canvas.width;
                const y = canvas.height - 100 - Math.sin(time * 2 + i) * 20;
                ctx.beginPath();
                ctx.moveTo(x, y);
                ctx.lineTo(x + 50, y + Math.sin(time * 3 + i) * 10);
                ctx.stroke();
            }
            break;
        case 'clear':
        case 'sunny':
        default:
            // Sun rays
            ctx.strokeStyle = 'rgba(255, 215, 0, 0.3)';
            ctx.lineWidth = 3;
            const sunX = canvas.width - 150;
            const sunY = 100;
            for (let i = 0; i < 12; i++) {
                const angle = (i / 12) * Math.PI * 2 + time * 0.5;
                ctx.beginPath();
                ctx.moveTo(sunX, sunY);
                ctx.lineTo(sunX + Math.cos(angle) * 80, sunY + Math.sin(angle) * 80);
                ctx.stroke();
            }
            // Sun
            ctx.fillStyle = '#ffd700';
            ctx.beginPath();
            ctx.arc(sunX, sunY, 40, 0, Math.PI * 2);
            ctx.fill();
            break;
    }
}

// Helper function to adjust color brightness
function adjustColor(color, amount) {
    const hex = color.replace('#', '');
    const r = Math.max(0, Math.min(255, parseInt(hex.substr(0, 2), 16) + amount));
    const g = Math.max(0, Math.min(255, parseInt(hex.substr(2, 2), 16) + amount));
    const b = Math.max(0, Math.min(255, parseInt(hex.substr(4, 2), 16) + amount));
    return `rgb(${r}, ${g}, ${b})`;
}

// Draw cloud
function drawCloud(ctx, x, y) {
    ctx.beginPath();
    ctx.arc(x, y, 30, 0, Math.PI * 2);
    ctx.arc(x + 30, y - 10, 35, 0, Math.PI * 2);
    ctx.arc(x + 60, y, 30, 0, Math.PI * 2);
    ctx.arc(x + 30, y + 10, 25, 0, Math.PI * 2);
    ctx.fill();
}

// Update player position based on keys and physics
function updatePlayer() {
    const canvas = document.getElementById('gameCanvas');
    
    // Horizontal movement
    if (keys['ArrowLeft']) {
        player.velocityX = -player.speed;
        player.facingRight = false;
        player.animationFrame++;
    } else if (keys['ArrowRight']) {
        player.velocityX = player.speed;
        player.facingRight = true;
        player.animationFrame++;
    } else {
        player.velocityX *= FRICTION;
        if (Math.abs(player.velocityX) < 0.1) {
            player.velocityX = 0;
        }
    }
    
    // Jumping
    if (keys['ArrowUp'] || keys[' ']) {
        if (player.isGrounded && !player.isJumping) {
            player.velocityY = JUMP_FORCE;
            player.isJumping = true;
            player.isGrounded = false;
        }
    }
    
    // Apply gravity
    player.velocityY += GRAVITY;
    
    // Update position
    player.x += player.velocityX;
    player.y += player.velocityY;
    
    // Keep player within expanded canvas bounds
    if (player.x < 0) player.x = 0;
    if (player.x > 2000 - player.width) player.x = 2000 - player.width;
    
    // Check platform collisions
    player.isGrounded = false;
    platforms.forEach(platform => {
        // Check if player is falling onto platform
        if (player.velocityY > 0 &&
            player.x + player.width > platform.x &&
            player.x < platform.x + platform.width &&
            player.y + player.height >= platform.y &&
            player.y + player.height <= platform.y + platform.height + player.velocityY + 5) {
            
            player.y = platform.y - player.height;
            player.velocityY = 0;
            player.isGrounded = true;
            player.isJumping = false;
        }
    });
    
    // Reset if fallen below canvas
    if (player.y > 800) {
        player.x = 50;
        player.y = 800 - 150;
        player.velocityY = 0;
        player.velocityX = 0;
    }
}

// Draw player (Mario-style character with animations)
function drawPlayer(ctx) {
    const animOffset = Math.sin(player.animationFrame * 0.3) * 5;
    const isMoving = Math.abs(player.velocityX) > 0.5;
    const isJumpingAnim = !player.isGrounded;
    
    // Calculate limb positions based on animation
    const legOffset = isMoving ? Math.sin(player.animationFrame * 0.4) * 8 : 0;
    const armOffset = isMoving ? Math.sin(player.animationFrame * 0.4) * 6 : 0;
    
    // Body
    ctx.fillStyle = '#ff0000';
    ctx.fillRect(player.x + 10, player.y + 20, 20, 25);
    
    // Head
    ctx.fillStyle = '#ffcc99';
    ctx.fillRect(player.x + 12, player.y, 16, 18);
    
    // Hat
    ctx.fillStyle = '#ff0000';
    ctx.fillRect(player.x + 8, player.y - 5, 24, 8);
    
    // Eyes
    ctx.fillStyle = '#000000';
    if (player.facingRight) {
        ctx.fillRect(player.x + 14, player.y + 6, 3, 3);
        ctx.fillRect(player.x + 20, player.y + 6, 3, 3);
    } else {
        ctx.fillRect(player.x + 16, player.y + 6, 3, 3);
        ctx.fillRect(player.x + 22, player.y + 6, 3, 3);
    }
    
    // Mustache
    ctx.fillStyle = '#8b4513';
    ctx.fillRect(player.x + 13, player.y + 14, 14, 3);
    
    // Arms (animated)
    ctx.fillStyle = '#ffcc99';
    if (player.facingRight) {
        // Right arm
        ctx.fillRect(player.x + 30, player.y + 22 + armOffset, 8, 15);
        // Left arm
        ctx.fillRect(player.x + 2, player.y + 22 - armOffset, 8, 15);
    } else {
        // Right arm (facing left)
        ctx.fillRect(player.x + 30, player.y + 22 - armOffset, 8, 15);
        // Left arm (facing left)
        ctx.fillRect(player.x + 2, player.y + 22 + armOffset, 8, 15);
    }
    
    // Legs (animated)
    ctx.fillStyle = '#0000ff';
    if (isJumpingAnim) {
        // Jumping pose - legs tucked
        ctx.fillRect(player.x + 8, player.y + 42, 10, 10);
        ctx.fillRect(player.x + 22, player.y + 42, 10, 10);
    } else {
        // Walking animation
        ctx.fillRect(player.x + 10 + legOffset, player.y + 45, 8, 8);
        ctx.fillRect(player.x + 22 - legOffset, player.y + 45, 8, 8);
    }
    
    // Shoes
    ctx.fillStyle = '#8b4513';
    if (isJumpingAnim) {
        ctx.fillRect(player.x + 6, player.y + 50, 12, 5);
        ctx.fillRect(player.x + 22, player.y + 50, 12, 5);
    } else {
        ctx.fillRect(player.x + 8 + legOffset, player.y + 52, 12, 5);
        ctx.fillRect(player.x + 20 - legOffset, player.y + 52, 12, 5);
    }
}

// Draw question blocks
function drawQuestionBlocks(ctx) {
    const theme = mapThemes[currentMap];
    
    questionBlocks.forEach(block => {
        if (block.collected) return;
        
        // Block body - semi-transparent if on cooldown
        ctx.globalAlpha = block.cooldown > 0 ? 0.5 : 1.0;
        ctx.fillStyle = block.completed ? '#4caf50' : theme.accentColor;
        ctx.fillRect(block.x, block.y, block.width, block.height);
        
        // Block border
        ctx.strokeStyle = block.completed ? '#2e7d32' : adjustColor(theme.accentColor, -30);
        ctx.lineWidth = 3;
        ctx.strokeRect(block.x, block.y, block.width, block.height);
        
        // Question mark
        ctx.fillStyle = block.completed ? '#ffffff' : '#ffffff';
        ctx.font = 'bold 30px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('?', block.x + block.width / 2, block.y + block.height / 2);
        
        // Difficulty indicator
        const difficultyColors = {
            easy: '#4caf50',
            medium: '#ff9800',
            hard: '#f44336'
        };
        ctx.fillStyle = difficultyColors[block.question.difficulty];
        ctx.fillRect(block.x + 5, block.y + 5, 10, 10);
        
        // Cooldown indicator
        if (block.cooldown > 0) {
            ctx.fillStyle = '#ffffff';
            ctx.font = 'bold 12px Arial';
            ctx.fillText('⏳', block.x + block.width / 2, block.y + block.height - 10);
        }
        
        ctx.globalAlpha = 1.0;
    });
}

// Check collisions between player and question blocks
function checkCollisions() {
    questionBlocks.forEach(block => {
        if (block.collected) return;
        
        // Decrease cooldown
        if (block.cooldown > 0) {
            block.cooldown--;
            return;
        }
        
        if (player.x < block.x + block.width &&
            player.x + player.width > block.x &&
            player.y < block.y + block.height &&
            player.y + player.height > block.y) {
            
            // Collision detected - show confirmation
            showConfirmation(block);
        }
    });
}

// Show confirmation modal
function showConfirmation(block) {
    gameRunning = false;
    currentQuestion = block;
    
    const modal = document.getElementById('confirmModal');
    document.getElementById('confirmQuestionTitle').textContent = block.question.title;
    
    modal.classList.add('active');
}

// Show question modal (after confirmation)
function showQuestion(block) {
    const modal = document.getElementById('questionModal');
    document.getElementById('questionTitle').textContent = block.question.title;
    document.getElementById('questionDifficulty').textContent = block.question.difficulty.charAt(0).toUpperCase() + block.question.difficulty.slice(1);
    document.getElementById('questionDifficulty').className = 'detail-value difficulty-' + block.question.difficulty;
    document.getElementById('questionCategory').textContent = currentMap;
    document.getElementById('readLink').href = block.question.readLink;
    document.getElementById('videoLink').href = block.question.videoLink || '#';
    document.getElementById('completedCheckbox').checked = block.completed;
    document.getElementById('notesText').value = block.notes || '';
    
    modal.classList.add('active');
}

// Save question progress
function saveQuestionProgress() {
    if (!currentQuestion) return;
    
    currentQuestion.completed = document.getElementById('completedCheckbox').checked;
    currentQuestion.notes = document.getElementById('notesText').value;
    
    // Save to localStorage
    const progress = loadProgress();
    if (!progress[currentMap]) {
        progress[currentMap] = [];
    }
    
    const existingIndex = progress[currentMap].findIndex(q => q.id === currentQuestion.question.id);
    if (existingIndex !== -1) {
        progress[currentMap][existingIndex] = {
            id: currentQuestion.question.id,
            completed: currentQuestion.completed,
            notes: currentQuestion.notes
        };
    } else {
        progress[currentMap].push({
            id: currentQuestion.question.id,
            completed: currentQuestion.completed,
            notes: currentQuestion.notes
        });
    }
    
    saveProgress(progress);
    updateMapStats();
    
    // Close modal and continue game
    document.getElementById('questionModal').classList.remove('active');
    currentQuestion = null;
    
    // Restart game loop
    const canvas = document.getElementById('gameCanvas');
    const ctx = canvas.getContext('2d');
    gameRunning = true;
    gameLoop = requestAnimationFrame(() => gameStep(ctx, canvas));
}

// Go back to map selection
function goToMapSelection() {
    gameRunning = false;
    if (gameLoop) cancelAnimationFrame(gameLoop);
    
    document.getElementById('gameScreen').classList.add('hidden');
    document.getElementById('mapSelection').classList.remove('hidden');
    
    currentMap = null;
    updateStats();
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    updateStats();
    initMapSelection();
    
    // Keyboard controls
    document.addEventListener('keydown', (e) => {
        keys[e.key] = true;
        if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', ' '].includes(e.key)) {
            e.preventDefault();
        }
    });
    
    document.addEventListener('keyup', (e) => {
        keys[e.key] = false;
        if (e.key === ' ' || e.key === 'ArrowUp') {
            player.isJumping = false;
        }
    });
    
    // Back button
    document.getElementById('backBtn').addEventListener('click', goToMapSelection);
    
    // Confirmation modal
    document.getElementById('closeConfirmModal').addEventListener('click', () => {
        document.getElementById('confirmModal').classList.remove('active');
        
        // Set cooldown on the block to prevent immediate re-trigger
        if (currentQuestion) {
            currentQuestion.cooldown = 60; // 1 second at 60fps
        }
        currentQuestion = null;
        
        // Restart game loop
        const canvas = document.getElementById('gameCanvas');
        const ctx = canvas.getContext('2d');
        gameRunning = true;
        gameLoop = requestAnimationFrame(() => gameStep(ctx, canvas));
    });
    
    document.getElementById('confirmYes').addEventListener('click', () => {
        document.getElementById('confirmModal').classList.remove('active');
        if (currentQuestion) {
            showQuestion(currentQuestion);
        }
    });
    
    document.getElementById('confirmNo').addEventListener('click', () => {
        document.getElementById('confirmModal').classList.remove('active');
        
        // Set cooldown on the block to prevent immediate re-trigger
        if (currentQuestion) {
            currentQuestion.cooldown = 60; // 1 second at 60fps
        }
        currentQuestion = null;
        
        // Restart game loop
        const canvas = document.getElementById('gameCanvas');
        const ctx = canvas.getContext('2d');
        gameRunning = true;
        gameLoop = requestAnimationFrame(() => gameStep(ctx, canvas));
    });
    
    // Question modal
    document.getElementById('closeQuestionModal').addEventListener('click', () => {
        document.getElementById('questionModal').classList.remove('active');
        currentQuestion = null;
        
        // Restart game loop
        const canvas = document.getElementById('gameCanvas');
        const ctx = canvas.getContext('2d');
        gameRunning = true;
        gameLoop = requestAnimationFrame(() => gameStep(ctx, canvas));
    });
    
    document.getElementById('saveQuestionBtn').addEventListener('click', saveQuestionProgress);
    
    // Close modal when clicking outside
    document.getElementById('confirmModal').addEventListener('click', (e) => {
        if (e.target === document.getElementById('confirmModal')) {
            document.getElementById('confirmModal').classList.remove('active');
            
            // Set cooldown on the block to prevent immediate re-trigger
            if (currentQuestion) {
                currentQuestion.cooldown = 60; // 1 second at 60fps
            }
            currentQuestion = null;
            
            // Restart game loop
            const canvas = document.getElementById('gameCanvas');
            const ctx = canvas.getContext('2d');
            gameRunning = true;
            gameLoop = requestAnimationFrame(() => gameStep(ctx, canvas));
        }
    });
    
    document.getElementById('questionModal').addEventListener('click', (e) => {
        if (e.target === document.getElementById('questionModal')) {
            document.getElementById('questionModal').classList.remove('active');
            currentQuestion = null;
            
            // Restart game loop
            const canvas = document.getElementById('gameCanvas');
            const ctx = canvas.getContext('2d');
            gameRunning = true;
            gameLoop = requestAnimationFrame(() => gameStep(ctx, canvas));
        }
    });
});
