import React, { Component } from 'react';

class MenuDisplayImage extends Component {
  componentDidMount() {}

  render() {
    return (
      <image
        data-type={this.props.type}
        data-value={this.props.value}
        xlinkHref={this.props.href}
        alt={this.props.alt}
        className={this.props.className}
      />
    );
  }
}

export default MenuDisplayImage;
