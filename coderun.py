from pickle import NONE


n,k1,k2 = map(int,input().split())
#무지성 풀이
func_dict = {}
parent = []#사이클확인을위해
answer={"k1":None,"k2":None}

visited = ["M"]
stack = []
def cycle(type):
    for i in func_dict[type]:
        if ord("A")<=ord(i[0])<=ord("Z"):
            if i not in visited:
                stack.append(i)

for _ in range(n):
    func = input().split()
    func_dict[func[0]] = func[1:-1]

cycle("M")#python은 do-while이 없다
while stack:
    t = stack.pop()
    if t in visited:
        print("DEADLOCK")
        break
    else:
        visited.append(t)
        cycle(t)

def recursion(runfunc,t):
    for i in func_dict[runfunc]:
        if ord("A")<=ord(i[0])<=ord("Z"):
            t=recursion(i,t)
        else:
            if t==k1:
                answer['k1']=f'{runfunc}-{i}'
            elif t==k2:
                answer['k2']=f'{runfunc}-{i}'
            t+=1
    return t


recursion('M',1)
print(answer["k1"])
print(answer['k2'])

