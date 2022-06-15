file_name = input()
file = open(file_name,'r')
for i in file:
    data = list(map(float,i.split(',')))
week = []
two_week=[]
for i in range(len(data)-6):
    week.append(sum(data[i:i+7])/7)
for i in range(len(data)-13):
    two_week.append(sum(data[i:i+14])/14)

for i in week:
    print(round(i,2),end=" ")
print()
for i in two_week:
    print(round(i,2),end=" ")
file.close()
