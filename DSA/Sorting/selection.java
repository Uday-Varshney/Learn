public class selection {

  public static void sort(int arr[]){
    for (int i = 0; i < arr.length-1; i++) {
      int smindx=i;
      for (int j = i; j < arr.length; j++) {
        if(arr[smindx]>arr[j]);
        smindx=j;
      }
      int temp=arr[smindx];
      arr[smindx]=arr[i];
      arr[i]=temp;
    }
  }
  public static void main(String[] args) {
    int arr[]={12,29,17,8,32,9};
    for (int i = 0; i < arr.length; i++) {
      System.out.print(arr[i]+" ");
    }
    System.out.println("After sort");
    sort(arr);
    for (int i = 0; i < arr.length; i++) {
      System.out.print(arr[i]+" ");
    }
  }
}

  
// length -1 because largest element automatically set to the end  
// isme length starting se cum ho rhi h aur bublle m peeche se hoti h
// One swap per iteration. smallest element should be placed at the first
// Time compllexity is 0(n^2)
// space compllexity is 0(1)