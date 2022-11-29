def braceFilter(x):
    temp =[]
    for i in x:
        if i=='{' or i=='}':
            temp.append(i)
    return temp

depth = 0
flag = False
code = []
prev = None
answer = 0
while True:
    try:
        sourceCode = input()
        brace = braceFilter(sourceCode)
        for value in brace:
             if value=="{":
                 depth+=1
                 code.append("{")
             else:
                answer+=depth
                depth-=1
                code.pop()
    except:
        print(answer)
        break

