import sys

input = sys.stdin.readline

n = int(input())
board = []
for _ in range(n):
    board.append(list(map(int,input().rstrip())))


count = 0
def dfs(x,y):
    global house
    if x<0 or x>=n or y<0 or y>=n or board[x][y]==0:
        return False
    if -1<x<n and -1<y<n and board[x][y]==1:
        board[x][y]=0
        house+=1
    dfs(x-1,y)
    dfs(x+1,y)
    dfs(x,y-1)
    dfs(x,y+1)
    return


answer = []
for i in range(n):
    for j in range(n):
        if board[i][j]==1:
            house = 0
            dfs(i,j)
            count+=1
            answer.append(house)
print(count)
answer.sort()
for i in answer:
    print(i)
            

