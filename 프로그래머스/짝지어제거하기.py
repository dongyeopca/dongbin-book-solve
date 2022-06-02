# def solution(s):
#     s = list(s)
#     while True:
#         if len(s)==0:
#             print(1)
#             break
#         flag = False
#         for i in range(len(s)-1):
#             print(s)
#             if s[i]==s[i+1]:
#                 s = s[:i]+s[i+2:]
#                 flag =True
#                 break
#         if flag:
#             continue
#         else:
#             print(0)
#             break
# solution('cbcb')

#해당 코드는 시간초과

def solution(s):
    stack = []
    for i in s:
        if not stack:
            stack.append(i)
        else:
            if stack[-1]==i:
                stack.pop()
            else:
                stack.append(i)
    if stack:
        return 0
    else:
        return 1