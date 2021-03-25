/******************************************************************************

                            Online C Compiler.
                Code, Compile, Run and Debug C program online.
Write your code in this editor and press "Run" button to compile and execute it.

*******************************************************************************/

#include <stdio.h>

int main()
{
    long int b,w,bc,wc,z;
   long  int n,i,cost;
    scanf("%ld",&n);
    for(i=0;i<n;i++){
        cost=0;
        scanf("%ld %ld", &b, &w);
        scanf("%ld %ld %ld", &bc, &wc, &z);
        if(bc==wc){
cost=(b*bc)+(w*wc);

}else if(z>=bc && z>=wc){
    cost=(b*bc)+(w*wc);
   
}else if(bc>=(wc+z)){
    bc=wc+z;
    cost=b*bc+w*wc;
   
}else if(wc>=(bc+z)){
    wc=bc+z;
    cost=b*bc+w*wc;
   
}else{
    cost=(b*bc)+(w*wc);
}
        printf("%ld\n",cost);
    }
    
    
  


    return 0;
}