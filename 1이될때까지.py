n,k = map(int,input().split())
count = 100001

def a(n,k,m):
    if n==1:
        global count
        count = min(count,m)
        return
    else:
        a(n-1,k,m+1)
        if n%k==0:
            a(n/k,k,m+1)
a(n,k,0)
print(count)
    