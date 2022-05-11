import sys
from copy import deepcopy
sys.setrecursionlimit(int(1e9))
input = sys.stdin.readline

n = int(input())
board = []
for _ in range(n):
    board.append(list(map(int,input().rstrip().split())))

max = 0
def dfs(x,y,water):
    if x<0 or y<0 or x>=n or y>=n or copy_board[x][y]<=water or copy_board[x][y]==101:
        return
    else:
        copy_board[x][y]= 101
        dx = [-1,1,0,0]
        dy = [0,0,-1,1]
        for i in range(4):
            dfs(x+dx[i],y+dy[i],water)

for water in range(101):
    copy_board = deepcopy(board)
    count = 0
    for i in range(n):
        for j in range(n):
            if copy_board[i][j]>water and copy_board[i][j]!=101:
                dfs(i,j,water)
                count +=1
    if count>max:
        max = count

print(max)
