class remove_vowels{
  public static void main(String[] args) {
    String str="uday varshney";
    for(int i=0;i<str.length();i++){
      char ch=str.charAt(i);
      if(ch=='a' || ch=='e' || ch=='i' || ch=='o' || ch=='u' || ch=='A' || ch=='E' || ch=='O' || ch=='I' || ch=='U'){
        continue;
      }
      else{
        System.out.print(ch);
      }
    }
  }
}