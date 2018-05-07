import * as React from 'react';
import './snowflake.css';

class Snowflake extends React.Component {
  public render() {
    return (
      <div className="Snowflake">
        <span className="Segment badge" data-badge="64"> 1111111111 1111111111 1111111111 1111111111 11 </span>
        <span className="Segment badge" data-badge="22"> 11111111 1111</span>
        <span className="Segment badge" data-badge="10"> 1111</span>
        <span className="Segment badge" data-badge="6">  11 1111 </span>
       
      </div>
    );
  }
}

export default Snowflake;
