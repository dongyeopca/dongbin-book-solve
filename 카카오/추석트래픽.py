def solution(lines):
    answer = 0
    start_time = []
    end_time = []
    def get_time(t):
        h,m,s = t.split(":");
        h = int(h)*3600
        m = int(m)*60
        s,mil = s.split(".")
        s = int(s)
        mil = int(mil)
        return (h+m+s)*1000+mil
    
    def get_start_time(t,millsecond):
        mil = millsecond[:-1]
        mil = int(float(mil)*1000)
        return get_time(t)-mil+1
    
    for i in lines:
        time = i.split()
        start_time.append(get_start_time(time[1],time[2]))
        end_time.append(get_time(time[1]))
    
    for i in range(len(lines)):
        cnt = 0
        cur_time = end_time[i]
        for j in range(i,len(lines)):
            if cur_time>start_time[j]-1000:
                cnt+=1
        answer = max(answer,cnt)
    return answer