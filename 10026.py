import sys
from copy import deepcopy
input = sys.stdin.readline
sys.setrecursionlimit(int(1e9))


n = int(input())
board = [list(input().rstrip()) for _ in range(n)]

#적록색약이 아닌사람이 봤을대 구역의 개수/ 적록색약인 사람이 ㅗ밨을댸 구역의 수

#적록색약의 경우 빨강초록 구분안됨

#파랑만 구분이냐 전부 구분이냐로 풀면되겠네

a_dic = {"R":0,"G":0,"B":0}
b_dic = {"R":0,"B":0}
dx = [1,-1,0,0]
dy = [0,0,-1,1]
def dfs(x,y,copy_board,check_color):
    copy_board[x][y]=0
    for i in range(4):
        nx = x+dx[i]
        ny = y+dy[i]
        if -1<nx<n and -1<ny<n and copy_board[nx][ny]==check_color:
            dfs(nx,ny,copy_board,check_color)

for i in a_dic.keys():
    copy_board = deepcopy(board)
    count = 0
    for a in range(n):
        for b in range(n):
            if copy_board[a][b]==i:
                dfs(a,b,copy_board,i)
                count+=1
    a_dic[i]=count

for a in range(n):
    for b in range(n):
        if board[a][b]=="G":
            board[a][b]="R"
for i in b_dic.keys():
    count = 0
    for a in range(n):
        for b in range(n):
            if board[a][b]==i:
                dfs(a,b,board,i)
                count+=1
    b_dic[i]=count

a = 0
b = 0
for i in a_dic.values():
    a+=i
print(a,end=" ")
for i in b_dic.values():
    b+=i
print(b)

