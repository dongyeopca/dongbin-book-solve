#숫자가 쓰인 카드들이 n,m
n,m = map(int,input().split())
answer = 0
for _ in range(n):
    a = list(map(int,input().split()))
    b = min(a)
    if answer<b:
        answer = b
print(answer)
