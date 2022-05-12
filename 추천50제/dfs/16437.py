# import sys
# input = sys.stdin.readline
# n = int(input())
# #연결 노드 정보와 해당 노드에 속한 양,늑대 수
# board = [[0,0,0] for _ in range(n+1)]
# for i in range(2,n+1):
#     animal,ammount,connected = input().rstrip().split()
#     board[i][0] = animal
#     board[i][1] = int(ammount)
#     board[i][2] = int(connected)


# answer = 0
# def dfs(i,sum):
#     global answer
#     if sum<0:
#         return
#     if i==1:
#         answer+=sum
#         return
#     if board[i][0]=="W":
#         temp = sum-board[i][1]
#         if board[i][1]-sum<0:
#             board[i][1]==0
#         else:
#             board[i][1]-=sum
#         sum = temp
#     dfs(board[i][2],sum)

# for i in range(2,n+1):
#     if board[i][0]=="S":
#         dfs(board[i][2],board[i][1])
    
# print(answer)


import sys
sys.setrecursionlimit(int(1e8))
input = sys.stdin.readline

n = int(input())
board = [[] for _ in range(n+1)]
node = [[],[0,0]]

for i in range(n-1):
    animal,amount,connected = input().rstrip().split()
    board[int(connected)].append(i+2)
    node.append([animal,int(amount)])

def dfs(i):
    if node[i][0]=="W":
        result =0
    else:
        result = node[i][1]
    #리프노드
    if len(board[i])==0:
        if node[i][0]=="S":
            return node[i][1]
        else:
            return 0
    
    for x in board[i]:
        result += dfs(x)
    if node[i][0]=="W":
        if result < node[i][1]:
            node[i][1]-=result
            result = 0
        else:
            result -= node[i][1]
            node[i][1]=0
    return result
print(dfs(1))

