class insertionsort{
  public static void main(String[] args) {
    int arr[]={1,5,3,8,23,0,9};
    insertion(arr);
  }
  public static void insertion(int arr[]){
    int temp,j;
    // it startes with 1 because in this sorting we consider 0 is sorted
    for (int i = 1; i < arr.length; i++) {
      temp=arr[i];
      j=i-1;
      while(j>=0 && arr[j]>temp){
        // swap the bigger value
        arr[j+1]= arr[j];
        j--;
      }
      arr[j+1]=temp;
    }

    // print the arr
    for (int i = 0; i < arr.length; i++) {
      System.out.println(arr[i]);
    }
  }
}