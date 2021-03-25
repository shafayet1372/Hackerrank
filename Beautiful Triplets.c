// Online C compiler to run C program online
#include <stdio.h>

int main() {
    int i,k,j,count=0,n,d;
    scanf("%d %d",&n,&d);
     int ar[n];
     for(i=0;i<n;i++){
         scanf("%d",&ar[i]);
     }
    
   for( i=0;i<n;i++){
    k=0;
  
    for( j=i;j<n-1;j++){
        if(ar[j+1]-ar[i]==d){
            k=ar[j+1];
         
        }
        if(ar[j+1]-k==d){
            
         if(k-ar[i]==d){
           count++;
            break;
         }

        
        
        }
    }

    
}
printf("%d",count);
    return 0;
}