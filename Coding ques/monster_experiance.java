// infosys https://prepinsta.com/infosys-sp-and-dse/coding-questions/
public class monster_experiance {
  public static void main(String[] args) {
    // int monster=2;
    // int experiance=123;
    // int monst[]={78,130};
    // int bonousi[]={10,0};
    int monster=3;
    int experiance=100;
    int monst[]={101,100,304};
    int bonousi[]={100,1,534};
    int count=0,j=0;
    while(j<2){
      for(int i=0;i<monster;i++){
        if(experiance>=monst[i]){
          experiance+=bonousi[i];
          count++;
        }
      }
      j++;
    }
    System.out.println(count);
  }
}
