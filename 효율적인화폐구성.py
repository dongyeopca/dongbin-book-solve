import sys

input = sys.stdin.readline
n,m = map(int,input().split())
money = []
for _ in range(n):
    money.append(int(input()))
dp = [1e9]*(m+1)
dp[0]=0
for i in range(n):
    for j in range(money[i],m+1):
        if dp[j-money[i]]!=1e9:
            dp[j]= min(dp[j],dp[j-money[i]]+1)

if dp[m] == 1e9:
    print(-1)
else:
    print(dp[m])

