#include <stdio.h>
#include <stdlib.h>

//Multiplicação de dois números naturais com função recursiva
//através de somas sucessivas (Ex.:6∗4 =4 + 4 + 4 + 4 + 4 + 4).

int multiplica(int a, int b){
    if (b==0) return 0;
    else return a + multiplica(a,b-1);
}

int main(){
    int num1, num2;
    printf("Entre com um numero: ");
    scanf ("%d",&num1);
    printf("Entre com outro numero: ");
    scanf ("%d",&num2);
    
    int resultado = multiplica(num1,num2);
    printf("%d X %d = %d",num1,num2,resultado);
    printf("\n");
    return 0;
}