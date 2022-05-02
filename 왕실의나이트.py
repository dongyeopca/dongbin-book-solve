from xmlrpc.server import DocXMLRPCRequestHandler


start = input()
row = int(start[-1])
col = int(ord(start[0]))-int(ord('a'))+1
steps = [(-2,-1),(-2,1),(2,-1),(2,1),(1,2),(-1,2),(1,-2),(-1,-2)]
count = 0
for step in steps:
    if 1<=step[0]+row<=8 and 1<=step[1]+col<=8:
        count+=1
print(count)
    
