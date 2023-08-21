public class distinct_number {
    public static void main(String[] args) {
        int arr[] = {1, 2, 1, 3, 2, 4, 3, 5, 6, 5};
        for (int i = 0; i < arr.length; i++)
		{
			// Check if the picked element
			// is already printed
			int j;
			for (j = 0; j < i; j++)
			if (arr[i] == arr[j])
				break;
	
			// If not printed earlier,
			// then print it
			if (i == j)
			System.out.print( arr[i] + " ");
        }
    }
}
