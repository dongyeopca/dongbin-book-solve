# 상담은 남은 시간이 가장 긴 사람 순서대로 시작
# 예상 시간의 1/2까지 상담(소수점은 버림) 후 남은 상담시간을 가지고 대기실로감
# 남은 상담시간이 10분 이하인 경우 한번에 모두 상담을 마치고 떠남
# 남아있는 상담 예상 시간이 같은 사람이 여러명이면 일렬번호가 빠른 사람이 선택

# 도착 시간, 일렬번호, 상담 예상 시간 입력

from queue import PriorityQueue

q = PriorityQueue()

n = int(input())
enter_list = []
# for _ in range(n):
#     enter_list.append(list(map(int,input().split())))

for _ in range(n):
    enter_time,id,cunsulting_time = list(map(int,input().split()))
    q.put([-cunsulting_time,id,enter_time])


def solution():
    current_time = 30
    answer = []
    while True:
        temp = []
        while q.qsize()!=0:
            cunsulting_time,id,enter_time = q.get()
            #입장시간이 현재시간보다 빠른애가 있으면
            if enter_time<=current_time:
                cunsulting_time*=-1
                if cunsulting_time<=10:
                    current_time+=cunsulting_time
                    answer.append(id)
                    if len(answer)==n:
                        return answer
                else:
                    cunsult = int(cunsulting_time/2)
                    left_time = cunsulting_time-cunsult
                    current_time+=cunsult
                    q.put([-left_time,id,current_time])
                while temp:
                    q.put(temp.pop())
                break
            else:
                temp.append([cunsulting_time,id,enter_time])
        #현재 시간보다 입장시간이 빠른애가 없으면
        if q.qsize()==0:
            temp.sort(key= lambda x:x[2])
            current_time = temp[0][2]
            while temp:
                q.put(temp.pop())

answer = solution()
for i in answer:
    print(i)

