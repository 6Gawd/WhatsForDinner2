import React, { Component } from 'react';
import { connect } from 'react-redux';

export class List extends Component {
  constructor() {
    super();
    this.state = {
      ingredients: []
    };
  }
  componentDidMount() {}

  render() {
    return (
      <div>
        <h1>LIST</h1>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(List);
