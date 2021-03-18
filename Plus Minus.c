#include <stdio.h>

int main() {
    
    int n;
    scanf("%d",&n);
   int ar[n];
   int pos=0,neg=0,zer=0;
   int i;
    for( i=0;i<n;i++){
        
        scanf("%d",&ar[i]);
    }
    for(i=0;i<n;i++){
        
        if(ar[i]==0){
            zer++;
        }else if(ar[i]<0){
            neg++;
        }else if(ar[i]>0){
            pos++;
        }
    }
    
    printf("%.6f\n",pos/(float)n);
    printf("%.6f\n",neg/(float)n);
    printf("%.6f\n",zer/(float)n);
   
   
    
    return 0;
}