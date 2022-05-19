import sys
input = sys.stdin.readline

#한칸을 선택하면 다음칸은 못먹음
n = int(input())
storage = list(map(int,input().split()))

dp = [0]*(n+1)
dp[1] = storage[0]
dp[2] = max(dp[1],dp[0]+storage[1])
for i in range(3,n+1):
    dp[i] = max(dp[i-1],dp[i-2]+storage[i-1])
print(dp[n])


