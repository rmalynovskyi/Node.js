import React from "react";

export default class Navigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0
        };
    }

    onItemClick(event) {
        const index = Number(event.currentTarget.getAttribute("data-index"));
        this.setState({
            activeIndex: index
        });
    }

    render() {
        return <div class= {this.props.className}>
    {this.props.tabs.map(function(item, index){
    const isActive = index === this.state.activeIndex;
   return <a class={isActive ? "nav-item nav-link active" : "nav-item nav-link"} href="#" data-index={index} onClick={this.onItemClick.bind(this)}>{item}</a>;
}, this)}     
  </div>;
    }
}
