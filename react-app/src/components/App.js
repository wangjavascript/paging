import React, { Component } from 'react'
import axios from 'axios'
import '../mock'


export default class App extends Component {
    state = {}
    componentDidMount() {
        axios.post('/list', { 'page': 2, 'pageSize': 5 }).then(({ data }) => {
            console.log(data)
            this.setState({ ...data })
        })
    }
    SetAdd = () => {   
        let { dq, page, pageSize, } = this.state
        if (dq < page * pageSize) {
            this.setState({ dq: dq + 1 })
        }

    }
    minus = () => {
        let { dq, pageSize, } = this.state
        if (dq > pageSize + 1) {
            this.setState({ dq: dq - 1 })
        }
    }
    render() {
        let { dq, list } = this.state
        return (
            <>
                <button onClick={this.minus}>上一页</button>
                {
                    list && list.map((item, index) =>
                        <span className={item.id === dq ? 'active' : ''} key={index}>{item.id}</span>
                    )
                }
                <button onClick={this.SetAdd}>下一页</button>
            </>
        )
    }
}

