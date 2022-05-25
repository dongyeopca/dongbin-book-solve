import sys
from collections import deque
import copy

input = sys.stdin.readline

n = int(input())
indegree = [0]*(n+1)
graph = [[] for _ in range(n+1)]
time = [0]*(n+1)

for i in range(1,n+1):
    data = list(map(int,input().split()))
    time[i] = data[0]
    for j in data[1:-1]:
        indegree[i] += 1
        graph[j].append(i)

#graph에는 선수 과목 정보
#now는 i를 위한 선수과목
def toplogy_sort():
    q = deque()
    result = copy.deepcopy(time)

    for i in range(1,n+1):
        if indegree[i]==0:
            q.append(i)
    while q:
        now = q.popleft()
        for i in graph[now]:
            result[i] = max(result[i],result[now]+time[i])
            indegree[i]-=1
            if indegree[i]==0:
                q.append(i)
    for i in range(1,n+1):
        print(result[i])

toplogy_sort()