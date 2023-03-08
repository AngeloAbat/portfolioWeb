export default function Err404(){
    return(
        <div className="App App-header"  style={{paddingTop: "17%"}}>
            <h1>Sorry this page does not exist!</h1>
            <br></br>
            <p style={{color: "white"}}>Unfortunately the page you are looking for does not exist, please go back to either </p>
            <br/>
            <button> 
             <a href="/old">Old-page</a>    
            </button>
            <button> 
             <a href="/solar">Solar-page</a>    
            </button>
        </div>
    )
}