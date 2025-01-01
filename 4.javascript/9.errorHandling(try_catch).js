//Error Handling (try catch)

function divide(a,b){
    try{
        if(b==0){
            throw Error("division by zero failed");
        }
        console.log(a/b);
    }
    catch(err){
        console.error(err);
        
    }
}
divide(10,2) //5
divide(10,0) //error message