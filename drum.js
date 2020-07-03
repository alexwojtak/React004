/* 
Untranspiled Code
// Full list of sounds. For each sound, there is 'audio', which has the sound file location, 'name', which is the name of the sound, and 'img', which is the image associated with the sound.
const soundList = [
  {
    "audio": "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    "name": "Heater-1",
    "img": "https://i.imgur.com/hdASdS7.jpg"
  },
  {
    "audio": "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    "name": "Heater-2"
  },
  {
    "audio": "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
    "name": "Heater-3"
  },
  {
    "audio": "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
    "name": "Heater-4"
  },
  {
    "audio": "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3",
    "name": "Clap"
  },
  {
    "audio": "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3",
    "name": "Open-HH"
  },
  {
    "audio": "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3",
    "name": "Kick-n'-Hat"
  },
  {
    "audio": "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3",
    "name": "Kick"
  },
  {
    "audio": "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3",
    "name": "Closed-HH"
  },
  {
    "audio": "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3",
    "name": "Chord-1"
  },
  {
    "audio": "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3",
    "name": "Chord-2"
  },
  {
    "audio": "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3",
    "name": "Chord-3"
  },
  {
    "audio": "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3",
    "name": "Shaker"
  },
  {
    "audio": "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3",
    "name": "Open-HH"
  },
  {
    "audio": "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3",
    "name": "Closed-HH"
  },
  {
    "audio": "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3",
    "name": "Punchy-Kick"
  },
  {
    "audio": "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3",
    "name": "Side-Stick"
  },
  {
    "audio": "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3",
    "name": "Snare"
  }
]; 

class SoundboardElement extends React.Component{
  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(props){
    console.log(props.name);
      new Audio(soundList[0].audio).play();
    document.getElementById("soundboardImage").innerHTML = "Paragraph changed!"; 
    document.getElementById("soundboardName").innerHTML = soundList[0].name; 
  }
  render(){
    const props = this.props;
    return(
      <div className="soundboardElement" onClick={this.handleClick}>
        <p>{(this.props.name)}</p>
      </div>
    );
  }
}

class Soundboard extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    const test = "test";
 
    return(
      <div>

        <SoundboardElement audio={"https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"} name={"Heater-1"}/>
        
        <SoundboardElement name={1}/>
        <SoundboardElement name={2}/>
        <SoundboardElement name={3}/>
        <SoundboardElement name={4}/>
        <SoundboardElement name={5}/>
        <SoundboardElement name={6}/>
        <SoundboardElement name={7}/>
        <SoundboardElement name={8}/>
      </div>
    );
  }
}

ReactDOM.render(<Soundboard />, document.getElementById('soundboardLeft')); */
"use strict";

function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return right[Symbol.hasInstance](left); } else { return left instanceof right; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

// Full list of sounds. For each sound, there is 'audio', which has the sound file location, 'name', which is the name of the sound, and 'img', which is the image associated with the sound.
var soundList = [{
  "audio": "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
  "name": "Heater-1",
  "img": "https://i.imgur.com/hdASdS7.jpg"
}, {
  "audio": "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
  "name": "Heater-2"
}, {
  "audio": "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
  "name": "Heater-3"
}, {
  "audio": "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
  "name": "Heater-4"
}, {
  "audio": "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3",
  "name": "Clap"
}, {
  "audio": "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3",
  "name": "Open-HH"
}, {
  "audio": "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3",
  "name": "Kick-n'-Hat"
}, {
  "audio": "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3",
  "name": "Kick"
}, {
  "audio": "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3",
  "name": "Closed-HH"
}, {
  "audio": "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3",
  "name": "Chord-1"
}, {
  "audio": "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3",
  "name": "Chord-2"
}, {
  "audio": "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3",
  "name": "Chord-3"
}, {
  "audio": "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3",
  "name": "Shaker"
}, {
  "audio": "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3",
  "name": "Open-HH"
}, {
  "audio": "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3",
  "name": "Closed-HH"
}, {
  "audio": "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3",
  "name": "Punchy-Kick"
}, {
  "audio": "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3",
  "name": "Side-Stick"
}, {
  "audio": "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3",
  "name": "Snare"
}];

var SoundboardElement =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SoundboardElement, _React$Component);

  function SoundboardElement(props) {
    var _this;

    _classCallCheck(this, SoundboardElement);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SoundboardElement).call(this, props));
    _this.handleClick = _this.handleClick.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(SoundboardElement, [{
    key: "handleClick",
    value: function handleClick(props) {
      console.log(props.name);
      new Audio(soundList[0].audio).play();
      document.getElementById("soundboardImage").innerHTML = "Paragraph changed!";
      document.getElementById("soundboardName").innerHTML = soundList[0].name;
    }
  }, {
    key: "render",
    value: function render() {
      var props = this.props;
      return React.createElement("div", {
        className: "soundboardElement",
        onClick: this.handleClick
      }, React.createElement("p", null, this.props.name));
    }
  }]);

  return SoundboardElement;
}(React.Component);

var Soundboard =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(Soundboard, _React$Component2);

  function Soundboard(props) {
    _classCallCheck(this, Soundboard);

    return _possibleConstructorReturn(this, _getPrototypeOf(Soundboard).call(this, props));
  }

  _createClass(Soundboard, [{
    key: "render",
    value: function render() {
      var test = "test";
      return React.createElement("div", null, React.createElement(SoundboardElement, {
        audio: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
        name: "Heater-1"
      }), React.createElement(SoundboardElement, {
        name: 1
      }), React.createElement(SoundboardElement, {
        name: 2
      }), React.createElement(SoundboardElement, {
        name: 3
      }), React.createElement(SoundboardElement, {
        name: 4
      }), React.createElement(SoundboardElement, {
        name: 5
      }), React.createElement(SoundboardElement, {
        name: 6
      }), React.createElement(SoundboardElement, {
        name: 7
      }), React.createElement(SoundboardElement, {
        name: 8
      }));
    }
  }]);

  return Soundboard;
}(React.Component);

ReactDOM.render(React.createElement(Soundboard, null), document.getElementById('soundboardLeft'));