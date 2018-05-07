import * as React from 'react';
import Attribute from './attribute';
import './attribute.css';
import Snowflake from './snowflake';


class Builder extends React.Component {
  public render() {
    return (
      <div className="Builder">
        <Snowflake />
        <Attribute Name="TimeStamp" Number={0} />
        <Attribute Name="WorkerID" Number={1} />
        <Attribute Name="ProcessID" Number={2} />
        <Attribute Name="SequenceID" Number={3} />
    </div>
    );
  }
}

export default Builder;
