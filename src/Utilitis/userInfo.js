

export const postUserInfoToDb=(userInfo)=>{

        fetch('http://localhost:5000/userInfo',{
        method:'POST',
        headers:{'content-type':'application/json'},
        body:JSON.stringify(userInfo)
    } )
    .then(res => res.json())
    .then(data =>data)
    
}
