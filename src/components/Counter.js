import React, {Component} from 'react';

// Counter component
class Counter extends Component {
  /**************************
      component lifecycle
  **************************/
  // (https://d2vvqscadf4c1f.cloudfront.net/RXZidTc7S5WEicK3fiNW_Screen%20Shot%202016-02-25%20at%2012.06.29%20PM.png)
  // getDefaultProps is only avaliable with React.createClass
  // getDefaultProps () {
  //   console.log('Establish default props')
  // }
  /* propTypes used to make sure the data you receive is valid */
  static propTypes = {
    value: React.PropTypes.number.isRequired,
    onIncrement: React.PropTypes.func.isRequired,
    onDecrement: React.PropTypes.func.isRequired,
  }
  // state of the component
  state = {
    text:'hi i am initial state of this component',
  }
  // getInitialState () {
  //   console.log('curent state is: '+ this.state);
  // }
  componentWillMount () {
    console.log('component initialized');
  }
  componentDidMount () {
    console.log('component rendered');
  }
  componentWillReceiveProps (nextProps) {
    console.log('new props arrived:' + JSON.stringify(nextProps));
  }
  // if not implemented, React will decide by itslef
  // should component be updated or not.
  // You should implement it if some additional logic is required
  shouldComponentUpdate(nextProps, nextState) {
    let renderRequired = (this.state !== nextState || this.props !== nextProps);
    console.log('========SCU========');
    console.log('should component update?');
    console.log('cur state: '+JSON.stringify(this.state));
    console.log('new state: '+JSON.stringify(nextState));
    console.log('cur props: '+JSON.stringify(this.props));
    console.log('new props: '+JSON.stringify(nextProps));
    console.log(renderRequired ? 'we need rerender' : 'nothing changed');
    console.log('===================');
    return (renderRequired);
  }
  componentWillUnmount () {
    console.log('component would be removed from vDOM');
  }
  // button click handler
  handleChangeStateButton = () => {
    this.setState ({
      text: 'hi I am new state of this component',
    })
  }
  // button click handler
  handleIncriment = () => {
    const { onIncrement } = this.props;
    onIncrement();
  }
  // button click handler
  handleDecrement = () => {
    const { onDecrement } = this.props;
    onDecrement();
  }
  // button click handler
  handleBothButton = () => {
    const { onIncrement } = this.props;
    onIncrement();
    this.setState ({
      text: 'hi I am super new state of this component',
    })
  }
  // render is called every time when component need to draw any changes
  // setState(), forceUpdate(), setProps(),
  // all of them will end up with render()
  // in case shouldComponentUpdate returns true
  render () {
    console.log('rendering...');
    return(
      <div className="test-name">
        <h3>{ this.state.text }</h3>
    		<h1>{ this.props.value }</h1>
    		<button onClick={ this.handleIncriment }>+</button>
    		<button onClick={ this.handleDecrement }>-</button>
    		<button onClick={ this.handleChangeStateButton }>change state</button>
        <button onClick={ this.handleBothButton }>change state and props</button>
    	</div>
    )
  }
}

export default Counter;

/*
// prety much the same component written without using class
// jsut to see the difference
// those are called stateless
// pros:
//   * cleaner components
//   * more lightweight
// some kind of cons:
//   * no state (can't really say it's bad)
//   * no acces to lifecycelhooks

const Counter = ({value, onIncrement, onDecrement}) => (
	<div>
		<h1>{value}</h1>
		<button onClick={onIncrement}>+</button>
		<button onClick={onDecrement}>-</button>
	</div>
)

export default Counter;
*/
