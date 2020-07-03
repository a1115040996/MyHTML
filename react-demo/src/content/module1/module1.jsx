import React, {Component} from 'react';
import './module1.less';

export default class Module1 extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className="module1">
                module1....
                <h2>Props Msg</h2>
                <div>{JSON.stringify(this.props.data)}</div>
            </div>
        );
    }
}

