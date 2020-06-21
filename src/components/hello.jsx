// const Hello = ({ name }) => {
//   return (
//     <div>
//       Hello,
//       {name}
//     </div>
//   );
// };

class Hello extends Component {
  constructor(props) {
    super(props);
    this.state = { clicked: false };
  }

  handleClick = () => {
    this.setState((prevState) => ({ clicked: !prevState.clicked }));
  };

  render() {
    return (
      <div
        className={this.state.clicked ? "clicked" : null}
        onClick={this.handleClick}
      >
        Hello
        {this.props.name}
      </div>
    );
  }
}
