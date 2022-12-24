

export const postUserInfoToDb=(userInfo)=>{

        fetch('https://fast-electro-server-side.vercel.app/userInfo',{
        method:'POST',
        headers:{'content-type':'application/json'},
        body:JSON.stringify(userInfo)
    } )
    .then(res => res.json())
    .then(data =>data)
    
}
