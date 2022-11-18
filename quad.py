import math

def calculator(n):
    return int(math.pow(2,n))

N,T = input().split()
N = int(N)
board = list([0]*calculator(N) for _ in range(calculator(N)))


def imgRecursion(x,y,n):
    check= board[x][y]
    for i in range(x,x+n):
        for j in range(y,y+n):
            if check != board[i][j]:
                print("(",end="")
                imgRecursion(x,y+n//2,n//2)
                imgRecursion(x,y,n//2)
                imgRecursion(x+n//2,y,n//2)
                imgRecursion(x+n//2,y+n//2,n//2)
                print(")",end="")
                return
    print(check,end="")

def preprocessing(S,index,parent):
    new = []
    while index<len(S):
        if S[index]=="(":
            index+=1
            index,new = preprocessing(S,index,new)
        elif S[index]==")":
            index+=1
            parent.append(new)
            return [index,parent]
        else:
            new.append(S[index])
            index+=1
    return new
        

def qtsRecursion(qts,n,x,y):
    if(len(qts)==1):
        fillboard(0,0,n,qts[0])
        return
    for i in range(4):
        if len(qts[i])==1:
            if i==0:
                fillboard(x,y+n//2,n//2,qts[i])
            elif i==1:
                fillboard(x,y,n//2,qts[i])
            elif i==2:
                fillboard(x+n//2,y,n//2,qts[i])
            elif i==3:
                fillboard(x+n//2,y+n//2,n//2,qts[i])
        else:
            if i==0:
                qtsRecursion(qts[i],n//2,x,y+n//2)
            elif i==1:
                qtsRecursion(qts[i],n//2,x,y)
            elif i==2:
                qtsRecursion(qts[i],n//2,x+n//2,y)
            elif i==3:
                qtsRecursion(qts[i],n//2,x+n//2,y+n//2)

def fillboard(x,y,n,target):
    for i in range(x,x+n):
        for j in range(y,y+n):
            board[i][j] = target



def solution(N,T):
    N = calculator(N)
    if T=="QTS":
        QTS = input()
        QTS = preprocessing(QTS,0,[])[0]
        qtsRecursion(QTS,N,0,0)
        for i in range(N):
            print("".join(board[i]))
        return
    if T=="IMG":
        for i in range(N):
            board[i]=list(map(int,input()))
        imgRecursion(0,0,N)


answer = solution(N,T)

