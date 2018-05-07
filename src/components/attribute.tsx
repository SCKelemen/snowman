import * as React from 'react';
import './snowflake.css';

interface IAttributeProps {
 // Number: number | null;
  Name:   string | null;
  Start:  number | null;
  End:    number | null;
  Length: number | null;
  Offset: string | null;
}


class Attribute extends React.Component<IAttributeProps, any> {
  constructor(props: IAttributeProps) {
    super(props);
}

  public render() {
    return (
      <div className="Attribute">
      
        <span className="itemName">       {this.props.Name}   </span>
        <span className="startPosition">  {this.props.Start}  </span>
        <span className="endPosition">    {this.props.End}    </span>
        <span className="length">         {this.props.Length} </span>
        <span className="offset">         {this.props.Offset} </span>
      </div>
    );
  }
}

export default Attribute;
