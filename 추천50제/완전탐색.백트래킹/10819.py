import sys
import itertools
n = int(sys.stdin.readline())
int_array = list(map(int,sys.stdin.readline().split()))
permutation = list(itertools.permutations(int_array,n))
result = 0
for i in range(len(permutation)):
    cur = 0
    for j in range(n-1):
        cur+=abs(permutation[i][j]-permutation[i][j+1])
    result = max(result,cur)
print(result)
