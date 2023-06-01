public class quicksort {

  public static int partion(int arr[],int low,int hi){
    int pivot=arr[hi];
    // Yhn i track karega ki kitni sapce pivot se chote element ko chahiye
    int i=low-1;
    // hi tak isliye kyu ki pivot element hi hai
    for (int j = low; j < hi; j++) {
      if(arr[j]<pivot){
        i++;
        int temp=arr[i];
        arr[i]=arr[j];
        arr[j]=temp;
      }
    }
    i++;//Because we need space for the pivot element.
    int temp=arr[i];
    arr[i]=pivot;
    arr[hi]=temp;
    return i;
  }

  public static void sort(int arr[],int low,int hi){
    int pidx=partion(arr,low,hi);
    // Pivot index se phele ke saate sort honge isme
    sort(arr, low,pidx-1);
    // Pivot index ke baad wale sort honge.
    sort(arr, pidx, hi);
  }
  public static void main(String[] args) {
    int arr[]={4,6,1,8,90,21,3,2};
    int n=arr.length;
    for (int i = 0; i < arr.length; i++) {
      System.out.print(arr[i]+" ");
    }
    System.out.println("\nAfter Insertion sorting..");
    sort(arr, 0, n-1);
    for (int i = 0; i < arr.length; i++) {
      System.out.print(arr[i]+" ");
    }
  }
}

// Divide in two parts using piviot
// Time complexity worst case is when the smallest or the largest element is the pivot element 0(n^2)  best case 0(nlogn)
