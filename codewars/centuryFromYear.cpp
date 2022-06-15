#include <iostream>
#include <stdio.h>
#include <stdlib.h>

using namespace std;

int centuryFromYear(int year){
  int century = 0;
  for (int i = 0; i < year; i++){
    year = year - 100;
    century = century + 1;
  }
  return century;
}

int main(){
  int century = centuryFromYear(2022);
  cout << "Century: " << century << endl;
}