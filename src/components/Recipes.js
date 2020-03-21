import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Recipes extends Component {
  render() {
    return (
      <div>
        <h1>RECIPES</h1>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Recipes);
