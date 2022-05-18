# import sys
# input = sys.stdin.readline

# n,m = map(int,input().split())
# height = list(map(int,input().split()))
# cutter=0
# while True:
#     sum = 0
#     for h in height:
#         if h-cutter>0:
#             sum+=h-cutter
#         else:
#             pass
#     if sum<m:
#         break
#     cutter+=1
# print(cutter-1)

import sys
input = sys.stdin.readline

n,m = list(map(int,input().split(' ')))
array = list(map(int,input().split()))

start = 0
end = max(array)

result = 0
while(start<=end):
    total = 0
    mid = (start+end)//2
    for x in array:
        if x>mid:
            total+=x-mid
    if total<m:
        end = mid-1
    else:
        result = mid
        start =mid+1
print(result)