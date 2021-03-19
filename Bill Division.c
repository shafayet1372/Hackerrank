
#include <stdio.h>

int main()
{
    int n,index,charged,result=0,final;
    scanf("%d %d",&n,&index);
  

    int ar[n];
    int i;
    for(i=0;i<n;i++){
        scanf("%d",&ar[i]);
       
    }
        scanf("%d",&charged);
         for(i=0;i<n;i++){
       if(i!=index){
            result=result+ar[i];
        }
       
    }
    result=result/2;
  if(result!=charged){
      final=charged-result;
      printf("%d",final);
  }else if(result==charged){
      printf("Bon Appetit");
  }

    return 0;
}