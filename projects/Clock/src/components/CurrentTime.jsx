let CurrentTime=()=>{
    let time=new Date();
    return(
       <p>This is current date : {time.toLocaleDateString()} time : {time.toLocaleTimeString()}</p>
    )
}
export default CurrentTime;