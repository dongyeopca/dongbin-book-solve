import sys
sys.setrecursionlimit(int(100000))

r,c = map(int,input().split())
board = [list(input()) for _ in range(r)]

dx = [-1,1,0,0]
dy = [0,0,-1,1]

#방문 노드를 스택에 담아서 체크?
check_list = [board[0][0]]
maximum = 0
def dfs(x,y,depth):
    global maximum
    maximum = max(maximum,depth)
    for i in range(4):
        nx = x+dx[i]
        ny = y+dy[i]
        if 0<=nx<r and 0<=ny<c:
            if board[nx][ny] not in check_list:
                check_list.append(board[nx][ny])
                dfs(nx,ny,depth+1)
                check_list.remove(board[nx][ny])

dfs(0,0,1)
print(maximum)


