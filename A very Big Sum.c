#include <stdio.h>

int main() {
    
   int n;
   scanf("%d",&n);
   long int ar[n];
   long int sum=0;
   int i;
   for( i=0;i<n;i++){
        
   scanf("%ld",&ar[i]);
   
                    }
   
   for(i=0;i<n;i++){
       sum=sum+ar[i];
       
   }
    printf("%ld",sum);
  

    
    return 0;
}