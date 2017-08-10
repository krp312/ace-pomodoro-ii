import React from "react";
import { connect } from "react-redux";
import "./styles/break-timer.css";
import {resetState, restartWorkTimer} from "../actions/actions";

export class BreakTimer extends React.Component {
restartSession(e) {
   clearInterval(this.props.intervalId);
  //  let {breakDuration, workDuration} = this.props;
  //  this.props.dispatch(resetState());
  //  console.log('the two numbers we want to send to work timer: ' + this.props.workDuration + ' ' + this.props.breakDuration)
   this.props.history.push(`/work-timer`);
  this.props.dispatch(restartWorkTimer());
}
  render() {
    let { secondsRemaining, minutesRemaining } = this.props;
    return (
      <div className="break-timer">
        <div className="break-clock" role="timer">
          <span className="minutes">
            {minutesRemaining < 10 ? "0" + minutesRemaining : minutesRemaining}
          </span>
          <span className="colon">:</span>
          <span className="seconds">
            {secondsRemaining < 10 ? "0" + secondsRemaining : secondsRemaining}
          </span>
        </div>
        <button onClick={e => this.restartSession(e)} className="restart-sesison-button" type="button">
          Restart Pomodoro Session
        </button>

      </div>
    );
  }
}

const mapStateToProps = state => ({
  minutesRemaining: state.breakMinutesRemaining,
  secondsRemaining: state.breakSecondsRemaining,
  intervalId: state.breakId,
  workDuration: state.workDuration,
  breakDuration: state.breakDuration
});

export default connect(mapStateToProps)(BreakTimer);
