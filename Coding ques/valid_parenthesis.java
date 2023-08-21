import java.util.*;
class valid_parenthesis{
  public static void main(String[] args) {
    // String str="[()]{}{[()()]()}";
    String str="[(])";
    System.out.println(check(str));
  }
  public static boolean check(String str){
    Stack <Character> st = new Stack<>();  
    for(int i=0;i<str.length();i++){
      char ch=str.charAt(i);
      if(ch=='(' || ch=='{' || ch=='['){
        st.push(ch);
      }
      else{
        if(st.isEmpty()){
          return false;
        }
        else if(st.peek()=='(' && ch==')' || st.peek()=='[' && ch==']' || st.peek()=='{' && ch=='}'){
          st.pop();
      }
      else{
        return false;
      }
      }
    }
    return st.isEmpty();
  }
}