#모든 좌석이 비어있을때는 1번에 손님 배정
#환형거리 기준으로 기존의 손님과 최대한 멀리 떨어진 좌석에 배치
#환형거리가 최대인 값이 여러개이면 좌석 번호가 더 빠른 곳에 배정
#카페가 만원이면 새로 들어온 손님은 바로 떠남

n,k = map(int,input().split())#n은 카페의 좌석
cafe = {}#현재 카페이 있는 고객
seated = []
#딕셔너리로 있는지 탐색! O(1)
#나갔다가 다시 들어오면 그것도 추가해줘야하넹

def locate_cal(target,gap):
    if target+gap>n:
        return target+gap-n
    else:
        return target+gap
def calculate():# 좌석 착석시키기
    max_seated_distance = 0
    target_i = 0
    length = len(seated)
    for i in range(length):
        #환형거리 => min(j-i, i+n-j) if j>i
        if i==length-1:#마지막이면
            distance = seated[0]+n-seated[-1]
            if distance>max_seated_distance:
                if distance%2==0:
                    return locate_cal(seated[-1],int(distance/2))
                else:
                    return min(locate_cal(seated[-1],int(distance/2)),locate_cal(seated[-1],int(distance/2)+1))
        else:
            distance = seated[i+1]-seated[i]
            if distance>max_seated_distance:
                max_seated_distance = distance
                target_i=i
    return int((seated[target_i]+seated[target_i+1])/2)

#seated = [[좌석번호,고객],[좌석번호,고객]]
for _ in range(k):
    C = input()
    try:#입장기록이 있으면
        if cafe[C][1]=="IN":
            seated.remove(cafe[C][0][-1])# 고객이 나가면 앉은좌석 비워줌
            cafe[C]=[cafe[C][0],"OUT"]
        else:
            if len(seated)==n:
                continue
            if not seated:
                cafe[C]=[cafe[C][0]+[1],"IN"]
                print(C,cafe[C][0][-1])
                continue
            c_seat = calculate()
            seated.append(c_seat)
            seated.sort()
            cafe[C]=[cafe[C][0]+[c_seat],"IN"]
            print(C,cafe[C][0][-1])
    except:#없으면
        if len(seated)==n:
            continue
        if not seated:
            cafe[C]=[[1],"IN"]#최초 좌석 배정
            seated.append(1)
        else:
            c_seat = calculate()
            seated.append(c_seat)
            seated.sort()
            cafe[C]=[[c_seat],"IN"]
        print(C,cafe[C][0][-1])