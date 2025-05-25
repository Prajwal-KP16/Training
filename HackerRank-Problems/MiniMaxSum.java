public class MiniMaxSum {
    public static void miniMaxSum(List<Integer> arr) {
        // Write your code here
            long mini = arr.get(0), max = arr.get(0), sum = 0;
            for(long ele : arr){
                sum += ele;
                if(ele< mini){
                    mini = ele;
                }else if(ele > max){
                    max = ele;
                }
            }
            System.out.println((sum - max) +" "+ (sum - mini));
        }    
}
