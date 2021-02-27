/* 
Untranspiled Code
// Full list of sounds. For each sound, there is 'audio', which has the sound file location, 'name', which is the name of the sound, and 'img', which is the image associated with the sound.
const soundList = [
  {
    "audio": "annie.mp3",
    "name": "Annie Edison",
    "img": "annie1.jpg",
    "img2": "annie2.jpg"
  },
  {
    "audio": "jeff.mp3",
    "name": "Jeff Winger",
    "img": "jeff1.jpg",
    "img2": "jeff2.jpg"
  },
  {
    "audio": "britta.mp3",
    "name": "Britta Perry",
    "img": "britta1.jpg",
    "img2": "britta2.jpg"
  },
  {
    "audio": "troy.mp3",
    "name": "Troy Barnes",
    "img": "troy1.jpg",
    "img2": "troy2.jpg"
  },
  {
    "audio": "magnitude.mp3",
    "name": "Magnitude",
    "img": "magnitude1.jpg",
    "img2": "magnitude2.jpg"
  },
  {
    "audio": "abed.mp3",
    "name": "Abed Nadir",
    "img": "abed1.jpg",
    "img2": "abed2.jpg"
  },
  {
    "audio": "dean.mp3",
    "name": "Dean Pelton",
    "img": "dean1.jpg",
    "img2": "dean2.jpg"
  },
  {
    "audio": "shirley.mp3",
    "name": "Shirley Bennet",
    "img": "shirley1.jpg",
    "img2": "shirley2.jpg"
  },
  {
    "audio": "chang.mp3",
    "name": "Ben Chang",
    "img": "chang1.jpg",
    "img2": "chang2.jpg"
  }
]; 

//define component called 'soundboardElement', which is forms each clickable square, and also uses innerHTML to update the image and name in the appropriate elements on the right hand side
class SoundboardElement extends React.Component{
  constructor(props){
    super(props)
//bind the handleClick method
    this.handleClick = this.handleClick.bind(this);
  }
//handleClick method takes props as 'audioDetail.
  handleClick(audioDetail){
      new Audio(soundList[audioDetail.name].audio).play();
    document.getElementById("soundboardImage").innerHTML = "<img src=\"" + soundList[audioDetail.name].img2 + "\"/>"; 
    document.getElementById("soundboardName").innerHTML = "<h4>" + soundList[audioDetail.name].name + "</h4>"; 
  
    
  }
  render(){
    const props = this.props;
    const Background = "chang1.jpg";
    return(
//When clicked, calls the handleClick method. 'this.handleClick.bind(this, props)' is needed to pass the props to the handleClick method. 'this.handleClick(props)' would be incorrect and cause an error, as it would be immediately called. 
      <div className="soundboardElement" onClick={this.handleClick.bind(this, props)} style={{backgroundImage: "url(" + soundList[this.props.name].img + ")"}}>
        <p className="soundboardElementText">{soundList[this.props.name].name}</p>
      </div>
    );
  }
}

//define component called 'soundboard', which calls child components for each clickable element. Element is similar, with different audio, name, and image in each case.
class Soundboard extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div>
        <SoundboardElement name={0}/>
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

//render the soundboard element to the DOM
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
  "audio": "annie.mp3",
  "name": "Annie Edison",
  "img": "annie1.jpg",
  "img2": "annie2.jpg"
}, {
  "audio": "jeff.mp3",
  "name": "Jeff Winger",
  "img": "jeff1.jpg",
  "img2": "jeff2.jpg"
}, {
  "audio": "britta.mp3",
  "name": "Britta Perry",
  "img": "britta1.jpg",
  "img2": "britta2.jpg"
}, {
  "audio": "troy.mp3",
  "name": "Troy Barnes",
  "img": "troy1.jpg",
  "img2": "troy2.jpg"
}, {
  "audio": "magnitude.mp3",
  "name": "Magnitude",
  "img": "magnitude1.jpg",
  "img2": "magnitude2.jpg"
}, {
  "audio": "abed.mp3",
  "name": "Abed Nadir",
  "img": "abed1.jpg",
  "img2": "abed2.jpg"
}, {
  "audio": "dean.mp3",
  "name": "Dean Pelton",
  "img": "dean1.jpg",
  "img2": "dean2.jpg"
}, {
  "audio": "shirley.mp3",
  "name": "Shirley Bennet",
  "img": "shirley1.jpg",
  "img2": "shirley2.jpg"
}, {
  "audio": "chang.mp3",
  "name": "Ben Chang",
  "img": "chang1.jpg",
  "img2": "chang2.jpg"
}]; //define component called 'soundboardElement', which is forms each clickable square, and also uses innerHTML to update the image and name in the appropriate elements on the right hand side

var SoundboardElement =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SoundboardElement, _React$Component);

  function SoundboardElement(props) {
    var _this;

    _classCallCheck(this, SoundboardElement);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SoundboardElement).call(this, props)); //bind the handleClick method

    _this.handleClick = _this.handleClick.bind(_assertThisInitialized(_this));
    return _this;
  } //handleClick method takes props as 'audioDetail.


  _createClass(SoundboardElement, [{
    key: "handleClick",
    value: function handleClick(audioDetail) {
      new Audio(soundList[audioDetail.name].audio).play();
      document.getElementById("soundboardImage").innerHTML = "<img src=\"" + soundList[audioDetail.name].img2 + "\"/>";
      document.getElementById("soundboardName").innerHTML = "<h4>" + soundList[audioDetail.name].name + "</h4>";
    }
  }, {
    key: "render",
    value: function render() {
      var props = this.props;
      var Background = "chang1.jpg";
      return (//When clicked, calls the handleClick method. 'this.handleClick.bind(this, props)' is needed to pass the props to the handleClick method. 'this.handleClick(props)' would be incorrect and cause an error, as it would be immediately called. 
        React.createElement("div", {
          className: "soundboardElement",
          onClick: this.handleClick.bind(this, props),
          style: {
            backgroundImage: "url(" + soundList[this.props.name].img + ")"
          }
        }, React.createElement("p", {
          className: "soundboardElementText"
        }, soundList[this.props.name].name))
      );
    }
  }]);

  return SoundboardElement;
}(React.Component); //define component called 'soundboard', which calls child components for each clickable element. Element is similar, with different audio, name, and image in each case.


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
      return React.createElement("div", null, React.createElement(SoundboardElement, {
        name: 0
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
}(React.Component); //render the soundboard element to the DOM


ReactDOM.render(React.createElement(Soundboard, null), document.getElementById('soundboardLeft'));
