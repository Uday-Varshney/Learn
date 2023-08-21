public class quicksort {
  public static void main(String[] args) {
    int arr[]={1,5,3,8,23,0,9};
    quick(arr);
  }
  public static void quick(int arr[]){
    int start=0,end=arr.length-1,pivot=arr[end];
    int i=start-1;



    for (int i = 0; i < arr.length; i++) {
      System.out.println(arr[i]);
    }
  }
}
