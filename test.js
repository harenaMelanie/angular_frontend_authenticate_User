
function subsribe(callback){
    let user = {
        name:"mickael",
        id:1
    }
    callback(user);
}

subsribe((a)=>{console.log(a)})