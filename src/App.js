
import React from 'react';
import Badge from "react-bootstrap/Badge";
import { marked } from 'marked'
//let marked = require("marked");

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: ""
    }
  }

  UpdateMarkdown(markdown) {
    this.setState({ markdown })
  }

  
  render() {

    var StyleIn = {
      width: "85vh",
      height: "50vh",
      padding: "10px",
      marginLeft: "auto",
      marginRight: "auto",
      border :"dashed green 2px",
      backgroundImage: "linear-gradient(to bottom right,lightblue,silver)"

    };
    var StyleOut = {
      //width: "400px",
      height: "50vh",
      padding: "10px",
      marginLeft: "auto",
      marginRight: "auto",
      backgroundColor: "rgba(0,25,0,0.2",
      color:"white",
      border :"dashed green 2px",
      backgroundImage: "linear-gradient(to bottom right,black,green)"

    };

    var BgStyle = {
      backgroundImage: "linear-gradient(to bottom right,#757575,#00000)",
      width:"100%",
      height:"100%"
    };

    var SubHeading = {
      backgroundImage: "linear-gradient(to bottom right,lightgreen,silver)",
      padding : "10px"
    };
    
document.body.style="background:#212121";
    return (
      <div className='App' style={BgStyle}>
        <div className='container'>
          <div className='row mt-4'>
            <div className='col text-center'>

              <h1><Badge className='text-align-center' variant='Primary'>
                Markdown Previewer
              </Badge></h1>

              <div className='row mt-4'>
                <div className='col md-6'>
                  <div className='col text-center'>
                    <h4>
                      <div className='text-align-center' style={SubHeading}>Input</div>
                    </h4></div>
                  <textarea id='editor' style={StyleIn} value={this.state.markdown} onChange={(e) => { this.UpdateMarkdown(e.target.value) }}></textarea>
                </div>
                <div className='col md-6'>
                  <div className='col text-center'>
                    <h4>
                      <div className='text-align-center' style={SubHeading}>Preview</div>
                    </h4></div>
                  <div id='preview' style={StyleOut} dangerouslySetInnerHTML ={{__html:marked(this.state.markdown)}}></div>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    );
  }
}
