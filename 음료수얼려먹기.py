from collections import deque
#bfs
n,m = map(int,input().split())
board = [[0] for _ in range(n)]
for i in range(n):
    board[i] = list(map(int,input()))
# dx = [0,0,1,-1]
# dy = [1,-1,0,0]
# queue = deque()
# flag = False
# answer=0
# for i in range(n):
#     for j in range(m):
#         if board[i][j]==0:
#             queue.append([i,j])
#             flag = True
#         if flag:
#             answer+=1
#             while queue:
#                 y,x =queue.popleft()
#                 for k in range(4):
#                     nx = x+dx[k]
#                     ny = y+dy[k]
#                     if -1<nx<m and -1<ny<n and board[ny][nx]==0:
#                         queue.append([ny,nx])
#                         board[ny][nx]=1
#         flag = False

# print(answer)

#dfs
def dfs(x,y):
    if x<=-1 or x>=n or y<=-1 or y>=m:
        return False
    if board[x][y] == 0:
        board[x][y] = 1
        dfs(x-1,y)
        dfs(x,y-1)
        dfs(x+1,y)
        dfs(x,y+1)
        return True
    return False
answer = 0
for i in range(n):
    for j in range(m):
        if dfs(i,j)==True:
            answer+=1
print(answer)