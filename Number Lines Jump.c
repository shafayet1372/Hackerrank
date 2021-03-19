
#include <stdio.h>

int main()
{
   int x1,v1,x2,v2;
   int i=0,found=0;
   scanf("%d %d %d %d",&x1,&v1,&x2,&v2);
   int k1=x1+v1;
   int k2=x2+v2;
   if(k1==k2){
   printf("YES\n");
   }else if(x2>x1 && v2>v1){
     printf("NO");       
   }else{
         for(i;i<10000;i++){
       
       k1=k1+v1;
       k2=k2+v2;
       if(k1==k2){
         found=1;
          printf("YES");
          break;
       }else{
           found=2;
       }
       
   }
   }
   
   if(found==2){
       printf("NO");
   }
  
    return 0;
}