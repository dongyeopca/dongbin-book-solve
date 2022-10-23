import sys
from collections import deque
input = sys.stdin.readline

m,n = map(int,input().rstrip().split())

island = []
while True:
    t = input().rstrip()
    if t=='-1':
        break
    island.append(t)

island = list(map(int,"".join(island)))
board = [[] for _ in range(n)]
cnt = 0
index = 0
for i in island:
    board[index].append(i)
    cnt+=1
    if cnt==m:
        index+=1
        cnt=0

dx = [-1,1,0,0]
dy = [0,0,-1,1]
def bfs(x,y,counter):
    q = deque([[x,y]])
    board[x][y]=1
    while q:
        sx,sy = q.popleft()
        for i in range(4):
            nx = sx+dx[i]
            ny = sy+dy[i]
            if -1<nx<n and -1<ny<m and board[nx][ny]!=1:
                q.append([nx,ny])
                board[nx][ny]=1
                counter+=1
    return counter


counter = bfs(0,0,1)

print(m*n-counter)