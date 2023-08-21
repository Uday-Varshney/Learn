import java.util.*;
public class ProductSmallestPair {
  public static void main(String[] args) {
    int n=7;
    int sum=9;
    // int arr[]={5, 2, 4, 3, 9, 7, 1};
    int arr[]={9, 8, 3, -7, 3, 9};
    Arrays.sort(arr);
    for (int i = 0; i < arr.length-1; i++) {
      if(arr[0]+arr[1]<=sum){
        System.out.println(arr[i]*arr[i+1]);
        break;
      }
    }
  }
}
