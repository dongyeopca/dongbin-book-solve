import sys

a,b = map(int,input().split())
dp = [0]*int(1e5)
answer = 0
# def fibo(n):
#     try:
#         if dp[n]:
#             return dp[n]
#     except:
#         dp.append(fibo(n-1)+fibo(n-2))
#         return dp[n]

def fibo(n):
    dp[0]=0
    dp[1]=1
    for i in range(2,n+1):
        dp[i] = dp[i-1]+dp[i-2]
    return dp[n]
for i in range(a,b+1):
    if dp[i]==0:
        answer+=fibo(i)
    else:
        answer+=dp[i]

print(answer%int(1e9))