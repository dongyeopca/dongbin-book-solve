def quick_sort(a):
    if len(a) <= 1:
        return a
    num = a[len(a) // 2]
    less, equal, more = [], [], []
    for n in a:
        if n < num:
            less.append(n)
        elif n > num:
            more.append(n)
        else:
            equal.append(n)
    return quick_sort(less) + equal + quick_sort(more)

from sys import stdin
input_1 = list(map(int, stdin.readline().split()))
input_len = len(input_1)

while True:
    if input_len == 80:
        A = list(map(int, stdin.readline().split()))
        if A[-1] == -9:
            input_1.append(-9)
            break
        for i in A:
            input_1.append(i)
        input_len = len(A)
    else:
        input_1.append(int(stdin.readline()))
        break

input_1.pop()


input_2 = list(map(int, stdin.readline().split()))
input_len2 = len(input_2)

while True:
    if input_len2 == 80:
        A = list(map(int, stdin.readline().split()))
        if A[-1] == -9:
            input_2.append(-9)
            break
        for i in range(len(A)):
            input_2.append(A[i])
        input_len2 = len(A)
    else:
        input_2.append(int(stdin.readline()))
        break

input_2.pop()
#print(input_2)

list_0 = quick_sort(input_1)
length = len(list_0)

L = [[0]*length]

for i in range(length):
    L[0][i] = list_0[i]

if length % 2 == 1:
    mid = length//2 + 1
else:
    mid = length//2

idx1 = 1
rotation = 0

while True:
    list_left = []
    list_right = []
    list_sh = [0] * length

    for i in range(mid-1):
        list_left.append(L[idx1-1][i])
        list_right.append(L[idx1-1][mid+i])
    list_left.append(L[idx1-1][mid-1])

    if length % 2 == 0:
        list_right.append(L[idx1-1][-1])

    idx2 = 0
    for i in range(len(list_right)):
        list_sh[idx2] = list_left[i]
        idx2 += 1
        list_sh[idx2] = list_right[i]
        idx2 += 1
    if length % 2 == 1:
        list_sh[idx2] = list_left[-1]
    L.append(list_sh)

    if L[idx1] == L[0]:
        rotation = idx1
        break
    else:
        idx1 += 1

ans1 = -1
ans2 = -1
check = 0
check2 = 0


for i in range(rotation):
    if L[i] == input_1 and check==0:
        ans1 = i
        check += 1
    elif L[i] == input_2 and check2==0:
        ans2 = i
        check2 += 1

m = max(ans1,ans2)
n = min(ans1,ans2)

d = rotation - m + n

if ans1 == -1 or ans2 == -1:
    print("NOT")
else:
    print(min(m-n,d))