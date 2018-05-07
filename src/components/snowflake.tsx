import * as React from 'react';
import './snowflake.css';

class Snowflake extends React.Component {
  public render() {
    return (
      <div className="Snowflake">
        <span className="Segment badge" data-badge="64"> 1111111111 </span>
        <span className="Segment badge" data-badge="54"> 1111111111 </span>
        <span className="Segment badge" data-badge="44"> 1111111111 </span>
        <span className="Segment badge" data-badge="34"> 1111111111 </span>
        <span className="Segment badge" data-badge="24"> 1111111111 </span>
        <span className="Segment badge" data-badge="14"> 1111111111 </span>
        <span className="Segment badge" data-badge="4 "> 1111 </span>
      </div>
    );
  }
}

export default Snowflake;
