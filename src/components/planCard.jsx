import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';

export default class planCard extends React.Component {
constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };
  }

  handleExpandChange = (expanded) => {
    this.setState({expanded: expanded});
  };

  handleToggle = (event, toggle) => {
    this.setState({expanded: toggle});
  };

  handleExpand = () => {
    this.setState({expanded: true});
  };

  handleReduce = () => {
    this.setState({expanded: false});
  };


  render() {
		const styles = {
			card: {
				display: 'block',
				width: '300',
				transitionDuration: '0.3s',
				height: this.state.height
			},
			titleStyle: {
				fontSize: '24'
  		},
			subtitleStyle: {
				fontSize: '20'
  		},
			media: {
  		},
			text: {
				fontSize: '20'
  		}
		}
    return (
      <Card expanded={this.state.expanded} onExpandChange={this.handleExpandChange} style={styles.card}>
        <CardHeader
          title={this.props.title}
          subtitle={this.props.subtitle}

			    titleStyle={styles.titleStyle}
			    subtitleStyle={styles.subtitleStyle}
          actAsExpander={true}
          showExpandableButton={true}
        />
			<CardMedia
			  style={styles.media}
			>
				<img src="src/assets/img/gidai.png" />
			</CardMedia>
      <CardText
			  expandable={true}
			  style={styles.text}
			>
				今年度目玉の新企画！
				技大の謎を解き明かせ！？
				今年から始まる新企画！
				謎解きに自信がある人集まれ！
				開催日時・場所
				9/17(土)　10:00~15:00	案内所,他
				9/18(日)　10:00~14:00	案内所,他
			</CardText>
		  </Card>
    );
  }
}
