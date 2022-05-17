# import sys
# import copy
# from collections import deque
# input = sys.stdin.readline

# n,m = map(int,input().split())
# board = [list(map(int,input().split())) for _ in range(n)]
# chicken = 1e9



# def bfs(board):
#     dx = [-1,1,0,0]
#     dy = [0,0,-1,1]
#     chicken_distance = 0
#     for i in range(n):
#         for j in range(n):
#             if board[i][j]==1:
#                 visited = [[False]*n for _ in range(n)]
#                 result = 1e9
#                 queue = deque([[i,j,1]])
#                 while queue:
#                     x,y,distance = queue.popleft()
#                     for k in range(4):
#                         nx = x+dx[k]
#                         ny = y+dy[k]
#                         if -1<nx<n and -1<ny<n and visited[nx][ny]==False and board[nx][ny]!=1:
#                             if board[nx][ny] == 2:
#                                 result= min(result,distance)
#                             visited[nx][ny]=True
#                             queue.append([nx,ny,distance+1])
#                 chicken_distance+=result
#                 print(result)
#     print(chicken_distance)
#     return chicken_distance


# def delete_chicken(delete_number,counter,board):
#     global chicken
#     if counter==delete_number:
#         chicken = min(bfs(board),chicken)
#         return
#     for i in range(n):
#         for j in range(n):
#             if board[i][j]==2:
#                 board[i][j]=0
#                 delete_chicken(delete_number,counter+1,board)
#                 board[i][j]=2

# chicken_counter = 0
# for i in board:
#     chicken_counter+=i.count(2)

# # for i in range(chicken_counter-m,chicken_counter):
# #     print(f'{i}지우기')
# #     delete_chicken(i,0,board)
# #     print(chicken)

# delete_chicken(chicken_counter-m,0,board)

# print('결과값',chicken)


# #폐업 시키지 않을 치킨집은 최대 m개
# #그러면 폐업 시킬 치킨집은?
                            


# #치킨집 몇개 폐업시켰을 떄 가장 작을까?
# #dfs로 지워봄

# #치킨거리를 구할떄는 집을 기준으로 가장 가까운 치킨집

import sys
from itertools import combinations

input = sys.stdin.readline
n,m = map(int,input().split())
board = [list(map(int,input().rstrip().split())) for _ in range(n)]

home = []
chicken_house = []

def distance_cal(a,b):
    return abs(a[0]-b[0])+abs(a[1]-b[1])

for i in range(n):
    for j in range(n):
        if board[i][j]==1:
            home.append([i,j])
        elif board[i][j]==2:
            chicken_house.append([i,j])

chicken_combi = list(combinations(chicken_house,m))

answer = 1e9
for chicken in chicken_combi:
    stack = []
    for house in home:
        house_distance=1e9
        for each in chicken:
            house_distance = min(house_distance,distance_cal(house,each))
        stack.append(house_distance)
    answer = min(answer,sum(stack))
print(answer)
