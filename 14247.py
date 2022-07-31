import sys
input = sys.stdin.readline

n = int(input())
hi = list(map(int,input().rstrip().split()))
ai = list(map(int,input().rstrip().split()))
ai.sort()
answer = sum(hi)

for i in range(n):
    answer+=ai[i]*i

print(answer)