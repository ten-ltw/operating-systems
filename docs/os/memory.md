# memory

## 编译指令错误

> error: no input files

`gcc -o memory -Wall` 没有正确指定入口文件

## 函数名写错

> error: implicit declaration of function 'getid' is invalid in C99 [-Werror,-Wimplicit-function-declaration]

显示不是可用函数

## 强制类型转换错误

> cast to smaller integer type 'unsigned int' from 'int \*' [-Wpointer-to-int-cast]

```c
  int *p = malloc(sizeof(int));
  assert(p != NULL);
  printf("(%d) memory address of p: %08x\n", getpid(), (unsigned)p);
```

64 位操作系统 int 占 8 位
无符号 int 占 4 位
被切割所以编译 warning
使用 unsigned long 强转
%08x 需要变成 %08lx

## %08lx

x 是 16 进制
d 是 10 进制

内存地址实际上都是 2 进制
