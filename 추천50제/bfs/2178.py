import queue
import sys
from collections import deque
n,m = map(int,sys.stdin.readline().split())
board = []
for i in range(n):
    board.append(list(map(int,sys.stdin.readline().rstrip())))

queue = deque()
queue.append([0,0])
dx = [0,0,-1,1]
dy = [1,-1,0,0]
while queue:
    y,x = queue.popleft()
    for i in range(4):
        nx = x+dx[i]
        ny = y+dy[i]
        if -1<nx<m and -1<ny<n and board[ny][nx]==1:
            board[ny][nx] = board[y][x]+1
            queue.append([ny,nx])
print(board[n-1][m-1])