import React from 'react';
    
    class Timer extends React.Component {
      constructor(props) {
        super(props);

        this.state = { to: 3, from: 10 };
      }
    
      componentDidMount(to) {
       
        let timerFn = setInterval(() => {
        var timeLeft = this.state.to + 1
        console.log(timeLeft)
          
          if(timeLeft === this.state.from) {
            clearInterval(timerFn)
          }
          this.setState({
            to: timeLeft
          })
        }, 1000)
        return this.setState({timeLeft: to})
      }
                     
      render() {
        return React.createElement(
          'div',
          null,
          'Seconds: ',
          this.state.to
        );
      }
    }

export default Timer;
// ReactDOM.render(<Timer />, document.getElementById('timer-example'));