public class perfect_number {
  public static void main(String[] args) {
    int n=5;
    int sum=0;
    for(int i=1;i<n;i++){
      if(n%i==0){
        sum+=i;
        // System.out.println(sum);
      }
    }
    if(sum==n){
      System.out.println("yyes");
    }
    else{
      System.out.println("NO");
    }
  }
}
