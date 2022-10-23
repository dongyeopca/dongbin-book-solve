# write fa sa 남은 공간이 sa보다 작으면 거절되고 "diskfull"출력 아니면 
#한덩어리로 할수있으면 가장 앞쪽 안되면 쪼개서 채워넣기
#delete fa
# show fa 시작 위치를 출력/ 쪼개져있으면 모든 시작위치 출력
# compact

#["시작","끝","자료"]


v = int(input())
disk = [[1,v+1,"free"]]
free_table= [[1,v+1]]
free_size = v
while True:
    disk.sort()
    order = input().split()
    if order[0]=="end":
        break
    if order[0]=="write":
        order[-1]=int(order[-1])
        size = order[-1]
        if free_size<size:
            print("diskfull")
            continue
        free_size-=size
        for i in range(len(disk)):
            if disk[i][-1]=="free":
                if disk[i][1]-disk[i][0]>size:#여유공간보다 작으면
                    disk.append([disk[i][0],disk[i][0]+size,order[1]])
                    disk.append([disk[i][0]+size,disk[i][1],"free"])
                    disk.pop(i)
                    break
                elif disk[i][1]-disk[i][0] == size:
                    disk[i][-1]=order[-1]
                    break
                else:
                    disk[i][-1]=order[1]
                    size-=disk[i][1]-disk[i][0]

    elif order[0]=="delete":
        for i in disk:
            if i[-1]==order[-1]:
                i[-1]="free"
                free_size+=i[1]-i[0]

    elif order[0]=="show":
        for i in disk:
            if i[-1]==order[-1]:
                print(i[0]-1,end=" ")

    elif order[0]=="compact":
        index = 0
        for i in range(len(disk)):
            if disk[index][-1]=="free":
                disk.pop(index)
            else:
                if index!=0:
                    if disk[index-1][-1]==disk[index][-1]:
                        disk[index-1][1]=disk[index-1][1]+(disk[index][1]-disk[index][0])
                        disk.pop(index)
                    else:
                        disk[index] = [disk[index-1][1],disk[index-1][1]+disk[index][1]-disk[index][0],disk[index][-1]]
                        index+=1
                else:
                    disk[index] = [1,1+disk[0][1]-disk[0][0],disk[0][-1]]
                    index+=1
        disk.append([disk[-1][1],disk[-1][1]+free_size,"free"])
