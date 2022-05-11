import queue
import sys
from collections import deque
n = int(sys.stdin.readline())
board = []
for _ in range(n):
    board.append(list(map(int,sys.stdin.readline().split())))

#각 섬마다 좌표 모두 저장후
#완탐으로 좌표별 거리 빼서 최단 값 구하기

dx = [0,0,-1,1]
dy = [1,-1,0,0]
stack = []
answer = []
for i in range(n):
    for j in range(n):
        if board[i][j]==1:
            temp = [[i,j]]
            queue = deque([[i,j]])
            while queue:
                x,y = queue.popleft()
                for k in range(4):
                    nx = x+dx[k]
                    ny = y+dy[k]
                    if -1<nx<n and -1<ny<n and board[nx][ny]==1:
                        queue.append([nx,ny])
                        board[nx][ny]=0
                        temp.append([nx,ny])
            stack.append(temp)

for i in range(len(stack)):
    for j in range(i+1,len(stack)):
        for k in stack[i]:
            for z in stack[j]:
                answer.append(abs(k[0]-z[0])+abs(k[1]-z[1]))
print(min(answer)-1)
