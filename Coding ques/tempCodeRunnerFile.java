public class distinct_number {
    public static void main(String[] args) {
        int arr[] = {1, 2, 1, 3, 2, 4, 3, 5, 6, 5};
        for (int i = 0; i < arr.length; i++) {
            for (int j = 0; j < i; j++) {
                if (arr[i] == arr[j])
                    break;
                if (i == j)
                    System.out.println(arr[i] + " ");
            }
        }
    }
}
