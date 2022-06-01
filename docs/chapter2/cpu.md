# cup
## gcc

gcc 是编译器。
make 是个工具，通过 makefile 调度 gcc 编译。

```shell
gcc -o cpu cpu.c -Wall
```

`-Wall` 选项意思是编译后显示所有警告。

`-W` 选项类似 `-Wall`，会显示警告，但是只显示编译器认为会出现错误的警告。

## include

#include 通过相对路径引库

## main 函数

main 函数参数
main (argc,argv)

- argc arguments counter
- argv arguments value/vector

argc 执行文件本身也被计为一个参数

argc 参数个数

## exit 函数

stdlib.h

> void exit(int status)

status − This is the status value returned to the parent process.

## fprintf

stdio.h

In the C Programming Language, the fprintf function writes formatted output to stream.

Syntax
The syntax for the fprintf function in the C Language is:

int fprintf(FILE *stream, const char *format, ...);

## printf

In the C Programming Language, the printf function writes a formatted string to the stdout stream.

Syntax
The syntax for the printf function in the C Language is:

int printf(const char \*format, ...);

字符串 "%s"
数值型 "%d"

## stderr

stdout 输出到 buffer 中，换行才会输出到 console

stderr 只会输出到 console 不会保存到磁盘
