import React, {Component} from 'react';

import List from '../../component/bookList/Index';
import Data from '../../component/bookList/mock_data/Mock_HisFiction.json';

export default class HisFictionBook extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <List data={Data.data} />;
  }
}
