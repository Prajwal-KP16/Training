import java.util.Arrays;
import java.util.List;

public class CompareTheTriplets {
     public static List<Integer> compareTriplets(List<Integer> a, List<Integer> b) {
        int countA = 0;
        int countB=0;
        for(int i = 0;i< 3; i++){
            if(a.get(i) > b.get(i)){
                countA++;
            }else if(a.get(i)<b.get(i)){
                countB++;
            }
        }
        return Arrays.asList(countA, countB);
    }
}
