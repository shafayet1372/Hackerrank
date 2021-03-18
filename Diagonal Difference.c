#include<stdio.h>

int main()
{
    int n,k,m;
    scanf("%d",&n);
    k=0;
    m=n-1;
    int sum1=0,sum2=0;
    int ar[n][n];
    int i,j;
    for(i=0;i<n;i++){
     for(j=0;j<n;j++){
      scanf("%d",&ar[i][j]);
          
        }
    sum1=sum1+ar[i][k];
    sum2=sum2+ar[i][m];

    k++;
    m--;
    
    }
    int result=sum1-sum2;
    if(result <0){
    result=result*(-1);
    }
    printf("%d",result);
    return 0;
}