// Online C compiler to run C program online
#include <stdio.h>

int main() {
    int i,j,n,k,m=0;
    char ch = '#';
    scanf("%d",&n);
      
    for(i=0;i<n;i++){
    m++;
    for(j=i;j<n-1;j++){
    printf(" ");
       }
     
    for(k=0;k<m;k++){
     printf("#");
       }
     printf("\n");
   }

   
 
    
    return 0;
}