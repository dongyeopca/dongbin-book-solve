import sys
n = int(input())
set_list = list(map(int,input().split()))
dp = [1]*n

for i in range(n):
    for j in range(i):
        if set_list[j]<set_list[i]:
            dp[i] = max(dp[j]+1,dp[i])

print(max(dp))