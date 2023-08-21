public class matrix_mult {
  public static void main(String[] args) {
    int[][] arr = { {1, 2, 3}, {4, 5, 6}, {7, 8, 9} };
int[][] arr2= { {9, 8, 7}, {6, 5, 4}, {3, 2, 1} };
    int row1=arr[0].length;
    int col1=arr[0].length;
    int col2=arr2[0].length;
    int res[][]=new int[row1][col2];
    for(int i=0;i<row1;i++){
      for(int j=0;j<col2;j++){
        int sum=0;
        for(int k=0;k<col1;k++){
          sum+=arr[i][k]*arr2[k][j];
        }
        res[i][j]=sum;
      }
    }

    for (int i = 0; i < res.length; i++) {
      for (int j = 0; j < res.length; j++) {
        System.out.print(res[i][j]+" ");
      }
      System.out.println();
    }
  }
}
