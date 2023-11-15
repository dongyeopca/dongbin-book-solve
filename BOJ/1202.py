import heapq
import sys
jewerly = []
backpack = []

input = sys.stdin.readline
n, k = map(int,input().split())
for _ in range(n) :
  jewerly.append(list(map(int,input().split())))

for _ in range(k) :
  backpack.append(int(input()))

backpack.sort()

jewerly.sort(key=lambda x:x[0])
result =0
q = []
cur = 0
for i in range(k) :
  while cur < n and jewerly[cur][0] <= backpack[i]:
    heapq.heappush(q,-jewerly[cur][1])
    cur+=1
  
  if len(q) > 0 :
    result += -heapq.heappop(q)
  
print(result)
