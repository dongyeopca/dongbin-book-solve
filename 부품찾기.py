import sys
input = sys.stdin.readline

n = int(input())
arr = list(map(int,input().rstrip().split()))
m = int(input())
rearr = list(map(int,input().rstrip().split()))

arr.sort()
def binary_search(arr,target,start,end):
    while start<=end:
        mid = (start+end)//2
        if arr[mid]==target:
            return mid
        elif target>arr[mid]:
            start = mid+1
        else:
            end = mid-1
    return

for i in rearr:
    if binary_search(arr,i,0,n-1):
        print("yes",end=" ")
    else:
        print("no",end=" ")
    