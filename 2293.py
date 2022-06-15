n,k = map(int,input().split())
m_type = []
for _ in range(n):
    m_type.append(int(input()))

dp=[0 for _ in range(k+1)]
dp[0]=1
#k원이 되도록 하는 경우의 수
for i in m_type:
    for j in range(1,k+1):
        if j-i>=0:
            dp[j] += dp[j-i]
print(dp[k])
