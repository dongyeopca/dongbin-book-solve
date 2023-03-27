import sys
from collections import deque

input = sys.stdin.readline
n = int(input())
class Node():
    def __init__(self,index,data):
        self.data = data
        self.index = index
        self.prev = None
        self.next = None

number = list(map(int,input().split()))
stack = []
for i in range(n):
    new_node = Node(i+1,number.pop(0))
    if stack:
        stack[-1].next = new_node
        new_node.prev = stack[-1]
    stack.append(new_node)

stack[-1].next = stack[0]
stack[0].prev = stack[-1]

start = stack[0]
start.next.prev = start.prev
start.prev.next = start.next
print(start.index,end=" ")
for _ in range(n-1):
    move = start.data
    if move<0:
        while move!=0:
            start = start.prev
            move+=1
    else:
        while move!=0:
            start = start.next
            move-=1
    start.next.prev = start.prev
    start.prev.next = start.next
    print(start.index,end=" ")