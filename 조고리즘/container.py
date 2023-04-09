# box_ready()// 데이터 준비
# box_size() //전체 박스 개수 확인
# box_comp(i,j)// 로 비교
# box_report( this )//로 결과값 리턴

box = []
rank = []
def box_comp(i,j):
    if i>j:
        return 1
    elif i<j:
        return -1
    else:
        return 0

def box_ready():
    n = 5
    while n:
        n-=1
        box.append(int(input()))
    return


def box_size():
    return len(box)



box_ready()
for i in range(len(box)):
    temp = 0
    for j in range(1,len(box)):
        if box_comp(box[i],box[j])==1:
            temp+=1
    if temp==box_size()-2:
        print(box[i])
    rank.append(temp)
    

print(rank)
