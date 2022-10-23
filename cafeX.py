#모든 좌석이 비어있을때는 1번에 손님 배정
#환형거리 기준으로 기존의 손님과 최대한 멀리 떨어진 좌석에 배치
#환형거리가 최대인 값이 여러개이면 좌석 번호가 더 빠른 곳에 배정
#카페가 만원이면 새로 들어온 손님은 바로 떠남

n,k = map(int,input().split())#n은 카페의 좌석
cafe = [0]*100000
seated = []
answer = []

def locate_cal(target,gap):
    if target+gap>n:
        return target+gap-n
    else:
        return target+gap

def calculate():# 좌석 착석시키기
    seated.sort()
    temp = 0
    max_seated_distance = 1
    length = len(seated)
    for i in range(length):
        if i==length-1:
            distance = seated[0]+n-seated[i]
            if distance>max_seated_distance:
                if distance%2==0:
                    return locate_cal(seated[i],int(distance/2))
                else:
                    return min(locate_cal(seated[i],int(distance/2)),locate_cal(seated[i],int(distance/2)+1))
        else:
            distance = seated[i+1]-seated[i]
            if distance>max_seated_distance:
                temp = seated[i]+int(distance/2)
                max_seated_distance = distance
    return temp

for _ in range(k):
    C = int(input())
    if cafe[C]:#0이 아니면
        seated.remove(cafe[C])
        cafe[C]=0
    else:
        if len(seated)==n:
            continue
        if len(seated)==0:
            seated.append(1)
            answer.append([C,1])
            cafe[C]=1
        else:
            c_seat = calculate()
            seated.append(c_seat)
            cafe[C]=c_seat
            answer.append([C,c_seat])
            

for i in answer:
    print(i[0],i[1])

        
# for _ in range(k):
#     C = input()
#     try:#입장기록이 있으면
#         if cafe[C][1]=="IN":
#             seated.remove(cafe[C][0])# 고객이 나가면 앉은좌석 비워줌
#             valiable = calculate()
#             cafe[C]=[[],"OUT"]
#         else:
#             if len(seated)==n:
#                 continue
#             if not seated:
#                 cafe[C]=[1,"IN"]
#                 seated.append(1)
#                 answer.append([C,1])
#                 continue
#             #재입장
#             if not valiable:
#                 valiable = calculate()
#             c_seat = valiable.pop(0)
#             seated.append(c_seat)
#             cafe[C]=[c_seat,"IN"]
#             answer.append([C,c_seat])
#     except:#없으면
#         if len(seated)==n:
#             continue
#         if not seated:
#             cafe[C]=[1,"IN"]#최초 좌석 배정
#             seated.append(1)
#             answer.append([C,1])
#         else:
#             if not valiable:
#                 valiable = calculate()
#             c_seat = valiable.pop(0)
#             seated.append(c_seat)
#             cafe[C]=[c_seat,"IN"]
#             answer.append([C,c_seat])


