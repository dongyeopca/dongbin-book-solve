# k = int(input())
# move = []
# def movement(cur,next):
#     if cur[0]==next[0]:
#         if(cur[1]<next[1]):
#             for i in range(cur[1]+1,next[1]+1):
#                 move.append([cur[0],i])
#         else:
#             for i in range(cur[1]-1,next[1]-1,-1):
#                 move.append([cur[0],i])
#     else:
#         if(cur[0]<next[0]):
#             for i in range(cur[0]+1,next[0]+1):
#                 move.append([i,cur[1]])
#         else:
#             for i in range(cur[0]-1,next[0]-1,-1):
#                 move.append([i,cur[1]])
# for count in range(k):
#     x,y = map(int,input().split())
#     if move:
#         movement(move[-1],[x,y])
#     else:
#         move.append([x,y])
# #사이클 완성을 위해
# movement(move[-1],move[0])
# question = list(map(int,input().split()))
# cycle = len(move)-1

# for i in question:
#     print(move[i%cycle][0],move[i%cycle][1])

# # n초후 robot의 좌표값을 리턴해줘야함
# # 꼭짓점의 좌표값이 k개 주어짐

# #직관적 => 매초 이동한 모든 좌표값을 리스트에 넣는다.

k = int(input())
inflection = []
inflection_time = [0]
for _ in range(k):
    inflection.append(list(map(int,input().split())))
inflection.append(inflection[0])

for i in range(1,k+1):
    inflection_time.append(inflection_time[-1]+abs(inflection[i][1]-inflection[i-1][1])+abs(inflection[i][0]-inflection[i-1][0]))

counter = 0
c1 = 0#t
c2 = inflection_time[int(k/2)-1]


t = int(input())%inflection_time[-1]

for _ in range(t):
    c1+=1
    c2-=1
    if c1==c2 or abs(c1-c2)==1:
        counter +=1
    if c1==inflection_time[-1]:
        c1=0
    if c2==0:
        c2=inflection_time[-1]
    
def find_time(t):
    for i in range(1,k+1):
        if t<=inflection_time[i]:
            if inflection[i-1][0]==inflection[i][0]:#이전꺼랑 x좌표가 같으면
                if inflection[i-1][1]>inflection[i][1]:#이전께 더 높이있으면
                    return [inflection[i][0],inflection[i-1][1]-(t-inflection_time[i-1])]
                else:
                    return [inflection[i][0],inflection[i-1][1]+(t-inflection_time[i-1])]
            else:#y좌표 같으면
                if inflection[i-1][0]>inflection[i][0]:#이전께 더 오른쪽이면
                    return [inflection[i-1][0]-(t-inflection_time[i-1]),inflection[i][1]]
                else:
                    return [inflection[i-1][0]+(t-inflection_time[i-1]),inflection[i][1]]
            break
if counter%2==0:
    c1 = find_time(c1)
    c2 = find_time(c2)
else:
    c1 = find_time(c2)
    c2 = find_time(c1)

print(c1[0],c1[1])
print(c2[0],c2[1])
