/**
 * Created by dell on 2017/8/3.
 */
import React from 'react';
import ReactDOM from 'react-dom';

/*声明一个名为App的组件*/
class App extends React.Component {
    render() {
        return (
            <div>
                hello,world!
            </div>
        );
    }
}
//渲染页面
ReactDOM.render(<App/>, document.getElementById('app'));