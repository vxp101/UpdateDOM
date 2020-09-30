import React, { Component } from 'react';

class HelloWorld extends Component {

    state = {

        who: 'World',
        friend: 'Friend',
        react: 'React'

    }

    render() {
        let word = 'word'

        return (
            < div >

                <button onClick={() => {
                    word = this.state.who;
                    console.log(word);
                }}>World</button>
                <button>React</button>
                <button>Friend</button>

                <p>Hello, {word}</p>


            </div>

        );




    }
}



export default HelloWorld;
