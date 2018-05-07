import * as React from 'react';
import './snowflake.css';

class AttributeList extends React.Component {
  public render() {
    return (
      <div className="AttributeList">
       {this.props.children}
      </div>
    );
  }
}

export default AttributeList;
