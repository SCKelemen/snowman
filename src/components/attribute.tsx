import * as React from 'react';
import './snowflake.css';



interface IAttributeState {
  Name:   string | null;
  Start:  number | null;
  End:    number | null;
  Length: number | null;
  Offset: string | null
}

class Attribute extends React.Component<any, IAttributeState> {
  constructor(props: any) {
    super(props);
    this.state = { Name: "TimeStamp", Start: 64, End: 54, Length: 10, Offset: "0x00FF" }
  }
  
  public render() {
    return (
      <div className="Attribute">      
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
