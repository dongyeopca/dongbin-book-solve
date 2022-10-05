n = int(input())

#아래 함수는 polyadd는 polyadd.py의 코드를 재활용 하였다.
def polyadd(total,answer):
    for value in total:
        if answer:
            if answer[-1][-1] == value[-1]:
                answer[-1][0]+=value[0]
            else:
                if answer[-1][0]==0:
                    answer.pop()
                answer.append(value)
        else:
            answer.append(value)
    if answer[-1][0]==0:
        answer.pop()
    return answer

#각 항끼리 곱셈을 진행
multiple = 0
for _ in range(n):
    t = int(input())
    temp = []
    for _ in range(t):
        temp.append(list(map(int,input().split())))
    if not multiple:
        multiple = temp
    else:
        multi_temp = []
        for value in multiple:
            for target in temp:
                multi_temp.append([value[0]*target[0],value[-1]+target[-1]])
        multiple = multi_temp

#정렬 후 polyadd실행
multiple.sort(key = lambda x:-x[1])
answer = polyadd(multiple,[])
print(len(answer))
for value in answer:
    print(value[0],value[1])