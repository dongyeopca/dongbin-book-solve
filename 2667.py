import sys
input = sys.stdin.readline

n = int(input())
board = [list(map(int,list(input().rstrip()))) for _ in range(n)]

dx = [1,-1,0,0]
dy = [0,0,-1,1]
answer = []
def dfs(x,y,count):
    board[x][y] = 0
    for i in range(4):
        nx = x+dx[i]
        ny = y+dy[i]
        if -1<nx<n and -1<ny<n and board[nx][ny]!=0:
            count = dfs(nx,ny,count+1)
    return count

for i in range(n):
    for j in range(n):
        if board[i][j]!=0:
            answer.append(dfs(i,j,1))

print(len(answer))
answer.sort()
for i in answer:
    print(i)