// given two sorted arrays num1 and num2 of size m and n 
// respectively, return the median of the two sorted arrays.


const arr1 = [13,14,15], arr2 = [2,16,15];



var findMedianSortedArrays = function(nums1, nums2) {
    
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
  if(!isInteger) return array[Math.floor(array.length/2)]
  else return (array[Math.floor(array.length/2)-1] + array[Math.floor(array.length/2)])/2
};

const findMedianSortedArrays2 = (A, B) => {
	const nums = [];
	let i = 0;
	let j = 0;

	while (i < A.length || j < B.length) {
		if (A[i] < B[j] || B[j] === undefined) {
			nums.push(A[i]);
			i++;
		} else {
			nums.push(B[j]);
			j++;
		}
	}

	const { length } = nums;

	// if (length % 2 !== 0) return nums[Math.floor(length / 2)];
	// else return (nums[length / 2 - 1] + nums[length / 2]) / 2;
  return length % 2 !== 0? nums[Math.floor(length / 2)]: (nums[length / 2 - 1] + nums[length / 2]) / 2;
};

const median = findMedianSortedArrays2(arr1, arr2)

const nums = [1,2,3];
const { length } = nums;
console.log(median, length);