import sys
from collections import deque

input = sys.stdin.readline

queue = deque()
n = int(input())
board = [list(input().rstrip()) for _ in range(n)]

visited = [[0]*n for _ in range(n)]
dx = [-1,1,0,0]
dy = [0,0,-1,1]
count = 0

def bfs(x,y):
    queue.append([x,y])
    visited[x][y] = 1
    while queue:
        x,y = queue.popleft()
        for k in range(4):
            nx = x+dx[k]
            ny = y+dy[k]
            if -1<nx<n and -1<ny<n and board[nx][ny]==board[x][y] and visited[nx][ny]==0:
                queue.append([nx,ny])
                visited[nx][ny] = 1
    
for i in range(n):
    for j in range(n):
        if visited[i][j]== 0:
            bfs(i,j)
            count+=1
            print(count)

print(count,end=" ")

for i in range(n):
    for j in range(n):
        if board[i][j]=="G":
            board[i][j]="R"

count = 0
visited = [[0]*n for _ in range(n)]

for i in range(n):
    for j in range(n):
        if visited[i][j]== 0:
            bfs(i,j)
            count+=1
print(count)

