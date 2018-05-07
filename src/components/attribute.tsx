import * as React from 'react';
import './snowflake.css';

interface IAttributeProps {
  Number:  number | null;
  Name: string | null;
}


interface IAttributeState {
  Number:    number | null;
  Name:   string | null;
  Start:  number | null;
  End:    number | null;
  Length: number | null;
  Offset: string | null
}

class Attribute extends React.Component<IAttributeProps, IAttributeState> {
  constructor(props: IAttributeProps) {
    
    super(props);
    this.state = {Number: this.props.Number, Name: this.props.Name, Start: 64, End: 54, Length: 10, Offset: "0x00FF" }
  }
  
  public render() {
    return (
      <div className="Attribute">      
        <span className="itemNum">       {this.state.Number}   </span>
        <span className="itemName">       {this.state.Name}   </span>
        <span className="startPosition">  {this.state.Start}  </span>
        <span className="endPosition">    {this.state.End}    </span>
        <span className="length">         {this.state.Length} </span>
        <span className="offset">         {this.state.Offset} </span>
      </div>
    );
  }
}

export default Attribute;
