import itertools

k = int(input())
standard = list(map(int,input().split()))
foods = []#[a,b,c,d,index]
prices = []# 인덱스에 따른 값
answer = []
for i in range(k):
    food = list(map(int,input().split()))
    prices.append(food.pop())
    food.append(i)
    foods.append(food)

# 최소 기준치를 충족하는 음식 조합을 오름차순 정렬하여 출력하라
# 만약 해당 케이스가 여러개라면 사전순으로 더 빠른 경우를 출력하라

# case1
# 고르는 숫자가 적을수록 가격은 낮아질것이다. 따라서 선택 경우의 수를 늘려가며탐색

for i in range(1,k+1):
    flag = False
    cases = list(itertools.combinations(foods,i))
    for case in cases:#i개를 뽑았을때 가능한 경우 리스트
        temp = standard[:]# 기준값
        for k in range(4):# 각 영양소
            for nutrition in case:
                temp[k]-=nutrition[k]
        if(all(num<=0 for num in temp)):
            answerTemp = []
            totalPrice = 0
            for i in case:
                totalPrice += prices[i[-1]]
                answerTemp.append(i[-1])
            if(answer):
                answerTemp.append(totalPrice)# [선택재료들, 총합가격]
                if(answer[-1][-1]>totalPrice):
                    answer[0] = answerTemp
                elif(answer[-1][-1]==totalPrice):
                    answer.append(answerTemp)
            else:
                answerTemp.append(totalPrice)# [선택재료들, 총합가격]
                answer.append(answerTemp)

if(answer):
    answer.sort()
    target = answer[0][:-1]
    for i in target:
        print(i+1,end=" ")
else:
    print(0)



