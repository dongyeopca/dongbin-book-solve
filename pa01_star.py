#핵심 포인트는 시작점과 끝점이다.
import heapq

n = int(input())
vertex = []
end_point= [0]*n
q = []
check_end_overlap = set()
for i in range(n):
    start,height,width = map(int,input().split())
    end = start+width
    vertex.append([start,i,height,-1])#시작점
    vertex.append([end,i,height,1])#끝점
    end_point[i] = end
#빠른 좌표순, 시작점 우선, 높이 우선
vertex.sort(key= lambda x : (x[0],x[3],-x[2]))

inflection = []

cur = 0
for i in range(len(vertex)):
    x,index,height,flag = vertex[i]

    if flag==-1:#시작점일경우
        heapq.heappush(q,[-height,end_point[index]])
        if cur<height:
            inflection.append([x,cur])
            inflection.append([x,height])
            cur = height
    else:#끝점일경우
        check_end_overlap.add(x)
        while q:
            if q[0][1] not in check_end_overlap:
                break
            heapq.heappop(q)

        if q:#두번째로 높은 건물이 있을때
            if -q[0][0]!=cur:
                inflection.append([x,height])
                cur = -q[0][0]
                inflection.append([x,cur])
        else:#이어지는 건물이 없을때
            inflection.append([x,height])
            cur = 0
            inflection.append([x,cur])

#x좌표가 다르고 높이가 같으면 flat
#높이가 다르고 x좌표가 같으면 vertical
k = int(input())
for _ in range(k):

    x,y = map(int,input().split())
    flag = False
    for i in range(0,len(inflection),2):
        x_point,y_point = inflection[i]
        if x<x_point:#변곡지점 x[i]보다 작은위치이면
            flag = True
            if i==0:
                print("over")
                break
            if y<y_point:
                print("under")
            elif y>y_point:
                print("over")
            else:
                print("on")
            break
        elif x==x_point:
            flag = True
            height_s,height_e=sorted([y_point,inflection[i+1][1]])
            if y<height_s:
                print("under")
            elif height_s<=y<=height_e:
                print("on")
            else:
                print("over")
            break
        else:
            continue
    if not flag:
        print("over")

