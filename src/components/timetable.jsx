import React from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import RaisedButton from 'material-ui/RaisedButton';
import AutoComplete from 'material-ui/AutoComplete';
import MenuItem from 'material-ui/MenuItem';
import {timetableData} from '../constants/timetableData';
import {eventsData} from '../constants/eventsData';

let sourceData = Array();
eventsData.map((eventFes) => (
  sourceData.push(eventFes.title)
));

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
          adjustForCheckbox={false}
				>
					<TableRow>
						<TableHeaderColumn>時間</TableHeaderColumn>
						<TableHeaderColumn>1日目</TableHeaderColumn>
						<TableHeaderColumn>2日目</TableHeaderColumn>
					</TableRow>
				</TableHeader>
				<TableBody
			    selectable={false}
					displayRowCheckbox={false}
				>
			 	  {timetableData.map((row) => (
						<TableRow key={row.time}>
							<TableRowColumn>{row.time}</TableRowColumn>
							<TableRowColumn>
							  <AutoComplete
									filter={AutoComplete.noFilter}
									openOnFocus={true}
									dataSource={sourceData}
						  	/><br />
							</TableRowColumn>
							<TableRowColumn>
							  <AutoComplete
									filter={AutoComplete.noFilter}
									openOnFocus={true}
									dataSource={sourceData}
						  	/><br />
							</TableRowColumn>
						</TableRow>
					))}
				</TableBody>
		  </Table>
    );
	}
}
