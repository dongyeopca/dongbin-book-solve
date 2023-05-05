l = int(input())
n = int(input())
Infinity = 1e9
dp = [[0]*n for _ in range(l+1)]

for i in dp:
    i.append(Infinity)

dp[0][n]=0
temp = []

for _ in range(n):
    temp.append(int(input()))
temp.sort(reverse=True)

for i in range(l+1):
    for idx,k in enumerate(temp):
        if(i-k<0):
            continue
        if(dp[i][n]>dp[i-k][n]):
            dp[i] = dp[i-k][:]
            dp[i][n]=dp[i-k][n]+1
            dp[i][idx]+=1

if(dp[l][n]==Infinity):
    print(-1)
else:
    for i in dp[l][:n]:
        print(i,end=" ")