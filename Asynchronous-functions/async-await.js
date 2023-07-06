let success = true;
let promise = new Promise((resolve,reject)=>{
    if(success){
       setTimeout(()=>{resolve('I suceeded')},5000)
    }
    else{
        setTimeout(()=>{reject('I am still looking for a job')},5000)
    }
}).then(()=>{console.log('I will work hard');})
.catch(()=>{console.log('I will upskill');})
.finally(()=>{console.log('I am worthy');});

const student = async()=>{
    let result =await promise;
    console.log({result});
}
student();

// let userData =[{id:1,"name":"Susan","age":22},{id:2,"name":"Berry","age":24}]

// const getUserData = (id)=>{
//     try{
//         await getUserData(ids)
//     }
// }