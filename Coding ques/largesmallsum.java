import java.util.*;
public class largesmallsum {
  public static void main(String[] args) {
    // int arr[]={3, 2, 1, 7, 5, 4};
    int arr[]={1,8,0,2,3,5,6};
    ArrayList <Integer> even=new ArrayList<>();
    ArrayList <Integer> odd=new ArrayList<>();
    even.add(arr[0]);
    for (int i = 1; i < arr.length; i++) {
      if(i%2==0){
        even.add(arr[i]);
      }
      else{
        odd.add(arr[i]);
      }
    }
    Collections.sort(even);
    Collections.sort(odd);
    System.out.println( even.get(even.size()-2) + odd.get(odd.size()-2) );
  }
}