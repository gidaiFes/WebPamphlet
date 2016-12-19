import React from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import RaisedButton from 'material-ui/RaisedButton';
import {timetableData} from '../constants/timetableData';

const styles = {
  headline: {
    fontSize: 36,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400
  },
  slide: {
    padding: 10
  }
};
export default class TimeTable extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  handleChange = (value) => {
    this.setState({
    });
  };

  render(){
	  return (
		  <Table
			  selectable={false}
			>
        <TableHeader
			    selectable={false}
					displaySelectAll={false}
				>
					<TableRow
			      style={{textAlign: 'center'}}>
						<TableHeaderColumn style={{textAlign: 'center'}}>時間</TableHeaderColumn>
						<TableHeaderColumn style={{textAlign: 'center'}}>1日目</TableHeaderColumn>
						<TableHeaderColumn style={{textAlign: 'center'}}>2日目</TableHeaderColumn>
					</TableRow>
				</TableHeader>
				<TableBody
			    selectable={false}
          deselectOnClickaway={false}
					displayRowCheckbox={false}
				>
			 	  {timetableData.map((row) => (
						<TableRow key={row.time}>
							<TableRowColumn>{row.time}</TableRowColumn>
							<TableRowColumn>{row.first}</TableRowColumn>
							<TableRowColumn>{row.second}</TableRowColumn>
						</TableRow>
					))}
				</TableBody>
		  </Table>
    );
	}
}
