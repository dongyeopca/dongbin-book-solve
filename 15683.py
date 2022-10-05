#1번은 4가지 방향중(상,하,좌,우) 선택
#2번은 2가지방향(상하,좌우)
#3번은 4가지 방향중 선택하지 않을 방향 선택
#4번은 선택지 없음
#사각지대의 최소 크기를 구하여라

import sys
input = sys.stdin.readline
n,m = map(int,input().rstrip().split())
board = []
for _ in range(n):
    board.append(list(map(int,input().rstrip().split())))
#1번 4가지 방향 탐색 0이 가장 많은 부분으로 선택
dx =[1]#상,하,좌,우
dy = [0,0,-1,1]
for i in range(n):
    for j in range(m):
        if board[i][j]==1:
            #direction 1
            #direction 2
            #direction 3
            #direction 4
                

        elif board[i][j]==2:
            #direction 1,2
            #direction 2,4
        elif board[i][j]==3:
            #direction 1,3
            #direction 1,4
            #direction 2,3
            #direction 2,4
        elif board[i][j]==4:
            #direction 2,3,4
            #direction 1,3,4
            #direction 1,2,4
            #direction 1,2,3
        elif board[i][j]==5:
            #direction 1,2,3,4

def dfs(x,y,counter,direction):
    if x<0 or x>n or y<0 or y>m or board[x][y]==6:
        return counter
    
