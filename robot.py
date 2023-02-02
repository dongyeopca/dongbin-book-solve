n,t = map(int,input().split())
board = []
dx = [-1,1,0,0]
dy = [0,0,-1,1]#상,하,좌,우
Infinity = int(1e9)
for _ in range(n):
    board.append(list(map(int,input().split())))

answer = []

# def bfs(startx,starty,arrow):
#     visited = [[Infinity]*n for _ in range(n)]
#     q = [[startx,starty,0,arrow]]
#     while q:
#         x,y,distance,direction = q.pop(0)
#         for i in range(4):
#             nx = x+ dx[i]
#             ny = y+ dy[i]
#             if -1<nx<n and -1<ny<n and board[nx][ny]!=1:
#                 if direction!=i:#방향이 같지않으면
#                     #회전해서 온 값이 더 크면 지금은 탐색 종료
#                     #해당 부분도 탐색이 필요하다.
#                     if visited[nx][ny]>=distance+t+1:#회전
#                         visited[nx][ny]=distance+t+1
#                         q.append([nx,ny,visited[nx][ny],i])
#                     else:
#                         q.append([nx,ny,visited[nx][ny]+t+1,i])
#                 else:
#                     if visited[nx][ny]>=distance+1:
#                         visited[nx][ny]=distance+1
#                         q.append([nx,ny,visited[nx][ny],i])
#     answer.append(visited[0][n-1])

#     return


# bfs(n-1,0,0)
# bfs(n-1,0,1)
# bfs(n-1,0,2)
# bfs(n-1,0,3)

visited = [[Infinity]*n for _ in range(n)]
def dfs(x,y,distance,direction):
    if x==0 and y==n-1:
        return answer.append(visited[x][y])
    for i in range(4):
        nx = dx[i]+x
        ny = dy[i]+y
        if -1<nx<n and -1<ny<n and board[nx][ny]!=1:
            if direction!=i:
                visited[nx][ny]=distance+t+1
                dfs(nx,ny,distance+t+1,i)
                visited[nx][ny]=Infinity
            else:
                visited[nx][ny]=distance+1
                dfs(nx,ny,distance+1,i)
dfs(n-1,0,0,0)
print(answer)
if min(answer)==Infinity:
    print(-1)
else:
    print(min(answer))
                


#방향을 바꾸면 t초 추가
#bfs로 탐색시 가장 가까운 경우
#but t가 크다면 돌아가는게 더 빠를수도있다