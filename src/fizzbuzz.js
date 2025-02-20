function fizzbuzz(num){
    if(num % 5 == 0){
        return "Buzz";
    }
    else if (num % 3 === 0) {
        return "Fizz";
    }else{
        return num.toString();
    }
};

export default fizzbuzz;

  

//tratar cada vez de implementar solo lo nesesario para que pase 
//solo para nosotros