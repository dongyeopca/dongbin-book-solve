import sys
from collections import deque

input = sys.stdin.readline

n,m = map(int,input().split())
board = [[] for _ in range(n+1)]

def bfs(mid):
    queue = deque()
    queue.append(f1)
    visit[f1]=True
    while queue:
        start = queue.popleft()
        if start == f2:
            return True
        for nx,nc in board[start]:
            if visit[nx]==False and mid<=nc:
                queue.append(nx)
                visit[nx]=True
    return False

for i in range(m):
    a,b,c = map(int,input().split())
    board[a].append([b,c])
    board[b].append([a,c])
f1,f2 = map(int,input().split())

start = 0
end = int(1e10)
while start<=end:
    visit = [False for _ in range(n+1)]
    mid = (start+end)//2
    if bfs(mid):
        start =mid+1
    else:
        end = mid-1

print(end)

