const fs=require('fs');

function question1() {
fs.readFile('./input.txt', (err,data) => {
    console.time('funchallenge');
    const directions=data.toString();
    const directionsArray=directions.split('');
    const answer=directionsArray.reduce((acc, currentValue) => {
        if(currentValue === '(')
            return acc+=1;
        else if(currentValue === ')')
            return acc-=1;
    }, 0)
    console.log('Floor: ', answer);
    console.timeEnd('funchallenge');
})

}
question1();

function question2() {
    fs.readFile('./input.txt', (err,data) => {
        console.time('funchallenge');
        const directions=data.toString();
        const directionsArray=directions.split('');
        let acc=0;
        let counter=0;
        const answer=directionsArray.some((currentItem)=>{
            if(currentItem === '(')
                acc+=1;
            else if(currentItem === ')')
                acc-=1;
            counter++;
            return acc<0;
        })
    console.log('Basement entered at : ',counter);
    })
}
    question2();