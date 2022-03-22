let girls = ["Faiza", "Sana", "Asma", "Robia", "Farah"];
let boys = ["Akhter", "Afzal", "Hamza", "Imran Jameel", "Amir"];
 
let srcRand, destRand, temp;

for (let i = 0; i < 100000; i++) {
    srcRand = Math.floor(Math.random() * girls.length);
    destRand = Math.floor(Math.random() * girls.length);

    if (srcRand != destRand) {
        temp = girls[destRand];
        girls[destRand] = girls[srcRand];
        girls[srcRand] = temp;   
    }

    srcRand = Math.floor(Math.random() * boys.length);
    destRand = Math.floor(Math.random() * boys.length);  
    if (srcRand != destRand) {
        temp = boys[destRand];
        boys[destRand] = boys[srcRand];
        boys[srcRand] = temp;
    }
}
  
girls.forEach((x, i) => {
    console.log(
        [girls[i], boys[i]]
    )
});
                 
                     
    