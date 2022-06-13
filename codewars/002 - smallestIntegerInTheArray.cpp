// Instructions: <br>
// Given an array of integers your solution should find the smallest integer.
// For example:</br>
//     Given [34, 15, 88, 2] your solution will return 2

#include <stddef.h>
int find_smallest_int(int *vec, size_t len){
  int smallestNumber=vec[0];
  for(int i=1; i<len;i++){      // Time Complexity -> O(n) 
      if(vec[i]<smallestNumber){
        smallestNumber = vec[i];
      }
    }
  return smallestNumber;
}