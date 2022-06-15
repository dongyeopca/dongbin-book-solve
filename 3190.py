import sys
from collections import deque
input = sys.stdin.readline

#몸길이 늘려 머리는 다음칸에
#사과가 있으면 사과 없어짐
#사과가 없으면 꼬리칸 비워줌

n = int(input())#보드크기
k = int(input())#사과개수
board = [[0]*n for _ in range(n)]
for i in range(k):
    a,b = map(int,input().split())
    board[a-1][b-1] = 1

board[0][0] = 2
#상좌하우
dx = [-1,0,1,0]
dy = [0,1,0,-1]
direction = 1
def change(direction,x):
    if x=="L":
        direction = (direction-1)%4
    else:
        direction  = (direction+1)%4
    return direction


l = int(input())#뱀의 방향변환

x,y = 0,0
snake= deque([[x,y]])
time = 1
times = {}
for i in range(l):
    t,c = input().split()
    times[int(t)] = c

while True:
    x = x+dx[direction]
    y = y+dy[direction]
    if -1<x<n and -1<y<n and board[x][y]!=2:
        if board[x][y]!=1:
            tailx,taily = snake.popleft()
            board[tailx][taily] = 0#꼬리제거
        snake.append([x,y])
        board[x][y]=2
        if time in times.keys():
            direction = change(direction,times[time])
        time+=1
    else:
        break

print(time)


