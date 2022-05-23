import sys
import heapq
input = sys.stdin.readline
INF = int(1e9)
#여우는 일정한속도
#늑대는 여우 2배,여우 절반,여우 2배,여우 절반으로 달려감

n,m = map(int,input().split())
graph = [[] for _ in range(n+1)]
for _ in range(m):
    a,b,c = map(int,input().split())
    graph[a].append((b,c*2))
    graph[b].append((a,c*2))

fox_distance = [INF]*(n+1)
#빠르게 도착 index 0 느리게도착 index 1
wolf_distance = [[INF]*(n+1) for _ in range(2)]

def fox_dijkstra(start):
    fox_distance[start]=0
    q = []
    heapq.heappush(q,(0,start))

    while q:
        dist,now = heapq.heappop(q)
        if fox_distance[now]<dist:
            continue
        for i in graph[now]:
            cost = dist+i[1]
            if cost<fox_distance[i[0]]:
                fox_distance[i[0]] = cost
                heapq.heappush(q,(cost,i[0]))

def wolf_dijkstra():
    wolf_distance[1][1]=0
    q = []
    heapq.heappush(q,(0,1,False))

    while q:
        dist,now,flag = heapq.heappop(q)
        if flag and wolf_distance[0][now]<dist:
            continue
        elif not flag and wolf_distance[1][now] <dist:
            continue

        for i in graph[now]:
            if flag:
                cost = dist+i[1]*2
                if cost<wolf_distance[1][i[0]]:
                    wolf_distance[1][i[0]]=cost
                    heapq.heappush(q,(cost,i[0],False))
            else:
                cost = dist+i[1]//2
                if cost<wolf_distance[0][i[0]]:
                    wolf_distance[0][i[0]] = cost
                    heapq.heappush(q,(cost,i[0],True))

fox_dijkstra(1)
wolf_dijkstra()
answer = 0
for i in range(1,n+1):
    if fox_distance[i]<min(wolf_distance[0][i],wolf_distance[1][i]):
        answer+=1
print(answer)