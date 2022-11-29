import sys
from collections import deque
input = sys.stdin.readline

Infinity = 1e9
n = int(input())
intersection = {}
board = []
city = [[Infinity]*(n+1) for _ in range(n+1)]

for root in range(1,n+1):
    connect = list(map(int,input().split()))
    leaf = connect[1:-1]
    intersection[root] = len(leaf)
    board.append(leaf)
for i in range(n):
    for node in board[i]:
        city[i+1][node] = intersection[node]

for i in range(1,n):
    for j in range(1,n):
        if i==j:
            city[i][j]=0


for k in range(1,n+1):
    for i in range(1,n+1):
        for j in range(1,n+1):
            if city[i][j]>city[i][k]+city[k][j]:
                city[i][j]=city[i][k]+city[k][j]

answer = 0
for i in range(1,n+1):
    for j in range(1,n+1):
        if city[i][j]!=Infinity:
            answer = max(answer,city[i][j]-intersection[j]+1)
print(answer)
