
size = int(input())

disk = [[1,size+1,"free"]]

while True:
    disk.sort()
    order = input().split()
    if order[0]=="end":
        break
    if order[0]=="write":
        for i in disk:
            if i[-1]==order[1]:
                print("error")
                break
        if size<int(order[-1]):
            print("diskfull")
            continue

        order_size = int(order[-1])

        size -= order_size
        #한번에 넣을수 있는공간 탐색
        flag = True
        for i in disk:
            node_size = i[1]-i[0]
            if i[-1]=="free":
                if node_size>order_size:
                        flag = False
                        i[-1] = order[1]
                        i[1] = i[0]+order_size
                        disk.append([i[1],i[1]+node_size-order_size,'free'])
                        break
                elif node_size==order_size:
                    flag = False
                    i[-1] = order[1]
                    break
        #아니면
        if flag:
            for i in disk:
                node_size = i[1]-i[0]
                if i[-1]=="free":
                    if node_size>order_size:
                        i[-1] = order[1]
                        i[1] = i[0]+order_size
                        disk.append([i[1],i[1]+node_size-order_size,'free'])
                        break
                    elif node_size==order_size:
                        i[-1] = order[1]
                        break
                    else:
                        i[-1] = order[1]
                        order_size-=node_size
                        continue
    elif order[0]=="show":
        flag = True
        for i in disk:
            if i[-1]==order[1]:
                flag = False
                print(i[0]-1,end=" ")
        if not flag:
            print()
        else:
            print("error")

    elif order[0]=="delete":
        flag = True
        for i in disk:
            if i[-1]==order[1]:
                flag = False
                i[-1]='free'
                size+=i[1]-i[0]
        stack = []
        for i in disk:
            if stack:
                if stack[-1][-1]==i[-1]:
                    stack[-1][1]=i[1]
                else:
                    stack.append(i)
            else:
                stack.append(i)
        disk = stack
        if flag:
            print("error")

    elif order[0]=="compact":
        stack = []
        for i in disk:
            if stack:
                if stack[-1][-1]==i[-1]:
                    stack[-1][1]=i[1]
                else:
                    stack.append(i)
            else:
                stack.append(i)
        #free제거
        index = 0
        while index != len(stack):
            if stack[index][-1]=="free":
                stack.pop(index)
            else:
                index+=1
        #재정렬
        if stack:
            disk = []
            for i in stack:
                if disk:
                    if disk[-1][-1]==i[-1]:
                        disk[-1][1]+=i[1]-i[0]
                    else:
                        disk.append([disk[-1][1],disk[-1][1]+i[1]-i[0],i[-1]])
                else:
                    disk.append([1,i[1]-i[0]+1,i[-1]])
            disk.append([disk[-1][1],disk[-1][1]+size,'free'])
        else:
            disk = [[1,size+1,'free']]

