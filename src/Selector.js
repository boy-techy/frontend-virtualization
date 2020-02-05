import React, { Component } from "react";
import Options from "./Option";
import { caculateStyles } from "./util";
import { ROW_COUNT } from "./constant";

const ROW_HEIGHT = 10;
const CONTAINER_HEIGHT_COUNT = 10;
class Select extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      renderList: props.list.slice(0, CONTAINER_HEIGHT_COUNT)
    };
  }

  scrollHandler = e => {
    e.persist();
    var timer;
    clearTimeout(timer);
    timer = setTimeout(() => {
      if (e) {
        const topScrolled = e.target.scrollTop;
        const count = topScrolled % ROW_HEIGHT;
        const { list } = this.props;
        this.setState({
          renderList: list.slice(count, CONTAINER_HEIGHT_COUNT + count + 1)
        });
      }
    }, 200);
  };

  toggleState = () => {
    const { isOpen } = this.state;
    console.log("Scroll listener triggered");

    this.setState({ isOpen: !isOpen });
  };

  render() {
    const { isOpen, renderList } = this.state;
    const styles = caculateStyles(ROW_COUNT);
    return (
      <div onClick={this.toggleState}>
        <span>Toggles</span>
        <div className="style-container" onScroll={this.scrollHandler}>
          <div style={styles}>
            {isOpen
              ? renderList.map(item => <Options item={item} key={item.id} />)
              : null}
          </div>
        </div>
      </div>
    );
  }
}

export default Select;
