#하나의 항공화물 컨테이너에 담을수 있는 수화물의 최대 무게는 100kg

container_box = [[],0]
container_list = [container_box]

n = int(input())
for baggage_number in range(1,n+1):
    cargo = int(input())
    flag = False
    for i in container_list:
        if i[-1]+cargo<=100:
            flag = True
            i[0].append(str(baggage_number))
            i[-1]+=cargo
            break
    if not flag:
        new_container_box = [[str(baggage_number)],cargo]
        container_list.append(new_container_box)

for i in container_list:
    print(" ".join(i[0]))