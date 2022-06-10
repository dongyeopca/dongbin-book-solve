import sys
input =sys.stdin.readline

class node():
    def __init__(self,data):
        self.prev = None
        self.next = None
        self.data = data

text = input().rstrip()
n = int(input())
stack = []

for i in text:
    new_node = node(i)
    if stack:
        new_node.prev = stack[-1]
        stack[-1].next = new_node
    stack.append(new_node)
cursor = node("cursor")
cursor.prev = stack[-1]
stack[-1].next = cursor

def left(cursor):
    prev_node = cursor.prev
    next_node = cursor.next
    if cursor.prev ==None:
        return cursor
    else:
        cursor.prev = prev_node.prev
        cursor.next = prev_node
        if prev_node.prev != None:
            prev_node.prev.next = cursor
        prev_node.prev = cursor
        prev_node.next = next_node
        if next_node != None:
            next_node.prev = prev_node
    return cursor

def right(cursor):
    prev_node = cursor.prev
    next_node = cursor.next
    if cursor.next == None:
        return cursor
    else:
        cursor.next = next_node.next
        cursor.prev = next_node
        next_node.next = cursor
        next_node.prev = prev_node
        if prev_node != None:
            prev_node.next = next_node
    return cursor

def delete(cursor):
    prev_node = cursor.prev
    next_node = cursor.next
    if cursor.prev == None:
        return cursor
    else:
        cursor.prev = prev_node.prev
        if prev_node.prev !=None:
            prev_node.prev.next = cursor
    return cursor

def insert(cursor,data):
    new_node = node(data)
    prev_node = cursor.prev
    next_node = cursor.next
    if cursor.prev == None:
        cursor.prev = new_node
        new_node.prev = prev_node
        new_node.next = cursor
    else:
        cursor.prev = new_node
        new_node.prev = prev_node
        new_node.next = cursor
        prev_node.next = new_node
    return cursor


for _ in range(n):
    order = input().rstrip().split()
    if order[0]=="L":
        cursor = left(cursor)
    elif order[0]=="D":
        cursor = right(cursor)
    elif order[0]=="B":
        cursor = delete(cursor)
    elif order[0]=="P":
        cursor = insert(cursor,order[1])


while cursor.prev!=None:
    cursor = cursor.prev

while cursor != None:
    if cursor.data !="cursor":
        print(cursor.data,end="")
    cursor = cursor.next

