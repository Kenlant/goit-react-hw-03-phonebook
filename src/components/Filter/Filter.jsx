import { Component } from 'react';
import propTypes from './FilterPropTypes';
import styles from './Filter.module.css';

export default class Filter extends Component {
  constructor() {
    super();

    this.state = {
      filter: ``,
    };
  }

  render() {
    const { onChange } = this.props;
    const { filter } = this.state;
    const { 'filter-title': filterTitleClassName } = styles;

    return (
      <>
        <span className={filterTitleClassName}>Find contacts by name</span>
        <input
          type="text"
          value={filter}
          onChange={e => {
            const value = e.target.value;
            this.setState({ filter: value });
            onChange(value);
          }}
        />
      </>
    );
  }
}

Filter.propTypes = propTypes;
