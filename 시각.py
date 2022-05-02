n= int(input())
answer=0
for i in range(n+1):
    if str(i).find('3')!=-1:
        answer+=60*60
        continue
    for j in range(60):
        if str(j).find('3')!=-1:
            answer+=60
            continue
        for k in range(60):
            if str(k).find('3')!=-1:
                answer+=1

print(answer)