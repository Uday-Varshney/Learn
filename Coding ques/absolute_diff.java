class absolute_diff{
  public static void main(String[] args) {
    int diff=2;
    int num=13;
    int arr[]={12, 3, 14, 56, 77, 13};
    int count=0;
    for(int i=0;i<arr.length;i++){
      if(Math.abs(num-arr[i])<=2){
        count++;
        // System.out.println(arr[i]);
      }
    }
    if(count==0){
      System.out.println(-1);
    }
    else{
      System.out.println(count);
    }
  }
}