import sys
input = sys.stdin.readline

n = int(input())
board = [[0]*(n+1) for _ in range(n+1)]
for i in range(1,n+1):
    temp = list(map(int,input().rstrip().split()))
    for j in range(1,n+1):
        board[i][j] = temp[j-1]
print(board)

