import java.util.Collections;
import java.util.List;

public class BirthdayCakeCandles {
    public static int birthdayCakeCandles(List<Integer> candles) {
    // Write your code here
        int max = Collections.max(candles);
        int count = 0;
        for(int height : candles){
            if(height == max){
                count++;
            }
        }
        return count;
    }
}
