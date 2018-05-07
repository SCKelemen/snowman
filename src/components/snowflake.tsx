import * as React from 'react';
import './snowflake.css';

class Snowflake extends React.Component {
  public render() {
    return (
      <div className="Snowflake">
        <span className="Segment badge" data-badge="64"> 0123456789 </span>
        <span className="Segment badge" data-badge="54"> 0123456789 </span>
        <span className="Segment badge" data-badge="44"> 0123456789 </span>
        <span className="Segment badge" data-badge="34"> 0123456789 </span>
        <span className="Segment badge" data-badge="24"> 0123456789 </span>
        <span className="Segment badge" data-badge="14"> 0123456789 </span>
        <span className="Segment badge" data-badge="4 "> 0123 </span>
      </div>
    );
  }
}

export default Snowflake;
