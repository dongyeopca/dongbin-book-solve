# import sys
# from collections import deque
# m,n,h = map(int,sys.stdin.readline().split())
# board = [[[0] for _ in range(n)] for _ in range(h)]
# queue = deque([])
# for i in range(h):
#     for j in range(n):
#         board[i][j] = list(map(int,sys.stdin.readline().split()))
#         for k in range(m):
#             if board[i][j][k]==1:
#                 queue.append([i,j,k])
# dx = [1,-1,0,0,0,0]
# dy = [0,0,1,-1,0,0]
# dz = [0,0,0,0,1,-1]
# while queue:
#     z,y,x = queue.popleft()

#     for i in range(6):
#         a = x+dx[i]
#         b = y+dy[i]
#         c = z+dz[i]
#         if 0<=a<m and 0<=b<n and 0<=c<h and board[c][b][a]==0:
#             queue.append([c,b,a])
#             board[c][b][a] = board[z][y][x]+1
# day = 0
# for i in board:
#     for j in i:
#         for k in j:
#             if k==0:
#                 print(-1)
#                 exit(0)
#         day = max(day,max(j))
# print(day-1)



# def gcd(x,y):
#     while y:
#         x,y = y,x%y
#     return x

# def lcd(x,y):
#     result = (x*y)//gcd(x,y)
#     return result

# print(lcd(5,8))

n = int(input())
dp = [0]*(n+1)

for i in range(2,n+1):
    dp[i]= dp[i-1]+1
    if i%3 == 0:
        dp[i]= min(dp[i],dp[i//3]+1)
    if i%2 == 0:
        dp[i] == min(dp[i],dp[i//2]+1)
print(dp[n])

