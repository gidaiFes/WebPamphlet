import React from 'react';
import {GridTile} from 'material-ui/GridList';
import {Paper} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import {tilesData} from '../constants/tilesData';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  },
  gridList: {
    display: 'flex',
    flexWrap: 'nowrap',
    overflowX: 'auto'
  },
  titleStyle: {
    color: 'rgb(255, 255, 255)'
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
				actionIcon={<IconButton><StarBorder color="#FFEB3B" /></IconButton>}
				titleStyle={styles.titleStyle}
				titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
			>
				<img src={tile.img} />
			</GridTile>
		))}
  </div>
);

export default Planning;
