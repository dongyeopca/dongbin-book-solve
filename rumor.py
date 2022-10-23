
#k번째 날에 소문을 듣게 되는 모든 회원을 출력하여라
#방문했던 노드 즉 이미 소문을 들었던 애도 다시 듣는가?? 이게 문제에 안나와있음!
from collections import deque
n,s,k = map(int,input().split())#회원수,진원지 회원번호,소문이 도착하는 날

connect =[[] for _ in range(n+1)]
for _ in range(n):
    #x가 전달한 모든 회원의 번호
    temp = list(map(int,input().split()))
    connect[temp[0]].append(temp[1:-1])

stack = deque([s])#첫날 스택을 채우고 다 비울떄까지 돌리고 
counter = 0
while stack or counter==k:
    start = stack.popleft()
    for i in connect[start]:
        stack.append(i)
    

