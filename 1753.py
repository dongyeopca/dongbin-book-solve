import sys
import heapq
INF = int(1e9)
input = sys.stdin.readline

v,e = map(int,input().split())
k = int(input())

graph = [[] for _ in range(v+1)]
distance = [INF]*(v+1)
distance[k] = 0
for _ in range(e):
    a,b,c = map(int,input().split())
    graph[a].append([b,c])

def dijkstra(k):
    q = []
    heapq.heappush(q,[0,k])
    while q:
        dist,now = heapq.heappop(q)
        if distance[now]<dist:
            continue
        for i in graph[now]:
            cost = dist + i[1]
            if cost<distance[i[0]]:
                distance[i[0]]=cost
                heapq.heappush(q,[cost,i[0]])

dijkstra(k)
for i in range(1,v+1):
    if distance[i]==INF:
        print("INF")
    else:
        print(distance[i])

