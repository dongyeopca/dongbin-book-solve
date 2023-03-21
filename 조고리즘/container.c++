#include <iostream>
#include <vector>
#include "container.h" 
#include <deque>
#include <queue>
#include <map>
#include <numeric>
using namespace std;

map<int,deque<int>> m;

int tornament(deque<int>&dq){
    int i,j,result;
    queue<int> q(dq);
    
    while(q.size()!=1){
        i = q.front();
        q.pop();
        j = q.front();
        q.pop();
        result = box_comp(i,j);
        if(result==1){
            m[i].push_back(j);
            q.push(i);
        }else if(result==-1){
            m[j].push_back(i);
            q.push(j);
        }
    }
    return q.front();
}

int main(){
    int N, result,first;
    box_ready();
    N = box_size();
    
    deque<int> dq(N);
    iota(dq.begin(),dq.end(),1);

    first = tornament(dq); //1번째 우승 인덱스값
    box_report(tornament(m[first]));

    return 0;
}