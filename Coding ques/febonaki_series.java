public class febonaki_series {
  public static void main(String[] args) {
    int range=10;
    int a=0;
    int b=1;
    for (int i = 0; i < range; i++) {
      int n=a+b;
      System.out.print(a+" ");
      a=b;
      b=n;
    }
  }
}
