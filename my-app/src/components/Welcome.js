import React, {Component} from 'react'
import Greet from './Greet'

class Welcome extends Component {
    constructor(props){
        super(props)
        this.state = {
            message: 'Welcome visitor!',
            parentName: 'Parent',
            count: 0
        }

        this.incrementFive = this.incrementFive.bind(this);  /*binding method 3*/

        this.greetParent = this.greetParent.bind(this);
    }

    changeMessage(){
        this.setState({
            message: 'Thank you!'
        })
    }

    greetParent(childName){
        alert(`Hello ${this.state.parentName} from ${childName}`)
    }

    increment(){
        // this.setState({
        //     count: this.state.count + 1
        // },
        // () => {console.log("Callback after state is set")}
        // )
        this.setState(
            (prevState) => ({
                count: prevState.count + 1
            }),
            () => {console.log("Callback after state is set")}
        )
    }

    incrementFive(){
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }

    incrementTwo = () => {          /*binding method 4*/
        this.increment()
        this.increment()
    }

    clickHandler(){
        console.log("Button Clicked")
    }

    render(){
        return  (
            <div>
                <Greet greetHandler={this.greetParent} />

                <h1>{this.state.message}</h1>
                <button onClick={this.changeMessage.bind(this)}>Change</button> {/*binding method 1 not recommended*/}

                <h2>Count: {this.state.count}</h2>
                <button onClick={() => this.increment()}>Increment</button>     {/*binding method 2 better if has argument for the function*/}
                
                <button onClick={this.incrementFive}>Increment Five</button>    {/*binding method 3*/}

                <button onClick={this.incrementTwo}>Increment Two</button>    {/*binding method 4*/}

                <button onClick={this.clickHandler}>Console log</button>
            </div>
        )
    }
}

export default Welcome