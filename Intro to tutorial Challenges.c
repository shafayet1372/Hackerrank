#include <stdio.h>

int main()
{
    int v,n;
    scanf("%d",&v);
    scanf("%d",&n);
    int i,ar[n];
    for(i=0;i<n;i++){
        
        scanf("%d",&ar[i]);
    }
     
     for(i=0;i<n;i++){
         if(ar[i]==v){
             printf("%d",i);
         }
     }
    return 0;
}