
#include <stdio.h>

int main()
{
     
     int n;
     
     scanf("%d",&n);
     int i,ar[n],j,swap;
     for(i=0;i<n;i++){
         
         scanf("%d",&ar[i]);
     }
     
     for(i=0;i<n;i++){
         for(j=i;j<n-1;j++){
             
             if(ar[i]>ar[j+1]){
                 swap=ar[j+1];
                ar[j+1]=ar[i];
                ar[i]=swap;
                
             }
         }
     }
    for(i=0;i<n;i++){
        printf("%d ",ar[i]);
    }


    return 0;
}