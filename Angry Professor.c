/******************************************************************************

                            Online C Compiler.
                Code, Compile, Run and Debug C program online.
Write your code in this editor and press "Run" button to compile and execute it.

*******************************************************************************/

#include <stdio.h>

int main()
{
     int i,m,j,n,k,in;
     scanf("%d",&m);
     int count;
     for(i=0;i<m;i++){
         count=0;
         scanf("%d %d",&n,&k);
         
         for(j=0;j<n;j++){
             scanf("%d",&in);
             if(in<=0){
                 count++;
             }
         }
         if(count<k){
             printf("YES\n");
         }else if(count>=k){
             printf("NO\n");
             
         }
     }
     
     
 


    return 0;
}