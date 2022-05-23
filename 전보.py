import sys
import heapq
input = sys.stdin.readline
INF = int(1e9)
#c에서 보낸 메시지를 받게 되는 도시의 개수와 도시들이 모두 메시지를 받는 데까지 걸리는 시간

n,m,c = map(int,input().split())
graph = [[] for _ in range(n+1)]
for _ in range(m):
    x,y,z = map(int,input().split())
    graph[x].append((y,z))
distance = [INF]*(n+1)

def dijkstra(start):
    q = []
    heapq.heappush(q,(0,start))
    distance[start]=0
    while q:
        dist,now = heapq.heappop(q)
        if distance[now]<dist:
            continue
        for i in graph[now]:
            cost = dist+i[1]
            if cost<distance[i[0]]:
                distance[i[0]]=cost
                heapq.heappush(q,(cost,i[0]))
dijkstra(c)

count = 0
max_distance = 0
for i in distance:
    if i != INF:
        count+=1
        max_distance= max(max_distance,i)

print(count-1,max_distance)
