#include <stdio.h>

int main()
{
   int i,j,swap,n,k;
   
   scanf("%d",&n);
   int arr[n];
   for(i =0;i<n;i++){
       scanf("%d",&arr[i]);
   }
    

    for( i=1;i<n;i++){
   
        for(j=i;j>0;j--){
            if(arr[j]<arr[j-1]){
             swap=arr[j-1];
            arr[j-1]=arr[j];
            arr[j]=swap;
               
            }
        }
        for(k=0;k<n;k++){
          printf("%d ", arr[k]);
        }
        printf("\n");
    }



    return 0;
}