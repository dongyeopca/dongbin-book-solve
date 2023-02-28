n = int(input())
stack = []
answer = []
for i in range(n+2):
    value = int(input())
    if(stack and value in stack):
        answer.append(value)
    else:
        stack.append(value)
answer.sort()
for value in answer:
    print(value)