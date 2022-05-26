import sys
sys.setrecursionlimit(1e9)
n = int(input())

graph = [list(map(int,input().split())) for _ in range(n)]

dp = [[0]*n for _ in range(n)]
dx = [1,-1,0,0]
dy = [0,0,-1,1]

def dfs(x,y):
    if dp[x][y]!= 0:
        return dp[x][y]
    dp[x][y]=1
    for k in range(4):
        nx = x+dx[k]
        ny = y+dy[k]
        if -1<nx<n and -1<ny<n and graph[nx][ny]>graph[x][y]:
            dp[x][y] = max(dp[x][y],dfs(nx,ny)+1)
    return dp[x][y]

result = 0
for i in range(n):
    for j in range(n):
        result = max(result,dfs(i,j))
print(result)
