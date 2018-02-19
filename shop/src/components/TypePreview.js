import React, { Component } from 'react';

class TypePreview extends Component {
  handleClick = () => {
    this.props.onClick(this.props._id);
  };
  render() {
    return (
      <div className="link TypePreview" onClick={this.handleClick}>
        <div className="Type-name">
          {this.props.TypeName}
        </div>
        <div className="type-name">
          {this.props.typeName}
        </div>
      </div>
    );
  }
}

TypePreview.propTypes = {
  _id: React.PropTypes.string.isRequired,
  typeName: React.PropTypes.string.isRequired,
  onClick: React.PropTypes.func.isRequired,
};

export default TypePreview;
