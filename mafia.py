# 자신의 자식 노드가 많을 수록 순위가 높다
# 자식 노드의 수가 같으면 root노드에 가까울수록 순위가 높다
# 위 두 조건이 같으면 이름의 사전 순서가 빠를 수록 높다

import copy

n = int(input())
dict = {}
answer = {}
for _ in range(n-1):
    child,parent = input().split()
    try:
        dict[parent].append(child)
    except:
        dict[parent] = [child]
    try:
        if dict[child]:
            pass
    except:
        dict[child] = []

rootdict = copy.deepcopy(dict)
rootNode = [0,0]


for key in rootdict:
    for child in rootdict[key]:
        rootdict[key].extend(dict[child])     
    if len(rootdict[key])>rootNode[1]:
        rootNode[1]=len(rootdict[key])
        rootNode[0]=key

def depthSearch(node,depth):
    if len(dict[node]):
        answer[node]=[len(rootdict[node]),depth]
        for key in dict[node]:
            depthSearch(key,depth+1)
    else:
        answer[node]=[0,depth]
depthSearch(rootNode[0],0)

sorted_answer = sorted(answer.items(),key = lambda x: (-x[1][0],x[1][1],x[0]))
for person in sorted_answer:
    print(person[0])




