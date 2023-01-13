#오른쪽 혹은 왼쪽에 -1이 있으면 보도블록의 width를 알수있음
#0이라면 바로 옆에 매쉬가 있다는뜻
#물체가 가장 작은 경우의 수를 따른다.
HL = list(map(int,input().split()))
HL.pop()
HR = list(map(int,input().split()))
HR.pop()

height = len(HL)
#보도블럭의 width구하기
width = 0
for i in range(height):
    if HR[i]==-1:
        width = HL[i]+HR[i]+1
        break
    else:
        width = max(width,HL[i]+HR[i]+1)

#보도블럭 그리기
board = [[0]*width for _ in range(height)]
for i in range(height):
    for j in range(HL[i]):
        board[i][j]=1
    for j in range(width-1,width-HR[i]-1,-1):
        board[i][j]=1

#vertical 보도블럭 세기
VT = []
VB = []
for i in range(width):
    tempvt = 0
    for j in range(height):
        if board[j][i] ==1:
            tempvt+=1
        else:
            break
    VT.append(tempvt)
    tempvt = 0

    if VT[i]==height:
        VB.append(-1)
        continue
    tempvb = 0
    for j in range(height-1,-1,-1):
        if board[j][i]==1:
            tempvb+=1
        else:
            break
    VB.append(tempvb)
    tempvb = 0

print(" ".join(map(str,VT)),-9)
print(" ".join(map(str,VB)),-9)

# testa = " ".join(map(str,VT))+" -9"
# testb = " ".join(map(str,VB))+" -9"
# print(testa == "25 24 23 23 23 23 23 23 21 21 20 20 20 20 20 17 17 17 17 17 16 16 16 14 13 12 12 12 11 11 11 8 8 7 7 7 7 7 7 6 6 5 5 5 5 4 2 2 2 2 2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 3 3 3 3 4 4 4 5 6 6 6 6 7 8 8 8 8 8 8 9 9 10 11 11 11 11 11 12 12 12 12 12 14 14 14 14 14 14 14 15 16 16 17 17 18 18 18 18 18 19 20 20 20 21 22 22 22 22 22 23 23 23 24 24 24 24 24 24 25 25 25 25 25 26 26 26 26 26 26 26 26 27 27 27 27 27 28 28 29 30 30 30 30 30 31 31 34 34 34 34 34 34 34 35 35 35 35 35 35 35 35 36 36 37 38 38 38 38 38 39 39 39 39 39 39 39 41 41 42 42 42 42 42 42 42 42 42 43 43 43 43 43 43 43 43 43 43 43 43 44 44 44 44 44 44 44 45 45 45 46 46 47 47 47 47 47 47 47 47 47 47 48 48 48 49 49 50 50 50 51 51 51 51 51 51 51 51 51 52 52 52 52 54 54 54 54 54 54 54 54 54 54 55 55 55 55 55 57 57 57 57 57 57 57 57 57 57 57 57 57 57 57 57 58 58 58 58 58 58 58 59 59 59 59 59 59 59 59 59 59 59 59 59 59 59 60 60 60 60 60 60 60 60 60 60 60 60 60 60 60 60 61 62 62 62 63 63 63 63 63 63 63 63 63 63 64 65 65 65 65 65 65 65 65 65 65 65 65 65 65 65 65 65 65 65 65 66 66 66 66 66 66 66 66 66 66 66 66 66 67 67 67 68 69 69 69 69 69 69 69 69 69 69 70 72 72 72 72 72 72 72 72 72 72 72 72 72 72 72 72 72 72 72 72 72 72 72 72 72 72 72 72 72 73 73 73 73 73 73 73 73 73 73 73 73 73 73 73 73 73 73 73 73 73 73 73 73 73 73 73 73 74 74 74 74 74 74 74 74 74 74 74 74 74 74 74 74 74 74 74 74 74 75 75 75 75 75 75 75 75 75 76 76 76 76 76 76 76 76 76 76 76 76 76 76 76 76 76 76 76 76 76 76 76 76 76 76 76 76 76 76 76 76 77 77 77 77 77 77 77 77 77 77 77 77 77 77 77 77 77 77 77 77 77 77 77 77 77 77 77 77 77 77 77 77 77 77 77 78 78 78 78 78 78 78 78 78 78 78 78 78 78 78 78 78 78 78 78 78 78 78 78 78 78 78 78 79 79 79 79 79 79 79 79 79 79 79 79 79 79 79 79 79 79 79 79 79 80 80 80 81 81 81 81 81 81 81 81 81 81 81 81 81 81 81 81 81 81 81 81 81 81 81 81 81 81 81 81 81 81 81 81 81 81 81 81 100 100 100 100 100 100 100 100 100 100 100 100 100 100 100 100 100 100 100 100 100 100 100 100 100 100 100 100 100 100 100 100 100 100 100 100 100 100 100 100 100 100 100 100 100 100 100 100 100 100 100 100 100 100 -9")
# print(testb == "18 16 16 16 16 16 16 14 14 14 14 14 14 14 14 14 14 14 14 14 14 13 13 13 13 13 13 13 13 12 12 12 12 12 12 12 12 12 11 10 10 10 10 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 3 3 3 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 1 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1 1 1 1 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 3 3 3 3 3 4 4 4 4 4 4 4 5 5 5 5 5 5 5 5 5 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 8 8 8 8 9 9 9 10 10 10 10 10 11 11 11 11 11 11 11 11 11 12 12 13 13 13 13 13 13 13 13 13 13 13 13 13 13 13 13 13 13 13 13 13 14 14 14 14 14 14 15 15 15 15 16 16 16 16 16 16 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 18 18 18 18 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -9")