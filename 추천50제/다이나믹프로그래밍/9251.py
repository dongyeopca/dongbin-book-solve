import sys
input = sys.stdin.readline

string_a = input().rstrip()
string_b = input().rstrip()

dp = [[0]*(len(string_b)+1) for _ in range(len(string_a)+1)]

for i in range(len(string_a)):
    for j in range(len(string_b)):
        if string_a[i] == string_b[j]:
            dp[i+1][j+1] = dp[i][j]+1
        else:
            dp[i+1][j+1] = max(dp[i+1][j],dp[i][j+1])

print(dp[len(string_a)][len(string_b)])