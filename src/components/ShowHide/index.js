// Write your code here

import "./index.css"
import {Component}  from "react" 

class ShowHide extends Component{
    state = {isFirstName: false, isLastName: false}

        showFirstName = () =>{
            this.setState(prevState => ({isFirstName: !prevState.isFirstName}))
        }

        
        showLastName = () =>{
            this.setState(prevState => ({isLastName: !prevState.isLastName}))
        }

    render(){
        {isFirstName, isLastName} = this.state

        return(
            <div className="container">
                <h1> Show/Hide </h1>
                    <div className = "show-hide-container">
                        <div className="name-container">
                            <button type = "button" className = "button" onClick = {this.showFirstName}> Show/Hide First name </button>
                            {isFirstName && <p className = "name"> Joe </p>}
                        </div>
                        <div className="name-container">
                            <button type = "button" className = "button" onClick = {this.showLastName}> Show/Hide Last name </button>
                            {isLastName && <p className = "name"> Jonas </p>}
                        </div>
                    </div>
            </div>
        )
    }
}

export default ShowHide


