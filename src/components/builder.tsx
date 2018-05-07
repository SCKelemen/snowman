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
        <Attribute Name="Sam" Number={1} />
        <Attribute Name="Sam" Number={2} />
        <Attribute Name="Sam" Number={3} />
        <Attribute Name="Sam" Number={4} />
        <Attribute Name="Sam" Number={5} />
        <Attribute Name="Sam" Number={6} />
      </div>
    );
  }
}

export default Builder;
