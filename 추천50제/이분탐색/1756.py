import sys
from collections import deque
input = sys.stdin.readline

d,n = map(int,input().split())
oven = list(map(int,input().split()))
pizza = deque(list(map(int,input().split())))

for i in range(d-1): #정렬
    if oven[i] < oven[i+1]:
        oven[i+1]=oven[i]

start = 0
end = d
flag = True
for i in range(n):
    p_pizza = pizza.popleft()
    result = 0
    while start<=end:
        mid = (start+end)//2
        if oven[mid]<p_pizza:
            end = mid-1
        else:
            result = mid
            start = mid+1
    start = 0
    end = result
    if len(pizza)!=0 and result==0:
        flag = False
        print(0)
        break
if flag:
    print(result+1)