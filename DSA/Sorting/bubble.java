public class bubble {

  public static void sort(int arr[]){
    for(int i=0;i<arr.length-1;i++){
      for(int j=0;j<arr.length-i-1;j++){
        if(arr[j]>arr[j+1]){
          int temp=arr[j];
          arr[j]=arr[j+1];
          arr[j+1]=temp;
        }
      }
    }
  }
  public static void main(String[] args) {
    int arr[]={33,665,1,76,9,3};
    
    System.out.println("Before Sort");
    for (int i = 0; i < arr.length; i++) {
      System.out.print(arr[i]+" ");
    }  
    System.out.println("\nAfter Sort");
    sort(arr);
    for (int i = 0; i < arr.length; i++) {
      System.out.print(arr[i]+" ");
    }
  }
}
// time complexity is O(n^2)
// larger element push to the end of the arary