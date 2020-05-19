import React, {Component} from 'react';

import List from '../../component/bookList/Index';
import Data from '../../component/bookList/mock_data/Mock_Fiction.json';

export default class FictionBook extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <List data={Data.data} />;
  }
}
