# import sys
# input = sys.stdin.readline

# n,m,x,y,k = map(int,input().split())
# dice = {'1':0,'2':0,'3':0,'4':0,'5':0,'6':0}

# #즉 6사분면 값과 1사분면 값이 중요
# #좌로 굴릴떄
# # 1 => 3
# # 2 => 2
# # 3 => 6
# # 4 => 1
# # 5 => 5
# # 6 => 4
# #우로 굴릴떄
# # 1= > 4
# # 2 => 2
# # 3 => 1
# # 4 => 6
# # 5 => 5
# # 6 => 3
# board = []
# for _ in range(n):
#     board.append(list(map(int,input().split())))
# order = list(map(int,input().split()))
# cur = [y,x]
# for i in order:
#     if i==1:
#         cur = [cur[0],cur[1]+1]
#         if dice['6']==0:
#             dice['6'] = board[cur[0]][cur[1]]
#     elif i==2:
#         pass
#     elif i==3:
#         pass
#     else:
#         pass