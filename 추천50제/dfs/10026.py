import sys
from copy import deepcopy
sys.setrecursionlimit(int(1e9))
input = sys.stdin.readline

n = int(input())
board = []
color_list = ["R","G","B"]
for _ in range(n):
    board.append(list(input().rstrip()))

#적록색약일 경우 파랑과 다른색으로 구분
#적록색약이 아닐 경우 3가지 색상으로 구분


def dfs(x,y,color):
    dx = [-1,1,0,0]
    dy = [0,0,-1,1]
    if x<0 or y<0 or x>=n or y>=n or visited[x][y]!=False or board[x][y]!=color:
        return False
    visited[x][y]=True
    if board[x][y]=="G":
        board[x][y]="R"
    for k in range(4):
        nx = x+dx[k]
        ny = y+dy[k]
        dfs(nx,ny,color)
    return True

count = 0
color_obstacle = 0
visited = [[False]*n for _ in range(n)]
for color in color_list:
    for i in range(n):
        for j in range(n):
            if dfs(i,j,color):
                count+=1

visited = [[False]*n for _ in range(n)]
for color in ["R","B"]:
    for i in range(n):
        for j in range(n):
            if dfs(i,j,color):
               color_obstacle+=1

print(count,color_obstacle)      
    
