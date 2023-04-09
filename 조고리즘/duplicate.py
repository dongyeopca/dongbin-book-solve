import math
n = int(input())
sum = 0
s = 10001
multiple = 1

for i in range(n+2):
    cur = int(input())
    s = min(s,cur)
    sum+=cur
    multiple*=cur

origin_sum = 0

for i in range(s,s+n):
    origin_sum+=i
    multiple//=i

two_sum = sum-origin_sum
two_multiple = multiple
two_minus = int(math.sqrt(two_sum**2-4*two_multiple))#a-b

x = (two_sum-two_minus)//2
y = x+two_minus

if x<y:
    print(x)
    print(y)
else:
    print(y)
    print(x)