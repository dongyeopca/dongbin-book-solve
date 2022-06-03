class Node():
    def __init__(self,n):
        self.next = None
        self.prev = None
        self.deleted = False
        self.data = n

def solution(n, k, cmd):
    answer = ''
    deleted = []
    stack = []
    for i in range(n):
        temp = Node(i)
        if stack:
            stack[-1].next = temp
            temp.prev = stack[-1]
        stack.append(temp)
    cur_node = stack[k]
    for i in cmd:
        order = i.split()
        if order[0]=="D":
            for _ in range(int(order[1])):
                cur_node = cur_node.next
        elif order[0]=="C":
            target = cur_node
            target.deleted = True
            deleted.append(target)
            if cur_node.next == None:
                target.prev.next = None
                cur_node = target.prev
            elif cur_node.prev == None:
                target.next.prev = None
                cur_node = target.next
            else:
                target.prev.next = target.next
                target.next.prev = target.prev
                cur_node = target.next
        elif order[0]=="U":
            for _ in range(int(order[1])):
                cur_node = cur_node.prev
        elif order[0]=="Z":
            target = deleted.pop()
            target.deleted = False
            if target.prev == None:
                target.next.prev = target
            elif target.next == None:
                target.prev.next = target
            else:
                target.prev.next = target
                target.next.prev = target
    for i in stack:
        if i.deleted:
            answer+="X"
        else:
            answer+="O"
    print(answer)
    return answer

solution(8,2,["D 2","C","U 3","C","D 4","C","U 2","Z","Z","U 1","C"])