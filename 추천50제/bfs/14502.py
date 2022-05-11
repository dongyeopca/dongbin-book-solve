import sys
from collections import deque
import copy
n,m = map(int,sys.stdin.readline().split())
board = []
answer = []
dx = [1,-1,0,0]
dy = [0,0,-1,1]
for _ in range(n):
    board.append(list(map(int,sys.stdin.readline().rstrip().split())))


# 가벽세우고 바이러스 확산=>그다음 안전영역 확인
def wall(cnt):
    if cnt == 3:
        bfs()
        return
    for i in range(n):
        for j in range(m):
            if board[i][j] == 0:
                board[i][j] = 1
                wall(cnt+1)
                board[i][j] = 0

# bfs탐색
def bfs():
    global answer
    counter = 0
    tmp_board = copy.deepcopy(board)
    for i in range(n):
        for j in range(m):
            if tmp_board[i][j]==2:
                queue = deque()
                queue.append([i,j])
                while queue:
                   y,x = queue.popleft()
                   for k in range(4):
                       nx = x+dx[k]
                       ny = y+dy[k]
                       if -1<nx<m and -1<ny<n and tmp_board[ny][nx]==0:
                           queue.append([ny,nx])
                           tmp_board[ny][nx]=2
    for i in range(n):
        counter+=tmp_board[i].count(0)      
    answer.append(counter)
wall(0)
print(max(answer))