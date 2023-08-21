public class reverse_number {
  public static void main(String[] args) {
    int n=123456;
    int num=0;
    while(n!=0){
      int remainder=n%10;
      num=num*10 + remainder;
      n=n/10;
    }
    System.out.println(num);
  }
}
