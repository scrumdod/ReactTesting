'use strict';

var React = require('react/addons');
var ReactCore = require('react')
var TestUtils = React.addons.TestUtils;
var MyComponent = React.createClass({
	 getInitialState: function() {
    return {clicked: false};
  },
	  handleClick: function(event) {
    this.setState({ clicked: ! this.state.clicked});
  },
	  render: function () {
    	var buttonText = this.state.clicked ? "clicked" : "unclicked"
        return React.createElement("button", {onClick: this.handleClick}, buttonText)           
    }
});


describe('MyComponents', function () {
  it('has button that fires a dom event for click', function (done) {
    function handleClick() { done() }    
    var comp = React.createElement(MyComponent);
    var detachedComp = TestUtils.renderIntoDocument(comp);
    
    var button = TestUtils.findRenderedDOMComponentWithTag(detachedComp, 'button');
    var buttonNode = React.findDOMNode(button);
    
    //test initial state is unclicked
    detachedComp.state.clicked.should.equal(false)

    //test the html is unclicked
    buttonNode.innerHTML.should.be.equal('unclicked')

    //click
    TestUtils.Simulate.click(buttonNode)

    //test new state is clicked
		detachedComp.state.clicked.should.equal(true)    

		//test the html is clicked
		buttonNode.innerHTML.should.be.equal('clicked')

		

    done()    
  })
})