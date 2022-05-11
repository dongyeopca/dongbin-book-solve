import queue
import sys
from collections import deque

#처음 아기 상어 크기 2
#자신의 크기보다 큰 물고기 칸 못감
#같은 크기는 지나갈순 있지만 먹진못함

#먹을수 있는 고기가 1마리보다 많으면 가장 가까운 물고기
#같은 거리가 여러개라면 가장 위/가장 왼쪽

# 이동하기 전에 먹을수 있는 물고기의 좌표 확인
# 좌표를 y축 기준 정렬 그다음 x축 기준 정렬
# 해당 좌표로 이동
# 물고기를 먹고 레벨업 하면 다시한번 먹을 수 있는 물고기
# 좌표 확인
# 해당 과정 반복

input = sys.stdin.readline
n = int(input())
board = []
for _ in range(n):
    board.append(list(map(int,input().rstrip().split())))

shark_size = 2
time = 0
dx = [0,0,-1,1]
dy = [1,-1,0,0]
cnt_fish = 0
eat_cnt = 0
fish_pos = []
shark_y,shark_x=0,0
for i in range(n):
    for j in range(n):
        if 0<board[i][j]<7:
            cnt_fish+=1
            fish_pos.append([i,j])
        elif board[i][j]==9:
            shark_y,shark_x = i,j
board[shark_y][shark_x]=0

def bfs(shark_x,shark_y):
    queue = deque([[shark_y,shark_x,0]])
    dist_list = []
    visited = [[False]*n for _ in range(n)]
    visited[shark_y][shark_x]=True
    min_dist = int(1e9)
    while queue:
        y,x,dist = queue.popleft()
        for i in range(4):
            nx = x+dx[i]
            ny = y+dy[i]
            if -1<nx<n and -1<ny<n and not visited[ny][nx]:
                if board[ny][nx] <=shark_size:
                    visited[ny][nx]=True
                    if visited[ny][nx]<shark_size:
                        min_dist = dist
                        dist_list.append([dist+1,ny,nx])
                    if dist+1<=min_dist:
                        queue.append([ny,nx,dist+1])
        if dist_list:
            dist_list.sort()
            return dist_list[0]
        else:
            return False
while cnt_fish:
    result = bfs(shark_x,shark_y)
    if not result:
        break
    shark_y,shark_x = result[1],result[2]
    time += result[0]
    eat_cnt+=1
    cnt_fish-=1
    if eat_cnt == shark_size:
        shark_size+=1
        eat_cnt=0
    board[shark_y][shark_x]=0

print(time)
