# n = int(input())
# timeTable = []
# answerTable = []

# for _ in range(n):
#     s,e = map(int,input().split())
#     timeTable.append([s,s+e])

# timeTable.sort(key= lambda x: x[0])

# for i in range(n):
#     if(answerTable):
#         flag = True
#         for j in range(len(answerTable)):
#             if answerTable[j][-1]<=timeTable[i][0]:
#                 answerTable[j]=timeTable[i]
#                 flag = False
#                 break
#         if flag:
#             answerTable.append(timeTable[i])

#     else:
#         answerTable.append(timeTable[i])

# print(len(answerTable))