#include <stdio.h>
#include <stdlib.h>
#include <sys/time.h>
#include <assert.h>
#include "./common.h"

int main(int argc, char *argv[])
{
  printf("%d\n", argc);
  if (argc != 2)
  {
    fprintf(stderr, "usage: cpu <string>\n");
    exit(1);
  }
  char *string = argv[1];
  while (1)
  {
    Spin(1);
    printf("%s", string);
    printf("%s", string);
    printf("%s\n", string);
  }
  return 0;
}