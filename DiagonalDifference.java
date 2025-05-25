import java.util.List;

public class DiagonalDifference {
    public static int diagonalDifference(List<List<Integer>> arr) {
    // Write your code here
        int n = arr.size();
        int leftDia = 0, rightDia = 0;
        
        for(int i = 0; i< n;i++){
            leftDia += arr.get(i).get(i);
            rightDia += arr.get(i).get(n-1-i);
        }
        
        return Math.abs(leftDia - rightDia);

    }
}
