import sys
input = sys.stdin.readline

n,m = map(int,input().split())

parent = [0]*(n+1)
for i in range(1,n+1):
    parent[i] = i

edges = []
for _ in range(m):
    a,b,cost = map(int,input().split())
    edges.append((cost,a,b))

edges.sort()

def find_parent(parent,a):
    if parent[a]!=a:
        parent[a] = find_parent(parent,parent[a])
    return parent[a]

def union_parent(parent,a,b):
    a = find_parent(parent,a)
    b = find_parent(parent,b)
    if a<b:
        parent[b] = a
    else:
        parent[a] = b

answer = 0
cut = 0
for edge in edges:
    cost,a,b = edge
    if find_parent(parent,a)!=find_parent(parent,b):
        union_parent(parent,a,b)
        answer+=cost
        cut = cost
print(answer-cut)