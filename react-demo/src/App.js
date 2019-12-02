import React, {Component} from 'react';
import Module1 from './content/module1/module1';
export default class App extends Component{
  constructor(){
    super();
    this.state = {
      user: 'zhangsan'
    }
    this.propConfig = {
      name: 'props',
      text: 'hello'
    }

    // 绑定 上下文对象
    this.sendModule1Msg = this.sendModule1Msg.bind(this);
  }

  sendModule1Msg() {
    console.log('ready to send!', this);
  }

  render(){
      return (
          <div className="App">
              <header className="App-header">
                  {this.state.user}
              </header>

            <div className="Module1Container">
                <div
                    className="send"
                    onClick={this.sendModule1Msg}>
                    <span>Click me to send Module1</span>
                </div>

                <Module1 data={this.propConfig}></Module1>
            </div>
          </div>
      );
  }
}

