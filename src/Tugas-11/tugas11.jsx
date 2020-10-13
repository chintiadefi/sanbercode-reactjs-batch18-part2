import React, {Component} from 'react'

class Timer extends Component{
  constructor(props){
    super(props)
    this.state = {
      countDown: 100,
      time: 0,
      showTask: true
    }
  }

  componentDidMount(){
    this.countDownID = setInterval(
      () => this.setState({countDown: this.state.countDown - 1}, {time: this.state.time + 1}), 1000
    );
  }

  componentWillUnmount(){
    this.setState({showTask: false});
  }

  componentDidUpdate(){
      if (this.state.countDown === 0) {
          this.componentWillUnmount()
      }
  }


  render(){
    return(
    <div>
      {
        this.state.showTask && (
        <h1>{this.state.countDown} {this.state.time}</h1>
        )
      }
    </div>
    )
  }
}

  export default Timer
  