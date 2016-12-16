import React from 'react';
import PlanCard from '../Components/planCard';
import {tilesData} from '../constants/tilesData';

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
				{tilesData.map((tile) => (
					<div key={tile.key}>
					  <PlanCard title={tile.title} subtitle={tile.subtitle}/>
					</div>
				))}
      </div>
    );
  }
}
