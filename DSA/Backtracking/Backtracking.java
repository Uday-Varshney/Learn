package Backtracking;
public class Backtracking {
// Time complexity is 0(n*n!)
  public static void printPermutation(String str,String prem,int indx){
    if(str.length()==0){
      System.out.println(prem);
      return;  
    }
    for (int i = 0; i < str.length(); i++) {
      char currChar=str.charAt(i);
      // Can't understand this............
      String newString=str.substring(0, i) + str.substring(i+1);
      // System.out.println(newString);
      printPermutation(newString,prem + currChar, indx+1);
    }
  }
  public static void main(String[] args) {
    String str="ABC";
    printPermutation(str, "", 0);
  }
}
