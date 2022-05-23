# import sys
# INF = int(1e9)
# input = sys.stdin.readline

# n,m = map(int,input().split())
# graph = [[INF]*(n+1) for _ in range(n+1)]

# for _ in range(m):
#     a,b,c = map(int,input().split())
#     graph[a][b]=c
#     graph[b][a]=c

# x,y = map(int,input().split())

# for k in range(1,n+1):
#     for a in range(1,n+1):
#         for b in range(1,n+1):
#             graph[a][b] = min(graph[a][b],graph[a][k]+graph[k][b])

# distance = graph[1][x]+graph[x][y]+graph[y][n]

# if distance>=INF:
#     print(-1)
# else:
#     print(distance)
#플로이드 와샬로는 시간초과

import sys
import heapq
INF = int(1e9)
input = sys.stdin.readline

n,m = map(int,input().split())
graph = [[] for _ in range(n+1)]

for _ in range(m):
    a,b,c = map(int,input().split())
    graph[a].append((b,c))
    graph[b].append((a,c))

x,y = map(int,input().split())
def dijkstra(start):
    distance = [INF]*(n+1)
    distance[start]=0
    q = []
    heapq.heappush(q,(0,start))
    while q:
        dist,now = heapq.heappop(q)
        if distance[now]<dist:
            continue
        for i in graph[now]:
            cost = dist+i[1]
            if cost<distance[i[0]]:
                distance[i[0]]=cost
                heapq.heappush(q,(cost,i[0]))
    return distance

dist1 = dijkstra(1)[x]+dijkstra(x)[y]+dijkstra(y)[n]
dist2 = dijkstra(1)[y]+dijkstra(y)[x]+dijkstra(x)[n]
answer = min(dist1,dist2)
if answer>=INF:
    print(-1)
else:
    print(answer)

