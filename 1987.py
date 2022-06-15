import sys
input = sys.stdin.readline

r,c = map(int,input().split())
board = []
answer = 0
dx = [1,-1,0,0]
dy = [0,0,-1,1]
for _ in range(r):
    board.append(list(input().rstrip()))

def dfs(x,y,visited,count):
    global answer
    answer = max(answer,count)
    if -1<x<r and -1<y<c and visited[ord(board[x][y])-65]==False:
        count+=1
        visited[ord(board[x][y])-65] = True
        for k in range(4):
            dfs(x+dx[k],y+dy[k],visited,count)
        visited[ord(board[x][y])-65] = False
    

dfs(0,0,[False]*26,0)
print(answer)
