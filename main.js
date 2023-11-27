let answers = ['Fiz','Buzz','FizBuzz'];

for(let i = 1; i <= 100; i++){
    if(i % 5 === 0 && i % 3 === 0 ){
        console.log(answers[2]);
        continue;
    }
    else if(i % 5 === 0 && i % 3 !== 0){
        console.log(answers[1]);
        continue;
    }
    else if(i % 3 === 0){
        console.log(answers[0]);
    }

    console.log(i);
}