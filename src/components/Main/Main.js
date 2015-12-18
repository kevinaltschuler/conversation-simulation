/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes, Component } from 'react';
import s from './Main.scss'
//import withContext from '../../decorators/withContext';
import withStyles from '../../decorators/withStyles';
//import Ink from 'react-ink';
import ResponseButton from './ResponseButton'


//@withContext
@withStyles(s)
class Main extends Component {

  static propTypes = {
    updateTree: React.PropTypes.func,
    options: React.PropTypes.array
  };

  state = {
  		emotion: 'def',
      hideOptions: false,
      message: '',
      response: '',
      score: 0,
      scoreOpacity: 0,
      waitingForResponse: false,
      waitingForMessage: false,
      option: {},
      scoreDelta: 0,
      splashScreen: true,
      
      

  };

  componentWillUpdate() {
    if(this.props.options.length == 1 && this.state.hideOptions == false) {
      //this.writeMessage(this.props.options[0].text, 0, 50, this.props.options[0]);
      //this.props.updateTree(this.props.options[0].next);
    }
  };

  componentDidMount() {
    document.addEventListener("keydown", this._onKeyDown.bind(this));
    if(this.props.options.length == 1 && this.state.hideOptions == false) {
      this.writeMessage(this.props.options[0].text, 0, 50, this.props.options[0]);
      this.props.updateTree(this.props.options[0].next);
    }
  };

  writeMessage(message, index, interval, option) { 
    var hisAudio = new Audio('https://dl.dropboxusercontent.com/u/53274637/me.wav');
    if(this.state.option != option ) { 
      this.setState({option: option});
      this.displayScore(option); 
      this.setState({
        response: ''
      });
    }
    if(this.props.options.length != 1 && this.state.hideOptions == false) {
      //console.log(option.next);
      this.props.updateTree(option.next);
    }
    if ( message != undefined && index < message.length) {
      if(index % 2 == 0) {
        hisAudio.play();
      }
      var newMessage = (index == 0) ? message[index] : this.state.message + message[index];
      this.setState({
        message: newMessage,
        response: '',
        hideOptions: true
      });
      setTimeout((() => this.writeMessage(message, index + 1, interval, option)).bind(this), interval);
    } else {
      if(message == '') {
        this.writeResponse(this.state.option.response, 0, 50, this.state.option);
      } else {
        setTimeout(
          () => {
            this.setState({
              waitingForMessage: true
            }); 
          },
          500
        );
      }
    }

  };

  writeResponse(response, index, interval) { 
    var herAudio = new Audio('https://dl.dropboxusercontent.com/u/53274637/her.wav');
    if (response != undefined && index < response.length) {
      var newResponse = (index == 0) ? response[index] : this.state.response + response[index];
      if(index % 2 == 0) {
        herAudio.play();
      }
      this.setState({
        response: newResponse,
        hideOptions: true
      });
      //console.log(option);
      setTimeout((() => this.writeResponse(response, index + 1, interval)).bind(this), interval);
    } else {
      setTimeout(
        () => {
          this.setState({
            waitingForResponse: true
          });
        },
        500
      );
    }
  };

  fadeOut(opacity) {
    if(opacity > 0) {
      var newOpacity = opacity - .01
      this.setState({
        scoreOpacity: newOpacity
      });
      setTimeout(() => this.fadeOut(newOpacity), 50)
    } else {
      this.setState({
        scoreOpacity: 0
      });
    }
  };

  displayScore(option) {
    if(option.score != 0) {
      this.setState({
        scoreOpacity: 1,
        score: this.state.score + option.score,
        scoreDelta: option.score
      });
      this.fadeOut(1);
    }
  };

  _onKeyDown(event) {
    //console.log('message');
     if(event.keyCode == 13) {
        if(this.state.waitingForMessage) {
          this.setState({ 
            message: '', 
            waitingForMessage: false
          });
          this.writeResponse(this.state.option.response, 0, 50, this.state.option);
        }
        if(this.state.waitingForResponse) {
          this.setState({
            waitingForResponse: false,
            hideOptions: false,
          });
          if(this.props.options.length == 1) 
            this.next();
        }
     }
  };



  setEmotion(emotion) {
    //console.log(emotion);
    this.setState({
      emotion: emotion
    });
  };

  next() {
    this.setState({
      hideOptions: true
    });
    this.writeMessage(this.props.options[0].text, 0, 50, this.props.options[0]);
    this.props.updateTree(this.props.options[0].next);
  };

  render() {
    /*
  	var gif_url = 'https://dl.dropboxusercontent.com/u/53274637/neutral.gif';
  	var emotion = this.state.emotion;

  	switch(emotion) {
  		case 'def':
  			//NEUTRAL
  			gif_url = 'https://dl.dropboxusercontent.com/u/53274637/neutral.gif';
  			break;
  		case 'lov':
  			//LOVE
  			gif_url = 'https://dl.dropboxusercontent.com/u/53274637/love.gif';
  			break;
  		case 'ang':
  			//ANGRY
  			gif_url = 'https://dl.dropboxusercontent.com/u/53274637/angry.gif';
  			break;
  		case 'sad':
  			// SAD
  			gif_url = 'https://dl.dropboxusercontent.com/u/53274637/sad.gif';
  			break;
  	}*/

    var options = [];

    for(var key in this.props.options) {
      var option = this.props.options[key];
      var emotion = option.emotion;
      options.push(
        <ResponseButton 
          option={option} 
          setEmotion={this.setEmotion.bind(this)} 
          updateTree={this.props.updateTree}
          key={key}
          index={key}
          writeMessage={this.writeMessage.bind(this)}
          writeResponse={this.writeResponse.bind(this)}
        />
      )
    }

    var responseDialogueStyle = (this.state.response == '')
    ? {}
    : { 
      border: '5px solid #fff',
      height: '200px',
      padding: '20px',
      margin: 'auto',
      color: '#fff',
      top: '40%',
      alignSelf: 'center',
      width: '300px',
      textAlign: 'left'
    }

    var hideOptionsStyle = (this.state.hideOptions || this.props.options.length == 1)
    ? {display: 'none'}
    : {};
    
    var waitingIcon = (this.state.waitingForResponse || this.state.waitingForMessage)
    ? (
        <div style={{ 
              width: '800px',
              height: '600px',
              marginLeft: 'auto',
              marginRight: 'auto',
              position: 'absolute',
              top: '0px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-end'
        }}>
          <div className={s.blinking} >
            <img style={{width: '50px', height: '50px'}} src='https://dl.dropboxusercontent.com/u/53274637/enterkey.png'/>
            &nbsp; 
            <div style={{fontSize: '12px', marginTop: '-15px'}}>{/*continue ▶*/}</div> 
          </div>
        </div>
      )
    : <div/>;


    return (
    	<div className={s.gameContainer}>
        <div className={s.backgroundVisuals}>
          <div style={{
            height: '30px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            position: 'absolute',
            top: '30px',
            marginLeft: 'auto',
            marginRight: 'auto',
            width: '100%',
            left: '0px'
          }}>
            <div style={{width: '50%', display: 'flex', justifyContent: 'flex-end', flexDirection: 'row'}}>
              <div style={{
                width: ((this.state.score < 0) ? this.state.score * -1 : 0) + 'px', 
                height: '20px',
                backgroundColor: 'red',
                WebkitTransition: 'all .2s ease-in-out'
              }}/>
            </div>
            {/*<div style={{height: '50px', width: '5px', backgroundColor: '#fff'}}/>*/}
            <div style={{width: '50%'}}>
              <div style={{
                width: ((this.state.score > 0) ? this.state.score : 0) + 'px', 
                height: '20px', 
                backgroundColor: 'green',
                WebkitTransition: 'all .2s ease-in-out'
              }}/>
            </div>
          </div>
          <div style={{opacity: this.state.scoreOpacity, marginTop: '50px', color: '#fff'}}>
            {this.state.scoreDelta}
          </div>
    		  {/*<img src={gif_url} />*/}
          <div style={responseDialogueStyle}>
            {this.state.response}
          </div>
        </div>

        <div className={s.dialogue}>
          {this.state.message}
        </div>

        { waitingIcon }

    		<div className={s.choicesPanel} style={hideOptionsStyle}>

          {options}

    		</div>
    	</div>
    );
  };

}

export default Main;
