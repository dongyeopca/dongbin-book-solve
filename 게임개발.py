n,m = map(int,input().split())
#이거 로봇청소기 문제랑 똑같은데?
#현재위치기준 왼쪽방향부터 갈곳 정함
#왼쪽방향에 갈곳이 존재하면 회전 후 한칸 전진 없으면 회전만
#네방향 모두 방문했거나 바다로되어있으면 현재 방향 유지한채로 뒤로 한칸 이동 뒤에가 바다면 동작 정지
a,b,d = map(int,input().split())
board = [[0] for _ in range(n)]
for i in range(n):
    board[i] = list(map(int,input().split()))

move_direction = [0,1,2,3]
dx =[0,1,0,-1]
dy = [-1,0,1,0]
count = 0

#탐색했는지 어떻게 체크=> 방문 지점 2로 바꾸자
while True:
    flag = True
    board[a][b]=2
    count+=1
    for i in range(4):
        if d-1<0:
            d=d+3
        else:
            d-=1
        nx = b+dx[d]
        ny = a+dy[d]
        if -1<nx<m and -1<ny<n and board[ny][nx] ==0:
            a,b=ny,nx
            flag=False
            break
    if flag:
        if d-2<0:
            d=d+2
        else:
            d-=2
        nx = b+dx[d]
        ny = a+dy[d]
        if -1<nx<m and -1<ny<n and board[ny][nx] ==0:
            a,b=ny,nx
        else:
            break
print(count)

    
        