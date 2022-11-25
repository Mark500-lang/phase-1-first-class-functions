function receivesAFunction(spy){
    return spy();
}
receivesAFunction(function (){return "I see you"});

function returnsANamedFunction(){
    return function fn () {
        console.log("returned function");
    }
}

function returnsAnAnonymousFunction(){
    return function(){
        console.log("anonymus function");
    }
}