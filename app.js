console.log("Message to Developer")
function AlertMessager(){
    const Hi =()=>{alert("Message from javascript Alert")}
    return <div><button onClick={Hi}>click</button></div>
}
ReactDOM.render(<AlertMessager/>,document.getElementById('my div'))