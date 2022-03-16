// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such 
// that each unique element appears only once. The relative order of the elements should be kept the same.

// Since it is impossible to change the length of the array in some languages, you must instead have 
// the result be placed in the first part of the array nums. More formally, if there are k elements after
// removing the duplicates, then the first k elements of nums should hold the final result. It does
// not matter what you leave beyond the first k elements.

// Return k after placing the final result in the first k slots of nums.

// Do not allocate extra space for another array. You must do this by modifying the input array 
// in-place with O(1) extra memory.

const nums = [0,0,0,0,1,2,2,3,4,4,4,4,4,5,5,5,5,6,7,7,8,9,9,9,9,9]
const nums2 = [0,0,0,0,1,2,2,3,4,4,4,4,4,5,5,5,5,6,7,7,8,9,9,9,9,9]

var removeDuplicates1 = function(nums) {
    let i = 1;
    while(i < nums.length) nums[i-1]==nums[i]?(nums.splice(i, 1), i=i-1): i++;
    console.log('No 1', nums);
    return nums
};


// how does it work and is faster
var removeDuplicates2 = function(nums) {
    // This function brings then unique to replace the duplicate
    let pointer1 = 0, pointer2 = 1;
    while (pointer2 < nums.length) {
        if (nums[pointer2] !== nums[pointer1]) (nums[pointer1+1] = nums[pointer2], pointer1++)
        pointer2++;
    }
    nums.splice(pointer1 + 1, nums.length-1);
    console.log('No 2', nums);
    return nums
}

removeDuplicates1(nums)
removeDuplicates2(nums2)


// solved by using set
let newSet = [...new Set(nums)];
console.log(newSet);