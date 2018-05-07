import * as React from 'react';
import './snowflake.css';

class Snowflake extends React.Component {
  public render() {
    return (
      <div className="Snowflake">
        <span className="Segment"> 0123456789 </span>
        <span className="Segment"> 0123456789 </span>
        <span className="Segment"> 0123456789 </span>
        <span className="Segment"> 0123456789 </span>
        <span className="Segment"> 0123456789 </span>
        <span className="Segment"> 0123456789 </span>
        <span className="Segment"> 0123 </span>
      </div>
    );
  }
}

export default Snowflake;
