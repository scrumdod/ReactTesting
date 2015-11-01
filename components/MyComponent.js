'use strict';
var React = require('react/addons');

var MyComponent = React.createClass({
    render: function () {
        return React.createElement("button", null,"Click Me", this.props.value)
           //<input type="button" onClick={this.props.onSomeEvent} value="Click Me!" />
        
    }
});

module.exports = MyComponent