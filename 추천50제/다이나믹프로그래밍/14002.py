n = int(input())
dp = [1]*n
array = list(map(int,input().split()))

for i in range(n):
    for j in range(i):
        if array[i]>array[j]:
            dp[i] = max(dp[j]+1,dp[i])

print(max(dp))
check = max(dp)
answer = []
for i in range(n-1,-1,-1):
    if check==dp[i]:
        answer.append(array[i])
        check-=1

answer.reverse()
print(*answer)
