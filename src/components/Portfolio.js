import React from 'react';
import Toolbar from './Toolbar';

export class Portfolio extends React.Component {
  static propTypes = { }
  state = {
    filters: ['All', 'Websites', 'Flayers', 'Business Cards'],
    selected: 'All',
    projects: [{
      img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/mon.jpg',
      category: 'Business Cards',
      visible: true
    }, {
      img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg',
      category: 'Websites',
      visible: true
    }, {
      img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg',
      category: 'Websites',
      visible: true
    }, {
      img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/codystretch.jpg',
      category: 'Websites',
      visible: true
    }, {
      img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_003.jpg',
      category: 'Business Cards',
      visible: true
    }, {
      img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290.png',
      category: 'Websites',
      visible: true
    }, {
      img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg',
      category: 'Websites',
      visible: true
    }, {
      img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg',
      category: 'Business Cards',
      visible: true
    }, {
      img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_1.png',
      category: 'Websites',
      visible: true
    }, {
      img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_2.png',
      category: 'Flayers',
      visible: true
    }, {
      img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/the_ninetys_brand.jpg',
      category: 'Websites',
      visible: true
    }, {
      img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/dia.jpg',
      category: 'Business Cards',
      visible: true
    }, {
      img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197.jpg',
      category: 'Websites',
      visible: true
    }, {
      img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg',
      category: 'Websites',
      visible: true
    }, {
      img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg',
      category: 'Business Cards',
      visible: true
    }, {
      img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197_1.jpg',
      category: 'Websites',
      visible: true
    }, {
      img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_3.png',
      category: 'Flayers',
      visible: true
    }]
  }
  onSelectFilter = filter => {
    this.setState(prevState => ({projects: prevState.projects.map(o => {
      if (filter === 'All') {
        o.visible = true;
      } else {
        o.visible = false;
        if (o.category === filter) {
          return {...o, visible: true};
        }
      }
      return o;
    })}));
    this.setState({
      selected: filter
    });
  }
  render() {
    const {filters, selected, projects} = this.state;
    return (
      <>
        <Toolbar filters={filters} selected={selected} onSelectFilter={this.onSelectFilter}/>
        {projects.map(project => {
          if (project.visible) { return <img src={project.img} /> }
        })}
      </>
    )
  }
}