s = input().split()
checker = []
for i in s:
    hour,minute = list(map(int,i.split(":")))
    checker.append(hour*60+minute)

dic = {}
answer = 0
while True:
    try:
        time,name = input().split()
        hour,minute = list(map(int,time.split(":")))
        time = hour*60+minute
        if time<=checker[0]:
            dic[name]=1
        if time>=checker[1] and time<=checker[2]:
            if dic[name]:
                dic[name]=2
    except:
        break
for i in dic.values():
    if i==2:
        answer+=1
print(answer)