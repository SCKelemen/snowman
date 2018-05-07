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
        <span className="itemName">       {this.state.Name}   </span>
      </div>
    );
  }
}

export default Attribute;
