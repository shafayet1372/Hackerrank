// Online C compiler to run C program online
#include <stdio.h>

int main() {
    int n;
    int i,high=0,low=0;
    scanf("%d",&n);
    int score[n];
    for(i=0;i<n;i++){
        
        scanf("%d",&score[i]);
        
        
    }
   int highscore[1];
   highscore[0]=score[0];
   for(i=1;i<n;i++){
       if(score[i]>highscore[0]){
           high++;
           highscore[0]=score[i];
       }
       
       }
         highscore[0]=score[0];
        for(i=1;i<n;i++){
       if(score[i]<highscore[0]){
           low++;
           highscore[0]=score[i];
       }
       
       }
    printf("%d ",high);
    printf("%d",low);
    return 0;
}