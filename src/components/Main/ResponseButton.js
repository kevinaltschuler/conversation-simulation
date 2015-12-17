/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes, Component } from 'react';
import s from './Main.scss'
//import withContext from '../../decorators/withContext';
import withStyles from '../../decorators/withStyles';
//import Ink from 'react-ink';

//@withContext
@withStyles(s)
class ResponseButton extends Component {

  static propTypes = {
    setEmotion: React.PropTypes.func,
    writeMessage: React.PropTypes.func,
    updateTree: React.PropTypes.func,
  };

  render() {

    var numSrc = 'https://dl.dropboxusercontent.com/u/53274637/1.png';

    //console.log(this.props.index);

    switch(this.props.index) {
      case '0':
        //console.log(0);
        numSrc = 'https://dl.dropboxusercontent.com/u/53274637/1.png';
        break;
      case '1':
        //console.log(1);
        numSrc = 'https://dl.dropboxusercontent.com/u/53274637/2.png';
        break;
      case '2':
        //console.log(2); 
        numSrc = 'https://dl.dropboxusercontent.com/u/53274637/3.png';
        break;
      case '3':
        //console.log(3);
        numSrc = 'https://dl.dropboxusercontent.com/u/53274637/4.png';
        break;
    }

    var option = this.props.option;
    var emotion = option.emotion;
    //console.log(option);
      return (
        <div className={s.textButton}>
          <div className={s.responseText} 
            onClick={() => { 
              //this.props.setEmotion(emotion); 
              this.props.writeMessage(option.text, 0, 50, option);
              //console.log(option.response);
              //this.props.writeResponse(option.response, 0, 50);
            }}
          >
            <img style={{width: '30px', height: '30px', marginRight: '10px'}} src={numSrc}/>
            {option.text}
          </div>
        </div> 
      )
  }
}

export default ResponseButton;
