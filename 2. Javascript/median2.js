

 var findMedianSortedArrays = function(nums1, nums2) {
  const union = [];
  union.push(...nums1, ...nums2);
  const sortedUnion = union.sort((a,b) => a - b);
  const midcount = sortedUnion.length/2;
  return sortedUnion.length % 2 === 0 ? (sortedUnion[midcount-1] + sortedUnion[midcount])/2 : sortedUnion[Math.ceil(midcount)-1];
};


// Runtime: 132 ms, faster than 79.59% of JavaScript online submissions for Median of Two Sorted Arrays.
// Memory Usage: 44.9 MB, less than 67.13% of JavaScript online submissions for Median of Two Sorted Arrays.
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

	if (length % 2 !== 0) return nums[Math.floor(length / 2)];
	else return (nums[length / 2 - 1] + nums[length / 2]) / 2;
};

// Runtime: 132 ms, faster than 79.75 % of JavaScript online submissions for Median of Two Sorted Arrays.
// Memory Usage: 43.5 MB, less than 89.40 % of JavaScript online submissions for Median of Two Sorted Arrays.
const findMedianSortedArrays = (A, B) => {
	const length = A.length + B.length;

	if (!length) return null;
	if (length === 1) return !A.length ? B[0] : A[0];

	let i = 0;
	let j = 0;

	while (i + j < Math.ceil((length + 1) / 2)) {
		if (A[i] < B[j] || B[j] === undefined) i++;
		else j++;
	}

	// subtract by 1, because loop increases it by 1 more
	(i -= 1), (j -= 1);

	if (length % 2 !== 0) {
		// handle empty
		if (A[i] === undefined) return B[j];
		if (B[j] === undefined) return A[i];

		if (A[i] > B[j]) return A[i];
		else return B[j];
	} else {
		const num1 = isNaN(A[i]) ? Number.NEGATIVE_INFINITY : A[i];
		const num2 = isNaN(A[i - 1]) ? Number.NEGATIVE_INFINITY : A[i - 1];
		const num3 = isNaN(B[j]) ? Number.NEGATIVE_INFINITY : B[j];
		const num4 = isNaN(B[j - 1]) ? Number.NEGATIVE_INFINITY : B[j - 1];

		// handle empty
		if (A[i] === undefined) return (B[j] + B[j - 1]) / 2;
		if (B[j] === undefined) return (A[i] + A[i - 1]) / 2;

		// find max and add with 2nd max
		if (A[i] > B[j]) return (A[i] + Math.max(num2, num3, num4)) / 2;
		if (B[j] > A[i]) return (B[j] + Math.max(num1, num2, num4)) / 2;

		// handle 2 median same number
		if (A[i] === B[j]) return A[i];
	}
};




var findMedianSortedArrays = function(nums1, nums2) {
    var arr = [],
		len = nums1.length + nums2.length;
    if(len == 1) {
        return nums1.length == 1 ? nums1[0] : nums2[0];
    }   
    var arr_len = len % 2 == 0 ? (len)/2 + 1 : Math.ceil(len/2);    
    var i = 0,
        j = 0;   
    while(arr.length < arr_len) {
        if(i < nums1.length && j < nums2.length) {
            if(nums1[i] <= nums2[j]) {
                arr.push(nums1[i]);
                i++;
            }
            else {
                arr.push(nums2[j]);
                j++;
            }
        }
        else if(i >= nums1.length) {
            arr.push(nums2[j]);
            j++;
        }
        else {
            arr.push(nums1[i]);
            i++;
        }
    }

    return len % 2 == 0 ? (arr[arr.length-1] + arr[arr.length-2])/2 : arr[arr.length-1];
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