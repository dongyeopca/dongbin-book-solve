# 0 2 => 빈줄 2개
# 1 3 0 => 1,3 번쨰에 수목
# row정보가 주어지고 이것을 column기준으로 출력하여야함

#raw에서 0이 아닌 value이면 value가 컬럼의 인덱스
#해당 Raw의 인덱스가 컬럼의 값

n = int(input())
raw = [[] for _ in range(n+1)]
column = [[] for _ in range(n+1)]
raw_index = 1
while True:
    try:
        r = list(map(int,input().split()))
        if r[-1]==0:
            for i in r[:-1]:
                column[i].append(raw_index)
            raw_index+=1
        else:
            raw_index+=r[-1]

    except:
        break

counter = 0
print(n)
for c in column[1:]:
    if not c:
        counter+=1
    else:
        if counter:
            print(0,counter)
            counter = 0
        print(" ".join(map(str,c)),0)
if counter:
    print(0,counter)