#include <stdio.h>
#include <stdlib.h>
#include <locale.h>
int main(){
  setlocale(LC_ALL, "portuguese");
  int number_1, number_2, dividers;
  printf("Digite dois números:\n");
  scanf("%d %d", &number_1, &number_2);
  for (int n = 2; n <= number_2; n++){
    
    dividers = 0;
    for (int k = 1; k < number_2; k++){
      if ((n % k) == 0) dividers++;
    }
    if (dividers == 2){
      printf("\nO NÚMERO %d é PRIMO\n", n);
    }
  }
  return 0;
}
