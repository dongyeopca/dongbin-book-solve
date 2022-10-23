# k번 인공위성이 제거되면 다음 제거해야할 인공위성은 k%3+2앞쪽의 인공위성

s,e = map(int,input().split())
satellite = [i for i in range(s,e+1)]

def cal(value,located):
    index= value%3+1 #몇칸앞으로 갈지
    while index>0:
        located+=1
        index-=1
        if located>=len(satellite):
            located-=len(satellite)
    return located

deleted = [s]
satellite.pop(0)
located = 0

while len(satellite)>1:
    located = cal(deleted[-1],located)
    deleted.append(satellite[located])
    satellite.pop(located)

print(satellite[0])


