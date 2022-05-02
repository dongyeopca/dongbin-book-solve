# t = int(input())
# #각 테스트 케이스마다 0과 1이 출력되는 횟수 리턴
# #fibo(0)은 0을 리턴 fibo(1)은 1을리턴
# zero = 0
# one = 0
# def fibonacci(n):
#     if n==0:
#         global zero
#         zero +=1
#         return 
#     if n==1:
#         global one
#         one+=1
#         return
#     else:
#         fibonacci(n-1)
#         fibonacci(n-2)
#         return

# for _ in range(t):
#     n = int(input())
#     fibonacci(n)
#     print(zero,one)
#     zero,one = 0,0

t = int(input())
for _ in range(t):
    zero = [1,0]
    one = [0,1]
    n = int(input())
    for j in range(2,n+1):
        zero.append(zero[j-2]+zero[j-1])
        one.append(one[j-2]+one[j-1])
    print(zero[n],one[n])

