# Olympiad > 한국정보올림피아드 > KOI 1996 > 초등부 1번
# 단순 bfs구현
import queue
import sys
from collections import deque
n = int(sys.stdin.readline())
board = []
answer = []
for _ in range(n):
    board.append(list(map(int,sys.stdin.readline().rstrip())))

dx = [0,0,-1,1]
dy = [1,-1,0,0]

for i in range(n):
    for j in range(n):
        if board[i][j]==1:
            queue = deque()
            queue.append([i,j])
            board[i][j]=0
            counter = 1
            while queue:
                y,x = queue.popleft()
                for k in range(4):
                    nx = x+dx[k]
                    ny = y+dy[k]
                    if -1<nx<n and -1<ny<n and board[ny][nx]==1:
                        queue.append([ny,nx])
                        board[ny][nx]=0
                        counter+=1
            answer.append(counter)
print(len(answer))
for i in sorted(answer):
    print(i)



