import java.util.Scanner;

class pratise{
  public static void main(String[] args) {
    Scanner sc=new Scasnner(System.in);
    int n=sc.nextINt();
    int arr[]=new int[n];
    for(int i=0;i<n;i++){
      arr[i]=sc.nextInt();
    }
    System.out.println(n, arr);
  }


  public static int count(int n,int[] arr){
    int asn=0;
    for(int i=0;i<(1 << arr.length); i++){
      int c=countnumber(i,n,arr);
      if(countSetBit(i)%2 ==0){
        ans=c;
      }
    }
  }
}