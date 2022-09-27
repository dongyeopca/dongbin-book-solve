#zsignal.txt에서 신호 읽어오기
# T => T번쨰 신호값 // M => u,v구간내에서 최고,최저값
f = open("zsignal.txt","r")
signal = []
while True:
    line = f.readline().rstrip()
    if not line: 
        f.close()
        break
    if line[0]!='0':
        if not signal:
            signal.append(int(line))
        else:
            signal.append(signal[-1]+int(line))
    else:
        value,number = map(int,line.split())
        for i in range(number):
            signal.append(signal[-1])
while True:
    try:
        order = input().split()
        if order[0]=="T":
            if int(order[1])<=len(signal):
                print(signal[int(order[1])])
            else:
                print(-1)
        else:
            u,v = map(int,order[1:])
            if len(signal)<v:
                print(-1)
            else:
                print(min(signal[u:v+1]),max(signal[u:v+1]))
    except:
        break
    

