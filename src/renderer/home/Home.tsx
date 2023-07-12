import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import icon from '../../assets/icon.svg';
import './Home.css';
import React from 'react';
import axios from 'axios';

let global_script = '';
window.electron?.ipcRenderer?.on('script', (script: any) => {
  console.log('global_script', script);
  global_script = script;
});

class HomeProps {
  name: string = 'ss';
}
class HomeState {
  constructor(public title: string) {}
}

export class Home extends React.Component<HomeProps, HomeState> {
  constructor(props: HomeProps) {
    super(props);

    this.state = new HomeState('');
  }

  deal() {
    console.log('global_script', global_script);
    axios
      .get('http://127.0.0.1:4242/api', {
        params: {
          data: 'xx',
        },
      })
      .then((response) => {
        console.log(response);
        let result = document.querySelector('#res');
        console.log('result=', result);

        if (result) {
          result.innerHTML += response.data + '<br/>';
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.deal();
          }}
        >
          {this.state.title}
        </button>
        <p id="res" color="black"></p>
      </div>
    );
  }
}
