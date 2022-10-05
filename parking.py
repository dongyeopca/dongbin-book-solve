#가장왼쪽부터 빈칸에 주차
#만일 주차공간이 곽차면 현 공간 2배
#남은 차의 수가 주차공간의 1/3 이하가 되면 주차공간을 반으로
#반으로 줄일때 왼쪽으로 몰아서
from math import fabs
import sys
input = sys.stdin.readline
def size_down(param):
    new_park = []
    for i in param:
        if i!=0:
            new_park.append(i)
    return new_park

k,n = map(int,input().split())
default_size = k
park = []
counter =0
for _ in range(n):
    car = int(input())
    if car<0:
        try:
            find = park.index(abs(car))
            park[find]=0
            counter-=1
            if k>default_size and counter<=int(k/3):#주차된 차가 주차공간의 1/3보다 작으면
                park= size_down(park)
                k=int(k/2)
        except:
            continue
    else:
        if counter==k:
            k = k*2
        flag = True
        for i in range(len(park)):
            print(park)
            if park[i]==0:
                park[i]=car
                flag=False
                break
        if flag:
            park.append(car)
        counter+=1

print(park)
for i in range(len(park)):
    if park[i]!=0:
        print(i+1,park[i])



