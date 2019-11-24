import { connect } from 'react-redux';
import List from './List.js';

const mapStateToProps = state => ({
  columns:state.columns,
});

export default connect(mapStateToProps)(List);