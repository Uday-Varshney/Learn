public class prime_number {
  public static void main(String[] args) {
    int n=100;
    // int flag=0;
    
      // if(flag==0){
      //   System.out.println("yes");
      // }
      // else{
      //   System.out.println("NO");
      // }
      for (int i = 1; i <= n; i++) {
        if(isprime(i)){
          System.out.println(i);
        }
      }
  }
  static boolean isprime(int n){
      if(n==0 || n==1){
      return false;
    }
    else{
      for (int i = 2; i < n/2; i++) {
        if(n%i==0){
          return false;
        }
        else{
          return true;
        }
      }
    }
    return true;
  }
}
