
#include <stdio.h>

int main()
{
    int n;
    scanf("%d",&n);
    int i=0;
    int x,y,z,a,b,c;
    for(i=0;i<n;i++){
        
        scanf("%d %d %d",&x,&y,&z);
        if(z>x && z>y){
            a=z-x;
            b=z-y;
            if(b<a){
                printf("Cat B\n");
            }
            if(a==b){
                 printf("Mouse C\n");
            }
            if(a<b){
                printf("Cat A\n");
            }
            
        }else if(x>z && y<z){
            a=x-z;
            b=z-y;
            if(a==b){
                printf("Mouse C\n");
            }
             if(b<a){
                printf("Cat B\n");
            }
            if(a<b){
                printf("Cat A\n");
            }
        }else if(y>z && x<z){
            
            a=z-x;
            b=y-z;
            if(a==b){
                printf("Mouse C\n");
            }
              if(b<a){
                printf("Cat B\n");
            }
            if(a<b){
                printf("Cat A\n");
            }
        }else if(x>z && y>z){
             a=x-z;
            b=y-z;
               if(a==b){
                printf("Mouse C\n");
            }
              if(b<a){
                printf("Cat B\n");
            }
            if(a<b){
                printf("Cat A\n");
            }
        }else if(x==y && x==z && y==z){
            printf("Mouse C\n");
        }
        else if(x==z){
          printf("Cat A\n");
    }
    else if(y==z){
          printf("Cat B\n");
    }

    }
    return 0;
}