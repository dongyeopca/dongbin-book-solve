import sys
import itertools

input = sys.stdin.readline

n,m = map(int,input().split())
arr = list(map(int,input().split()))
result = 0
combinations = list(itertools.combinations(arr,3))
for i in combinations:
    if sum(i)>m:
        continue
    result = max(result,sum(i))
print(result)