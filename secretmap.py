f = open("./map.txt")
while True:
    line = f.readline().rstrip()
    if not line:
        break
    print(hash(line))
f.close()

