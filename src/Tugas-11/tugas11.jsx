import React, {Component} from 'react'

class Timer extends Component{
  constructor(props){
    super(props)
    this.state = {
      countDown: 100,
      time: new Date(),
      showTask: true
    }
  }

  currentTime() {
      this.setState({
          time: new Date()
      })
  }

  componentDidMount(){
    this.countDownID = setInterval(
      () => this.setState({countDown: this.state.countDown - 1}), 1000
    );
    this.countDownID = setInterval(
        () => this.setState(this.currentTime()), 1000
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
        <div style={{display: "flex", margin: "0 20% 0 20%"}}>
        <h1 style={{marginRight: "50px"}}>Sekarang jam : {this.state.time.toLocaleTimeString()}</h1>
        <h1>Hitung mundur : {this.state.countDown} </h1>
        </div>
        )
      }
    </div>
    )
  }
}

  export default Timer
  