def solution(n, times):
    answer = 0
    left = 1
    right = int(1e18)
    while left<=right:
        mid = (left+right)//2
        count = 0
        for i in times:
            count += mid//i
        if count>=n:
            answer = mid
            right = mid-1
        else:
            left = mid+1
    return answer