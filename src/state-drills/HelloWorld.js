import React, { Component } from 'react';

class HelloWorld extends Component {

    state = {

        who: 'World',

    }



    render() {

        return (
            < div >

                <button onClick={() => this.setState({ who: 'World' })}> World</button>
                <button onClick={() => this.setState({ who: 'React' })}>React</button>
                <button onClick={() => this.setState({ who: 'Friend' })}>Friend</button>

                <p>Hello, {this.state.who}</p>


            </div >

        );




    }
}



export default HelloWorld;
