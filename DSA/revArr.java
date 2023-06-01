public class revArr {

  public static void reverse(int arr[]){
    int end=arr.length-1;
    int start=0;
    // for (int i = 0; i < arr.length/2; i++) {
    //   int temp=arr[start];
    //   arr[start]=arr[end];
    //   arr[end]=temp;
    //   start++;
    //   end--;
    // }
    while(start<end){
      int temp=arr[start];
      arr[start]=arr[end];
      arr[end]=temp;
      start++;
      end--;
    }
  }
  public static void main(String[] args) {
    int arr[]={1,2,3,4,5,6,7};
    
    reverse(arr);
    for (int i = 0; i < arr.length; i++) {
      System.out.print(arr[i]+" ");
    }
  }
}
