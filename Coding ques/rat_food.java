class rat_food{
  public static void main(String[] args) {
    int r=7;
    int unit=2;
    int n=8;
    int arr[]={2,8,3,5,7,4,1,2};
    int sum=0;
    int count=0;
    if(arr==null){
        System.out.println(-1);
      }
    else{
      for(int i=0;i<n;i++){
        sum+=arr[i];
        count++;
          if(sum>=r*unit){
            break;
          }
        }
        if(sum<r*unit){
          System.out.println(0);
        }
        else{
          System.out.print(count);
        } 
      }
  }
}