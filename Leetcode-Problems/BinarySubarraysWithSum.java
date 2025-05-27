public class BinarySubarraysWithSum {
    public int numSubarraysWithSum(int[] nums, int goal) {
       return subarraysCount(nums, goal) - subarraysCount(nums, goal-1);
    }

    public int subarraysCount(int[] arr, int k){
        if(k < 0)return 0;
        int l=0, r=0, count=0, sum=0;
        while(r< arr.length){
            sum += arr[r];
            while(sum > k){
                sum -= arr[l];
                l++;
            }
            if(sum <= k)count += (r-l+1);
            r++;
        }
        return count;
    }
}
