import sys
input = sys.stdin.readline

n = int(input())
cards = list(map(int,input().split()))
m = int(input())
check = list(map(int,input().split()))
#순차탐색시 O(n) => 시간초과
#이분탐색 필요띠.
cards.sort()
answer = []
for i in check:
    start = 0
    end = n-1
    while start<=end:
        mid = (start+end)//2
        if cards[mid]< i:
            start = mid+1
        else:
            end = mid-1
            result = mid
    if cards[result] == i:
        answer.append(1)
    else:
        answer.append(0)

print(' '.join(list(map(str,answer))))