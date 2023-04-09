
def solution():
    n,m = map(int,input().split())
    board = []
    dp = [[1]*m for _ in range(n)]
    maxValue = 0
    answer = []
    for _ in range(n):
        board.append(list(map(int,list(input()))))

    for i in range(n):
        for j in range(m):
            if board[i][j]==1:
                dp[i][j]=0

    for i in range(1,n):
        for j in range(m-2,-1,-1):
            if dp[i][j]!=0:
                dp[i][j]= min(dp[i-1][j]+1,dp[i-1][j+1]+1,dp[i][j+1]+1)
                maxValue = max(maxValue,dp[i][j])
    if maxValue==0:
        print(0,0)
        return
    
    for i in range(n):
        for j in range(m):
            if dp[i][j]==maxValue:
                answer.append([j+1,n-i])

    answer.sort()
    print(maxValue,len(answer))
    for i in answer:
        print(i[0],i[1])
    
solution()
