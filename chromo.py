# #대략 1메가 최대 2메가
# #front 제일앞으로
# #back 제일뒤로
# #cut 제거
# #double 복사하여 추가삽입
# #flip 해당구간 뒤집기
# #report 출력
# #입력파일은 fasta형식

# def strip(x):
#     return x.rstrip()

# f = open("./sapiens.txt",'r')
# line =list(map(strip,f.readlines()[1:]))
# f.close()
# chromo = "".join(line)



# n = int(input())
# answer = []
# for _ in range(n):
#     print("checke:",chromo)
#     order,start,end = input().split()
#     start = int(start)-1 if int(start)>0 else 0
#     end = int(end)
#     if order=="front":
#         target = chromo[start:end]
#         #start가 전체 길이보다 out이면 
#         print("target:",target)
#         #타겟이 맨 앞부분이면?
#         chromo = target+chromo[:start]+chromo[end:]
#         #타겟이 맨 뒷부분이면?
#     elif order == "back":
#         target = chromo[start:end]
#         print("target:",target)
#         chromo = chromo[:start]+chromo[end:]+target
#     elif order == "cut":
#         chromo = chromo[:start]+chromo[end:]
#     elif order == "double":
#         target = chromo[start:end]
#         print("target:",target)
#         chromo = chromo[:end]+target+chromo[end:]
#     elif order == "flip":
#         target = chromo[start:end]
#         print("target:",target)
#         print("target_flip:",target[::-1])
#         chromo = chromo[:start]+target[::-1]+chromo[end:]
#     else:
#         target = chromo[start:end]
#         if target:
#             answer.append(target)
#         else:
#             answer.append("NONE")

# a = open("./answer.txt")
# line =list(map(strip,a.readlines()))
# a.close()
# if(line==answer):
#     print("True")
# else:
#     print('ㅠㅠㅠㅠㅠ')
# # for i in answer:
# #     print(i)

# print(answer)
# print(line)

