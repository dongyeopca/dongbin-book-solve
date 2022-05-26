n,k = map(int,input().split())
coin = []
INF = 10001
dp = [INF for _ in range(k+1)]
dp[0] = 0
for _ in range(n):
    coin.append(int(input()))

for i in coin:
    for j in range(1,k+1):
        if j-i>=0:
            dp[j] = min(dp[j],dp[j-i]+1)
if dp[k]==INF:
    print(-1)
else:
    print(dp[k])