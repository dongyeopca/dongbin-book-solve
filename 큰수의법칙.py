#큰수의 법칙 
#m번 더하여 가장 큰수를 만드는 법칙
#같은 인덱그 값 연속해서 k번 사용
n,m,k = map(int,input().split())
num_list = list(map(int,input().split()))
num_list.sort()
answer = 0
biggest = max(num_list)
biggest_count = num_list.count(biggest)
if biggest_count>1:
    answer = biggest*m
else:
    for i in range(1,m+1):
        if i%(k+1)==0:
            answer+= num_list[-2]
        else:
            answer+=biggest
print(answer)
