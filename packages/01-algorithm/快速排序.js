/**
 * @param {number[]} nums
 * */
function quickSort(nums) {
    function swap(i, j) {
        const temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
    }

    function partition(start, end) {
        if (start >= end) return;

        const randomIndex = ~~(Math.random() * (end - start + 1) + start);
        let largeIndex = -1;
        let resIndex = end;

        swap(randomIndex, end);

        for (let i = start; i < end; i++) {
            if (nums[i] >= nums[end]) {
                if (largeIndex === -1) {
                    largeIndex = i;
                }
            } else if (largeIndex !== -1) {
                swap(largeIndex, i);
                largeIndex++;
            }
        }

        if (largeIndex !== -1) {
            resIndex = largeIndex;
            swap(largeIndex, end);
        }

        partition(start, resIndex - 1);
        partition(resIndex + 1, end);
    }

    partition(0, nums.length - 1);
    return nums;
}

console.log(quickSort([3, 1, 2, 4, 6, 8, 7, 9, 3]));
