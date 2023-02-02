function solution(commands) {
    var answer = [];
    let cell_dict = {};
    commands.map(e=>{
        let command = e.split(" ")
        switch(command[0]){
            case 'UPDATE':
                if(command.length==4){
                    let [r,c,value] = command.slice(1);
                    cell_dict[value] ? cell_dict[value].push([r,c]) : cell_dict[value] = [[r,c]]
                }else{
                    console.log("G")
                }
                break;
            case 'MERGE':
                console.log('g')
                break;
            case 'UNMERGE':
                                console.log('g')
                break;
            case 'PRINT':
                                console.log('g')
                break;
        }
    })
    return answer;
}


//표의 크기 50*50
// 각 셀마다 스택?