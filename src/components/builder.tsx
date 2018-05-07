import * as React from 'react';
import Attribute from './attribute';
import './attribute.css';
import Snowflake from './snowflake';


class Builder extends React.Component {
  public render() {
    return (
      <div className="Builder">
        <Snowflake />
        <Attribute Name="Sam" Start={1} End={1} Offset="0x00" Length={0} />
      </div>
    );
  }
}

export default Builder;
