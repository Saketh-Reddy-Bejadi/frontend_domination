onmessage=data=>{
    const res=data.data.reduce((v,i)=>i+v,0);
    postMessage(res);
}