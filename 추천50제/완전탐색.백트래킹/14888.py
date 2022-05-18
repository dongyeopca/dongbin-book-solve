import sys
input = sys.stdin.readline

n = int(input())
array = list(map(int,input().split()))
operator = list(map(int,input().split()))

answer = []
def dfs(i,number):
    if i==n:
        answer.append(number)
        return
    if operator[0]>0:
        operator[0]-=1
        dfs(i+1,number+array[i])
        operator[0]+=1

    if operator[1]>0:
        operator[1]-=1
        dfs(i+1,number-array[i])
        operator[1]+=1

    if operator[2]>0:
        operator[2]-=1
        dfs(i+1,number*array[i])
        operator[2]+=1

    if operator[3]>0:
        operator[3]-=1
        dfs(i+1,int(number/array[i]))
        operator[3]+=1

dfs(1,array[0])
print(max(answer))
print(min(answer))