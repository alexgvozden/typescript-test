import * as React from 'react';
import './App.css';
import NumberBlock from './components/Number';

const total: number = 1000;

interface IApp {
  numbers: number[];
}

const initialState: IApp = {
  numbers: []
};

const tickTime: number = 1000;

class App extends React.Component<{}, IApp> {
  private interval: number;

  constructor(props: {}) {
    super(props);
    this.state = initialState;

    this.tick = this.tick.bind(this);
  }

  public componentDidMount() {
    this.interval = window.setInterval(this.tick, tickTime);
    this.tick();
  }

  public componentWillUnmount() {
    window.clearInterval(this.interval);
  }

  public render() {
    const { numbers } = this.state;
    return numbers.map((no, index) => <NumberBlock key={index} no={no} />);
  }

  public tick() {
    const numbers: number[] = [];

    for (let i = 0; i < total; i = i + 1) {
      numbers.push(Math.round(Math.random() * 899) + 100);
    }

    this.setState({ numbers });
  }
}

export default App;
