def solution(tickets):
    answer = []
    visited = [False]*len(tickets)
    def dfs(start,count,visited,city):
        if count == len(tickets):
            answer.append(city.split("+"))
            return
        
        for idx,value in enumerate(tickets):
            if value[0]== start and not visited[idx]:
                visited[idx] = True
                dfs(value[1],count+1,visited,f'{city}+{value[1]}')
                visited[idx]=False
        
    dfs('ICN',0,visited,"ICN")
    
    answer.sort()
    return answer[0]