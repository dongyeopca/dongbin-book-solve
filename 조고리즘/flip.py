# n = int(input())

# dest = [i for i in range(1,n+1)]

# def multiple(v):
#     return -1*v

# def flipper(arr,start,end):
#     arr[start:end+1] = map(multiple,reversed(arr[start:end+1]))
#     return arr

# def recursion(arr,counter):
#     global answer
#     if counter>2:
#         return
#     for i in range(n):
#         for j in range(n):
#             temp = arr[:]
#             if(dest == flipper(temp,i,j)):
#                 answer = min(answer,counter)
#                 return
#             else:
#                 recursion(temp,counter+1)

# for _ in range(5):
#     answer = 3
#     arr = list(map(int,input().split()))
#     recursion(arr,1)
#     if(answer==1):
#         print('one')
#     elif(answer==2):
#         print('two')
#     else:
#         print('over')


# def flip(test, a, b):
#     test[a:b+1] = [-x for x in reversed(test[a:b+1])]

# def count_flips(n, test,dest):
#     count = 0
#     while dest != test:
#         if count>2: return 3
#         for i in range(n):
#             if dest[i] != test[i]:
#                 a = i
#                 break
#         for i in range(n-1, -1, -1):
#             if dest[i] != test[i]:
#                 b = i
#                 break
#         flip(test, a, b)
#         count += 1
#     return count

# # 테스트 케이스 입력 받기
# n = int(input())
# for _ in range(5):
#     dest = list(range(1, n+1))
#     test = list(map(int, input().split()))
#     result = count_flips(n, test,dest)
#     if result==1:
#         print('one')
#     elif result==2:
#         print('two')
#     else:
#         print('over')
## 뒤집으면 -1 곱하고 순서도 뒤바뀜

# Math.min()
def count_flips(n, test, dest):
    count = 0
    print(test)
    while(True):
        if(count>2):
            return 3
        if(test == dest):
            return count
        flag = True
        for i in range(n):#앞에서
            if dest[i] != test[i]:
                if(dest[i]*-1==test[i]):
                    flag = False
                    test[i]*=-1
                    count+=1
                else:
                    a = i
                break
        for i in range(n-1, -1, -1):#뒤에서
            if dest[i] != test[i]:
                if(dest[i]*-1==test[i]):
                    flag = False
                    test[i]*=-1
                    count+=1
                else:
                    b = i
                    break
        if flag:
            test[a:b+1] = [-x for x in reversed(test[a:b+1])]
            count += 1
        print(test)

# 테스트 케이스 입력 받기
n = int(input())
for _ in range(5):
    dest = list(range(1, n+1))
    test = list(map(int, input().split()))
    result = count_flips(n, test, dest)
    if result == 1:
        print('one')
    elif result == 2:
        print('two')
    else:
        print('over')
