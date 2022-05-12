import sys
from collections import deque
input = sys.stdin.readline
n = 10
board = [list(map(int,input().rstrip().split())) for _ in range(10)]
check = [list(map(int,input().rstrip().split())) for _ in range(10)]
#개미가 이동한 경로는 9로 표시
#더이상 이동할 수 없거나 먹이(2)에 다다르면 중단
#오른쪽으로 이동하다가 갈수 없으면 아래쪽

x,y = 1,1
while True:
    #현재 좌표가 먹이이면 중단
    if board[x][y] == 2:
        break
    else:
        #그게 아니면 지나온길 9로 표시
        board[x][y]=9
    #우측이 벽이 아니면 한칸 이동
    if board[x][y+1]!=1:
        y+=1
    #안되면 아래로 이동
    elif board[x+1][y]!=1 :
        x+=1
    #둘다 안되면 중단
    else:
        break

if board == check:
    print('True')
else:
    print('Yes')
