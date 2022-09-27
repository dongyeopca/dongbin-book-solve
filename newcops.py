#abs(a-b)==1이면 1초 후에도 제자리
#c1 로봇은 반시계방향 c2로봇은 시계방향
#c1의 시작지점은 p1 c2의 시작지점은 k/2번째 줄

def draw_board(cur,next):
    if cur[0]==next[0]:
        if(cur[1]<next[1]):
            for i in range(cur[1]+1,next[1]+1):
                board.append([cur[0],i])
        else:
            for i in range(cur[1]-1,next[1]-1,-1):
                board.append([cur[0],i])
    else:
        if(cur[0]<next[0]):
            for i in range(cur[0]+1,next[0]+1):
                board.append([i,cur[1]])
        else:
            for i in range(cur[0]-1,next[0]-1,-1):
                board.append([i,cur[1]])

def robot_move(robot):
    if robot[-1]==1:
        robot[0]+=1
    else:
        robot[0]-=1
    if robot[0]<0:
        robot[0]= len(board)-1
    if robot[0]>(len(board)-1):
        robot[0] = 0
    
def meet(c1,c2):
    if c1[0] == c2[0]:
        c1[-1]= -c1[-1]
        c2[-1]= -c2[-1]
        return True
    robot_move(c1)
    if c1[0]==c2[0]:
        if c1[-1]==1:
            c1[0]-=1
        else:
            c1[0]+=1
        c1[-1]= -c1[-1]
        c2[-1]= -c2[-1]
        return False
    #원상복구
    if c1[-1]==1:
        c1[0]-=1
    else:
        c1[0]+=1
    return True


k= int(input())
vertex = []
board = []
for _ in range(k):
    vertex.append(list(map(int,input().split())))
vertex.append(vertex[0])

for i in range(k+1):
    if board:
        draw_board(board[-1],vertex[i])
    else:
        board.append(vertex[0])
board.pop()

#direction 1은 시게방향 -1은 반시계방향
c1 = [board.index([vertex[0][0],vertex[0][1]]),1]
c2 = [board.index([vertex[int(k/2)-1][0],vertex[int(k/2)-1][1]]),-1]

t = int(input())%len(board)
for _ in range(t):
    if meet(c1,c2):
        robot_move(c1)
        robot_move(c2)

print(board[c1[0]][0],board[c1[0]][1])
print(board[c2[0]][0],board[c2[0]][1])
#로봇의 진행방향을 바꿔주는 함수
#c1 ,c2 로봇을 이동시키는 함수
#c1은 꼭짓점의 좌표 순서대로
#c2는 꼭짓점의 좌표 역순으로