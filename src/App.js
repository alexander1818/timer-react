import React from 'react';
    
    class Timer extends React.Component {
      constructor(props) {
        super(props);

        this.state = { from: 3, to: 10 };
      }
    
      componentDidMount(from) {
       
        let timerFn = setInterval(() => {
        var timeLeft = this.state.from + 1
        console.log(timeLeft)
          
          if(timeLeft === this.state.to) {
            clearInterval(timerFn)
          }
          this.setState({
            from: timeLeft
          })
        }, 1000)
        return this.setState({timeLeft: from})
      }
                     
      render() {
        return React.createElement(
          'div',
          null,
          'Seconds: ',
          this.state.from
        );
      }
    }

export default Timer;