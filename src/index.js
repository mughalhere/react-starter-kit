import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Welcome extends React.Component {
    render(){
        return(
            <div>
                Hi I am Welcome
            </div>
        )
    }
}

ReactDOM.render(<Welcome />, document.getElementById('root'));