
#include <stdio.h>

int main()
{
    int s,t,a,b,m,n,i,result,result1,app_count=0,oranges_count=0;
    
    scanf("%d %d",&s,&t);
    scanf("%d %d",&a,&b);
    scanf("%d %d",&m,&n);
    int apple[m];
    int oranges[n];
    
    for(i=0;i<m;i++){
        scanf("%d",&apple[i]);
    }
     for(i=0;i<n;i++){
        scanf("%d",&oranges[i]);
    }
    int newApple[m];
    int newOrange[n];
    for(i=0;i<m;i++){
        result=a+apple[i];
        newApple[i]=result;
    }
     for(i=0;i<n;i++){
        result1=b+oranges[i];
        newOrange[i]=result1;
    }
    
    for(i=0;i<m;i++){
        if(newApple[i]>=s && newApple[i]<=t){
            app_count++;
        }
    }
     for(i=0;i<n;i++){
        if(newOrange[i]>=s && newOrange[i]<=t){
            oranges_count++;
        }
    }
    printf("%d\n",app_count);
    printf("%d",oranges_count);
    return 0;
}