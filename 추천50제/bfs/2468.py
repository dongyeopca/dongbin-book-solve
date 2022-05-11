import sys
from collections import deque
from copy import deepcopy
input = sys.stdin.readline

n = int(input())
board = []
for _ in range(n):
    board.append(list(map(int,input().rstrip().split())))

dx = [0,0,-1,1]
dy = [1,-1,0,0]
answer = []
for water in range(101):
    copy_board = deepcopy(board)
    visited = [[False]*n for _ in range(n)]
    count = 0
    for i in range(n):
        for j in range(n):
            if water<copy_board[i][j] and visited[i][j]==False:
                queue = deque([[i,j]])
                copy_board[i][j]=1
                visited[i][j]=True
                while queue:
                    x,y = queue.popleft()
                    for k in range(4):
                        nx = x+dx[k]
                        ny = y+dy[k]
                        if -1<nx<n and -1<ny<n and water<copy_board[nx][ny] and visited[nx][ny]==False:
                            queue.append([nx,ny])
                            visited[nx][ny]=True
                count+=1
    answer.append(count)
print(max(answer))

    
