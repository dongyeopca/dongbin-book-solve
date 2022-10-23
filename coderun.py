
# n,k1,k2 = map(int,input().split())
# #무지성 풀이
# func_dict = {}
# parent = []#사이클확인을위해
# answer={"k1":None,"k2":None}

# visited = ["M"]
# stack = []
# cycle_flag = True
# def cycle(type):
#     for i in func_dict[type]:
#         if ord("A")<=ord(i[0])<=ord("Z"):
#             if i not in visited:
#                 stack.append(i)

# for _ in range(n):
#     func = input().split()
#     func_dict[func[0]] = func[1:-1]

# cycle("M")#python은 do-while이 없다
# while stack:
#     t = stack.pop()
#     if t in visited:
#         cycle_flag=False
#         print("DEADLOCK")
#         break
#     else:
#         visited.append(t)
#         cycle(t)

# def recursion(runfunc,t):
#     for i in func_dict[runfunc]:
#         if ord("A")<=ord(i[0])<=ord("Z"):
#             t=recursion(i,t)
#         else:
#             if t==k1:
#                 answer['k1']=f'{runfunc}-{i}'
#             elif t==k2:
#                 answer['k2']=f'{runfunc}-{i}'
#             t+=1
#     return t

# if cycle_flag:
#     recursion('M',1)
#     print(answer["k1"])
#     print(answer['k2'])

#최대 포함할수있는 문장의 수는 함수당 30개

# n,k1,k2 = map(int,input().split())
# funct = {}
# answer = []

# for _ in range(n):
#     f = input().split()
#     funct[f[0]]=f[1:]

# visited = ["M"]
# stack = []
# cycle_flag = True
# def cycle(type):
#     for i in funct[type]:
#         if ord("A")<=ord(i[0]) and ord(i[0])<=ord("Z"):
#             if i not in visited:
#                 stack.append(i)


# cycle("M")#python은 do-while이 없다
# while stack:
#     t = stack.pop()
#     if t in visited:
#         cycle_flag=False
#         print("DEADLOCK")
#         break
#     else:
#         visited.append(t)
#         cycle(t)

# def recursion(type):
#     for i in funct[type]:
#         if ord('A')<=ord(i[0])<ord('Z'):
#             recursion(i)
#         else:
#             if i=="$":
#                 return
#             else:
#                 answer.append([type,i])
#     return

# if cycle_flag:
#     recursion('M')
#     try:
#         print(f'{answer[k1-1][0]}-{answer[k1-1][1]}')
#     except:
#         print('NONE')
#     try:
#         print(f'{answer[k2-1][0]}-{answer[k2-1][1]}')
#     except:
#         print('NONE')

n,k1,k2 = map(int,input().split())
fdict = {}
answer = []
for _ in range(n):
    f = input().split()
    fdict[f[0]] = f[1:]

def recursion(ftype,count):
    for i in fdict[ftype]:
        if i=="$":
            return count
        if ord("A")<=ord(i[0]) and ord(i[0])<=ord("Z"):
            count = recursion(i,count)
        else:
            answer.append(f'{ftype}-{i}')
            count+=1

try:
    recursion('M',0)
    if k1>len(answer):
        print("NONE")
    else:
        print(answer[k1-1])
    if k2>len(answer):
        print("NONE")
    else:
        print(answer[k2-1])
except:
    print("DEADLOCK")

