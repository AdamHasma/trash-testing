let r = 0;
let g = 0;
let b = 0;
let color = '#222'

class Parent extends React.Component {
  render() {
    return (<div>
      <ColorBoxes/>
      <Button/>
    </div>);
  }
};

class Button extends React.Component {
  render() {
    return (<button onClick={this.props.onClick}>
      Generate Color
    </button>);
  }
}

class ColorBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: `rgb(200, 200, 200)`
    };
    this.changeColor = this.changeColor.bind(this);
  }

  changeColor() {
    r = Math.floor(Math.random() * 255) + 50;
    g = Math.floor(Math.random() * 255) + 50;
    b = Math.floor(Math.random() * 255) + 50;
    const newColor = this.state.color = `rgb(${r}, ${g}, ${b})`;
    this.setState({color: newColor});
  }

  render() {
    return (<div className="color-box" style={{
        background: color
      }}></div>);
  }
}

class ColorBoxes extends React.Component {
  render() {
    return (<div className="container">
      <ColorBox/>
      <ColorBox/>
      <ColorBox/>
      <ColorBox/>
      <ColorBox/>
    </div>);
  }
}

ReactDOM.render(<Parent/>, document.getElementById("root"))
