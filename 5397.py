# from collections import deque
# N = int(input())
# for _ in range(N):
#     searchPW = input()
#     stack = deque()
#     result = deque()
#     for i in searchPW:
#         if i == "<" :
#             if len(result):
#                 stack.append(result.pop())
#         elif i == ">":
#             if len(stack):
#                 result.append(stack.pop())
#         elif i == '-':
#             if len(result):
#                 result.pop()
#         else:
#             result.append(i)
#     while stack:
#         result.append(stack.pop())
        
#     print("".join(result))
import sys
input = sys.stdin.readline
class Node():
    def __init__(self,data):
        self.data = data
        self.prev = None
        self.next = None

n = int(input())
for _ in range(n):
    cursor = Node("cursor")
    keyboard = list(input().rstrip())
    for i in keyboard:
        if i=="<":
            if cursor.prev!=None:
                next_node = cursor.next
                prev_node = cursor.prev
                cursor.next = prev_node
                cursor.prev = prev_node.prev
                if prev_node.prev!=None:
                    prev_node.prev.next = cursor
                prev_node.prev = cursor
                prev_node.next = next_node
                if next_node != None:
                    next_node.prev = prev_node
        elif i==">":
            if cursor.next != None:
                next_node = cursor.next
                prev_node = cursor.prev
                cursor.next = next_node.next
                cursor.prev = next_node
                next_node.prev = prev_node
                if prev_node != None:
                    prev_node.next = next_node
        elif i=="-":
            if cursor.prev != None:
                next_node = cursor.next
                prev_node = cursor.prev
                cursor.prev = prev_node.prev
                if prev_node.prev != None:
                    prev_node.prev.next = cursor
        else:
            new_node = Node(i)
            if cursor.prev==None:
                cursor.prev = new_node
                new_node.next = cursor
            else:
                cursor.prev.next = new_node
                new_node.prev = cursor.prev
                cursor.prev = new_node
                new_node.next = cursor

    while cursor.prev !=None:
        cursor = cursor.prev
    answer = ""
    while cursor != None:
        if cursor.data!="cursor":
            answer+=cursor.data
        cursor = cursor.next
    print(answer)
            

