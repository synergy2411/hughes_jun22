import { Component } from "react";

class ErrorBoundary extends Component{
    state = {
        hasError : false
    }
    static getDerivedStateFromError(err){
        console.log("Catched : ", err)
        return { hasError : true}
    }

    componentDidCatch(err){
        console.log("Error Caught : ", err)
    }
    render(){
        if(this.state.hasError){
            return (
                <div>
                    <h4>Something bad happened</h4>
                </div>
            )
        }
        else{
            return this.props.children
        }
    }

}

export default ErrorBoundary;