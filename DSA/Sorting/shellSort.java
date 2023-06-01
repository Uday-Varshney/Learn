class shellSort{
	public static void sort(int arr[]){
		int n=arr.length;
		for(int gap=n/2;gap>=1;gap/=2){
			for (int j = gap; j < n; j++) {
				for (int i = j-gap; i >=0; i-=gap) {
					if(arr[i+gap]>arr[i]){
						break;
					}
					else{
						int temp=arr[i+gap];
						arr[i+gap]=arr[i];
						arr[i]=temp;
					}
				}
			}
		}
	}
	public static void main(String[] args) {
		int arr[]={4,6,1,8,90,21,3,2};
    int n=arr.length;
    for (int i = 0; i < arr.length; i++) {
      System.out.print(arr[i]+" ");
    }
    System.out.println("\nAfter sorting..");
    sort(arr);
    for (int i = 0; i < arr.length; i++) {
      System.out.print(arr[i]+" ");
		}
	}
}