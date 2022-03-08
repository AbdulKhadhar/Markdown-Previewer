
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
      width: "400px",
      height: "50vh",
      padding: "10px",
      marginLeft: "auto",
      marginRight: "auto"
    };
    var StyleOut = {
      width: "400px",
      height: "50vh",
      padding: "10px",
      marginLeft: "auto",
      marginRight: "auto",
      backgroundColor: "rgba(0,25,0,0.2"
    };
    return (
      <div className='App'>
        <div className='container'>
          <div className='row mt-4'>
            <div className='col text-center'>

              <h1><Badge className='text-align-center' variant='light'>
                Markdown Previewer
              </Badge></h1>

              <div className='row mt-4'>
                <div className='col md-6'>
                  <div className='col text-center'>
                    <h1>
                      <Badge className='text-align-center' varient='light'>Input</Badge>
                    </h1></div>
                  <textarea id='editor' style={StyleIn} value={this.state.markdown} onChange={(e) => { this.UpdateMarkdown(e.target.value) }}></textarea>
                </div>
                <div className='col md-6'>
                  <div className='col text-center'>
                    <h1>
                      <Badge className='text-align-center' varient='light'>Preview</Badge>
                    </h1></div>
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
