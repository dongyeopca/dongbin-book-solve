import sys
input = sys.stdin.readline

k = int(input())
target = []
index = 0
while True:
    try:
        line = input().strip()
        if len(line)==0:
           raise EOFError
        target.append(line)
        index+=1
    except:
        break

def radix_sort(strings, start,end,k):
    global target

    if start >=end:
        return strings
    buckets = [[] for _ in range(6)] 
    for s in strings:
        try:
            if target[s][start]=='a':
                buckets[1].append(s)
            elif target[s][start]=='c':
                buckets[2].append(s)
            elif target[s][start]=='g':
                buckets[3].append(s)
            elif target[s][start]=='n':
                buckets[4].append(s)
            else:
                buckets[5].append(s) 
        except:
            buckets[0].append(s)
    result = []
    counter = 0
    for bucket in buckets:
        temp = len(bucket)
        if temp<k-counter-1:
            counter+=temp
            result.extend(bucket)
        else:
            sorted_bucekt = radix_sort(bucket, start+1,end,k-counter)
            result.extend(sorted_bucekt)
            if len(result)>=k+1:
                return result
    return result

max_length = 100
sorted_strings = radix_sort([i for i in range(index)],0,max_length-1,k)

print(sorted_strings[k-2]+1)
print(sorted_strings[k-1]+1)
print(sorted_strings[k]+1)


# # a c g n t
# def radix_sort(target):
#     max_len = max(len(s) for s in target)
#     for i in range(max_len-1,-1,-1):
#         buckets = [[] for _ in range(6)]
#         for s in target:
#             try:
#                 if s[i]=='a':
#                     buckets[1].append(s)
#                 elif s[i]=='c':
#                     buckets[2].append(s)
#                 elif s[i]=='g':
#                     buckets[3].append(s)
#                 elif s[i]=='n':
#                     buckets[4].append(s)
#                 else:
#                     buckets[5].append(s)   
#             except:
#                 buckets[0].append(s)
#         target = [s for bucket in buckets for s in bucket]
#     return target