n = int(input())
move = input().split()
start = [1,1]
for m in move:
    if start[1]<n and m=="R":
        start[1]+=1
    elif start[1]>1 and m=="L":
        start[1]-=1
    elif start[0]>1 and m=="U":
        start[0]-=1
    elif start[0]<n and m=="D":
        start[0]+=1
print(start)
