// /**
//  * @param {number[]} candidates
//  * @param {number} target
//  * @return {number[][]}
//  */
// var combinationSum = function(candidates, target) {
//     const answer = new Map();
//     const arr = []
//     candidates.sort((a,b)=>a-b)
//     const dfs = (sum,obj)=>{
//         if(sum==target){
//             answer.set(JSON.stringify(obj),1)
//             return
//         }
//         for(let i=0; i<candidates.length; i++){
//             if(!(sum+candidates[i]>target)){
//                 obj[candidates[i]]?obj[candidates[i]]+=1:obj[candidates[i]]=1
//                 dfs(sum+candidates[i],obj)
//                 obj[candidates[i]]==1? delete obj[candidates[i]] : obj[candidates[i]]-=1
//             }
//             else{
//                 break
//             }
//         }
//     }
//     dfs(0,{})
//     for(const [key,value] of answer){
//         let temp = []
//         for(const [t,v] of Object.entries(JSON.parse(key))){
//             for(let i=0; i<v; i++){
//                 temp.push(parseInt(t))
//             }
//         }
//         arr.push(temp)
//     }
//     return arr
// };

//second try
var combinationSum = function (candidates, target) {
  let answer = [];
  let temp = [];
  candidates.sort((a, b) => a - b);
  const dfs = (index, sum) => {
    if (target == sum) {
      answer.push([...temp]);
      return;
    }
    for (let i = index; i < candidates.length; i++) {
      if (candidates[i] + sum > target) break;
      temp.push(candidates[i]);
      dfs(i, sum + candidates[i]);
      temp.pop();
    }
  };
  dfs(0, 0);
  return answer;
};
