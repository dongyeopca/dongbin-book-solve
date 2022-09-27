import heapq

n,k = map(int,input().split())
# 방송된 횟수 b가 클수록 인기 순위가 높다
# b가 동일하면 d가 높은쪽이 우선순위
# b와 d가 동일하다면 s가 작은게 우선순위
# 같은 장르의 곡이 순위에서 연속될수없다.
music_list = []
for _ in range(n):
    name,genre,broad,size,download = input().split()
    heapq.heappush(music_list,(-int(broad),-int(download),float(size),name,genre))

sorted_by_condition = []
count = 0
while count != k:
    if sorted_by_condition:
        temp = []
        while True:
            check_value = heapq.heappop(music_list)
            if sorted_by_condition[-1][-1]==check_value[-1]:
                temp.append(check_value)
            else:
                sorted_by_condition.append(check_value)
                count+=1
                for i in temp:
                    heapq.heappush(music_list,i)
                break
    else:
        sorted_by_condition.append(heapq.heappop(music_list))
        count+=1

print(sorted_by_condition[-1][3])
