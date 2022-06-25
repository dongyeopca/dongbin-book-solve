make = open('result.txt','w')
for i in range(1,101):
    make.write(f'{i} 곱하기 2 는 {i*2} 입니다.\n')

make.close()
result = open('result.txt','r')
data = result.readlines()
for i in data:
    print(i,end="")
result.close()