from collections import deque
import sys

input = sys.stdin.readline
n,m = map(int,input().split())
want = list(map(int,input().split()))
#전체 길이에서 뒤가 가까우면 3 앞이 가까우면 2로 돌리면됨

count = 0
while len(want)!=0:
    if want[0]==1:
        n-=1
        want.pop(0)
        for i in range(len(want)):
            want[i] = want[i]-1
    else:
        if want[0]<= (n//2)+1:
            for i in range(len(want)):
                want[i] = want[i]-1
                if want[i]<1:
                    want[i] = want[i]+n
            count+=1
        else:
            for i in range(len(want)):
                want[i] = want[i]+1
                if want[i]>n:
                    want[i]= want[i]-n
            count+=1

print(count)
