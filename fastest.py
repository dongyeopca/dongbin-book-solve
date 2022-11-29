# 자동차는 평균 시속 30km
# 분속 0.5
# 2분에 1km
# 모든 거리 km로 ,시간은 m단위로 계싼

# 가장 빠른 길중 가장 긴 시간

# 모든노드에서 다른 모든 노드로 가는 최단거리 => 플로이드 와샬

graph = {}
N = int(input())
Infinity = 1e9
board = [[Infinity]*(N+1)]
intersection = {}
temp = []
for _ in range(N):
    connection = input().split()[:-1]
    graph[connection[0]] = {}
    intersection[connection[0]] = len(connection[1:])/2
    temp.append(connection)

print(intersection)
#초기화
for i in graph.keys():
    for j in graph.keys():
        graph[i][j] = Infinity

for connection in temp:
    root = connection[0]
    vertex = connection[1:len(connection):2]
    distance = connection[2:len(connection):2]
    graph[root][root] = 0
    for i in range(len(vertex)):
        graph[root][vertex[i]] = int(distance[i])*2+intersection[vertex[i]]

#플로이드 와샬
for k in graph:
    for i in graph:
        for j in graph:
            if graph[i][j]>graph[i][k]+graph[k][j]:
                graph[i][j]=graph[i][k]+graph[k][j]
answer = 0
for i in graph:
    for j in graph:
        if graph[i][j]!= Infinity:
            answer = max(answer,graph[i][j]-intersection[j])

print(answer)