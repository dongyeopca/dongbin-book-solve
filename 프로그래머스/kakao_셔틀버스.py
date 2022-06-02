def solution(n, t, m, timetable):
    
    #동시간대 크루가 탑승인원보다 많으면 콘은 못탐
    #버스 출발시간 09:00부터 t분 간격으로 n회 운행
    #m은 탑승인원
    #버스 시간표
    bus_table = []
    timetable.sort()
    for i in range(n):
        bus_table.append(60*9+i*t)
                         
    for i in range(len(timetable)):
        hour,minute = timetable[i].split(":")
        timetable[i]=int(hour)*60+int(minute)
        
        

    for bus in bus_table[:-1]:
        count = 0
        for crew in timetable:
            if count>=m:
                break
            if crew<=bus:
                count+=1
        timetable = timetable[count:]
    #막차까지 안탄애들만 타임테이블에 남음
    
    count = 0
    for i in timetable:
        if i<=bus_table[-1]:
            count+=1
        if count>=m:
            return f'{(i-1)//60 if (i-1)//60>9 else "0"+str((i-1)//60)}:{(i-1)%60 if (i-1)%60>9 else "0"+str((i-1)%60)}'
    return f'{bus_table[-1]//60 if bus_table[-1]//60>9 else "0"+str(bus_table[-1]//60)}:{bus_table[-1]%60 if bus_table[-1]%60 > 9 else "0"+str(bus_table[-1]%60)}'


    # rjust('0',2)를 활용하면 더 깔끔하게 표현할수있다.!