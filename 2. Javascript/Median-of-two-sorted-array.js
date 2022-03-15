// given two sorted arrays num1 and num2 of size m and n 
// respectively, return the median of the two sorted arrays.


const arr1 = [13,14,15], arr2 = [2,11,15];





// find_Median(merge_and_sort_array1(arr1, arr2));


//   console.log(findMedianSortedArrays(arr1, arr2))

//   my version

var findMedianSortedArrays = function(nums1, nums2) {
    
    //baked sorting
    const merge_and_sort_array1=(a,b)=> {
        const joined = [...a, ...b]
        return joined.sort((c, d)=> c-d)
    }

    //primitive sort
    const merge_and_sort_array2 = (a, b)=>{
        const arr = [...b, ...a];
    
        //swap function
        function swap (arr, i, j) {
            let current = arr[i];
            arr[i] = arr[j];
            arr[j] = current;
        }
    
        let iterator = 0
        let count = 0
        while(iterator<arr.length){
            for(let i = 0; i<arr.length; i++){
                if(arr[iterator] < arr[i]){
                    swap(arr, iterator, i)
                    count++
                }
            }
            iterator++
        }
    
        // console.log(arr);
        return arr;
    }
    
    const array = merge_and_sort_array1(nums1, nums2) 
    
    const isInteger = Number.isInteger(array.length/2);
    let median = []
    const midValue = array.length/2

    if(!isInteger) {
        return array[Math.floor(midValue)]
    } else {
        return(array[Math.floor(midValue)-1] + array[Math.floor(midValue)])/2
    }
    // console.log(median);
    // return median
    
};



// other samples
var findMedianSortedArrays = function (nums1, nums2) {
    if (nums1.length > nums2.length) {
      [nums1, nums2] = [nums2, nums1];
    }
    const [m, n] = [nums1.length, nums2.length];
    const total = Math.floor((m + n + 1) / 2);
    let start = 0;
    let end = m;
    while (start <= end) {
      const part1 = Math.floor((start + end) / 2);
      const part2 = total - part1;
      const maxLeft1 = part1 === 0 ? -Infinity : nums1[part1 - 1];
      const minRight1 = part1 === m ? Infinity : nums1[part1];
      const maxLeft2 = part2 === 0 ? -Infinity : nums2[part2 - 1];
      const minRight2 = part2 === n ? Infinity : nums2[part2];
      if (maxLeft1 <= minRight2 && maxLeft2 <= minRight1) {
        if ((m + n) % 2 === 0) {
          return (
            (Math.max(maxLeft1, maxLeft2) + Math.min(minRight1, minRight2)) / 2
          );
        }
        return Math.max(maxLeft1, maxLeft2);
      }
      if (maxLeft1 > minRight2) {
        end = part1 - 1;
      } else {
        start = part1 + 1;
      }
    }
  };