#c는 0이 아닌 정수이고 e지수는 9을 포함한 양의 정수
#첫번째 줄은 항의 갯수
#그다음 t줄에는 각 항의 계수와 지수
n = int(input())
total = []
for _ in range(n):
    t = int(input())
    for _ in range(t):
        total.append(list(map(int,input().split())))

total.sort(key=lambda x:-x[1])
answer = []
for value in total:
    if answer:
        if answer[-1][-1] == value[-1]:
            answer[-1][0]+=value[0]
        else:
            if answer[-1][0]==0:
                answer.pop(0)
            answer.append(value)
    else:
        answer.append(value)

if len(answer)==1 and answer[-1][0]==0: 
    print(0,0)
else:
    print(len(answer))
    for i in answer:
        c,e = i
        print(c,e)
        


