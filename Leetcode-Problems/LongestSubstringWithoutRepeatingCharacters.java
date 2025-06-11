import java.util.Arrays;

public class LongestSubstringWithoutRepeatingCharacters {
    public int lengthOfLongestSubstring(String s) {
        int l=0, r=0, maxlen=0;
        int[] hash = new int[256];
        Arrays.fill(hash, -1);
        while(r < s.length()){
            if(hash[s.charAt(r)] != -1){
                if(hash[s.charAt(r)] >= l){
                    l = hash[s.charAt(r)]+1;
                }
            }
            maxlen = Math.max(maxlen, r-l+1);
            hash[s.charAt(r)] = r;
            r++;
        }
        return maxlen;
    }
}
//         HashMap<Character, Integer> mp = new HashMap<>();

//         while (r < s.length()) {
//             mp.put(s.charAt(r), mp.getOrDefault(s.charAt(r), 0) + 1);
            
//             while (mp.get(s.charAt(r)) > 1) {
//                 mp.put(s.charAt(l), mp.get(s.charAt(l)) - 1);
//                 l++;
//             }
            
//             maxlen = Math.max(maxlen, r-l+1);
//             r++;
//         }
        
//         return maxlen;
//     }
// }

// public int lengthOfLongestSubstring(String s) {
    //     int l=0;
    //     int r=0;
    //     int[] arr=new int[256];
    //   Arrays.fill(arr, -1);
    //   int maxlen=0;
    //     while(r<s.length()){
    //         if(arr[s.charAt(r)]==-1){
    //             arr[s.charAt(r)]=r; 
    //         }
    //         else{
    //             l=Math.max(l,arr[s.charAt(r)]+1);
    //             arr[s.charAt(r)]=r;
    //         }
    //         maxlen=Math.max(maxlen,r-l+1);
    //         r++;
    //     }
    //     return maxlen;

//     }
