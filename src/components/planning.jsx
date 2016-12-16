import React from 'react';
import {GridTile} from 'material-ui/GridList';
import {Paper} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import {tilesData} from '../constants/eventsData';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  },
	tileStyle: {
	},
  titleStyle: {
    color: 'rgb(255, 255, 255)',
	},
	tile: {
		div: {
			height: '100px'
		}
	}
};

/**
 * This example demonstrates the horizontal scrollable single-line grid list of images.
 */
const Planning = () => (
  <div style={styles.root}>
		{tilesData.map((tile) => (
			<GridTile
				key={tile.key}
				title={tile.title}
			  style={styles.tile}
				actionIcon={<IconButton><StarBorder color="#FFEB3B" /></IconButton>}
				titleStyle={styles.titleStyle}
				titleBackground="linear-gradient(to top, rgba(255,0,0,0.7) 0%,rgba(255,255,255,0.3) 70%,rgba(255,0,0,0) 100%)"
			>
				<img src={tile.img} />
			</GridTile>
		))}
  </div>
);

export default Planning;
