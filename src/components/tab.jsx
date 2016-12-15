import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
// From https://github.com/oliviertassinari/react-swipeable-views
import SwipeableViews from 'react-swipeable-views';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
import Planning from '../Components/planning';
import PlanWrap from '../Components/planwrap';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400
  },
  slide: {
    padding: 10
  }
};

export default class TabsSwipeable extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0
    }
  }

  handleChange = (value) => {
    this.setState({
      slideIndex: value
    });
  };

  render() {
    return (
      <div>
        <Tabs
          onChange={this.handleChange}
          value={this.state.slideIndex}
        >
          <Tab label="HOME" value={0} />
          <Tab label="Time Table" value={1} />
          <Tab label="temp1" value={2} />
          <Tab label="temp2" value={3} />
        </Tabs>
        <SwipeableViews
          index={this.state.slideIndex}
          onChangeIndex={this.handleChange}
        >
          <div>
            <h2 style={styles.headline}>Tabs with slide effect</h2>
            Swipe to see the next slide.<br />
          </div>
          <div style={styles.slide}>
            <PlanWrap />
          </div>
          <div style={styles.slide}>
          </div>
          <div style={styles.slide}>
          </div>
        </SwipeableViews>
      </div>
    );
  }
}
