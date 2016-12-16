import React from 'react';
import PlanCard from '../Components/planCard';
import {eventsData} from '../constants/eventsData';

export default class PlanWrap extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  handleChange = (value) => {
    this.setState({
      slideIndex: value
    });
  };

  render() {
		const styles = {
			root: {
				display: 'flex',
				flexWrap: 'wrap',
				justifyContent: 'space-around'
			}
		}
    return (
      <div style={styles.root}>
				{eventsData.map((eventFes) => (
					<div key={eventFes.key}>
					  <PlanCard title={eventFes.title} subtitle={eventFes.subtitle} text={eventFes.text}/>
					</div>
				))}
      </div>
    );
  }
}
