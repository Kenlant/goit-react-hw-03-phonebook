import { Component } from 'react';
import propTypes from './SectionPropTypes';

export default class Section extends Component {
  render() {
    const { title, children } = this.props;
    return (
      <section>
        <h2>{title}</h2>
        {children}
      </section>
    );
  }
}

Section.propTypes = propTypes;
