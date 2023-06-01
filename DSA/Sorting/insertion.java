class insertion{
  public static void sort(int arr[]){
    for (int i = 1; i < arr.length; i++) {
      int current=arr[i];
      int j=i-1;
      // arr[j]  is the sorted arrray and the current having the unsorted element
      while(j>=0 && current < arr[j]){
        arr[j+1]=arr[j];
        j--;
      }
      // place the largest element at the end.
      arr[j+1]=current;
    }
  }
  
  public static void main(String[] args) {
    int arr[]={4,6,1,8,90,21,3,2};
    for (int i = 0; i < arr.length; i++) {
      System.out.print(arr[i]+" ");
    }
    System.out.println("\nAfter Insertion sorting..");
    sort(arr);
    for (int i = 0; i < arr.length; i++) {
      System.out.print(arr[i]+" ");
    }
  }
}

// Divide in two array first one is sorted and the second one is unsorted
// worst case time complexity is 0(n^2) and best case is 0(n)
// space complexity is 0(1).