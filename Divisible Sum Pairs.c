#include <stdio.h>

int main()
{
   int n,b,i,j,count=0;
   scanf("%d",&n);
   scanf("%d",&b);
   int ar[n];
   for(i=0;i<n;i++){
       
      scanf("%d",&ar[i]);
   }
   
   for(i=0;i<n;i++){
       
      for(j=i;j<n-1;j++){
           
           if((ar[i]+ar[j+1])%b==0 && i<j+1){
               count++;
           }
       }
   }
   
   printf("%d",count);
    return 0;
}