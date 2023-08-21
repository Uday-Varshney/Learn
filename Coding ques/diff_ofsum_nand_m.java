public class diff_ofsum_nand_m {
  public static void main(String[] args) {
    int n=4;
    int m=20;
    int divn=0;
    int notdivn=0;
    for(int i=1;i<=m;i++){
      if(i%4==0){
        divn+=i;
      }
      else{
        notdivn+=i;
      }
    }
    System.err.println(notdivn-divn);
  }
}
