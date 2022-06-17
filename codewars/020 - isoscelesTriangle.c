/*Escreva um programa que imprima um triângulo isósceles (de asteriscos),
 de cateto dado pelo utilizador. Por exemplo, se cateto=5, deverá ver-se
*
**
***
****
*****

*/

#include <stdio.h>
#include <stdlib.h>

int main(){
    int cateto, a, i = 1;
    printf("digite o valor do cateto: ");
    scanf("%d", &cateto);
    while (i <= cateto){
        for (a = 1; a <= i; a++){
            printf("*");
        }
        printf("\n");
        i++;
    }
}