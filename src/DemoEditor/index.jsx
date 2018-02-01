import React from 'react';
import ReactDOM from 'react-dom';
import { Editor, EditorState, CompositeDecorator, convertToRaw } from 'draft-js';
import styles from './DemoEditor.css'
import { LogButton } from '../LogButton'
import { SlackBot, slackBotStrategy, AudioComponent, audioStrategy, Bread, Fish, Apple, breadStrategy, fishStrategy, appleStrategy } from '../Decorator/extended'
import { HashTag, regexStrategy } from '../Decorator'


export default class DemoEditor extends React.Component {
  constructor(props) {

    super(props);
    const compositeDecorator = new CompositeDecorator([
      {
        strategy: slackBotStrategy,
        component: SlackBot,
      },
      {
        strategy: audioStrategy,
        component: AudioComponent,
      },
      {
        strategy: regexStrategy,
        component: HashTag,
      },
      {
        strategy: appleStrategy,
        component: Apple,
      },
      {
        strategy: fishStrategy,
        component: Fish,
      },
      {
        strategy: breadStrategy,
        component: Bread,
      }

    ]);
    this.state = { editorState: EditorState.createEmpty(compositeDecorator) };
    this.onChange = (editorState) => this.setState({ editorState });
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event) {
    console.log(convertToRaw(this.state.editorState.getCurrentContent()))
  }

  render() {
    return (
      <div>
        {/* <div contentEditable={true} style={{'fontSize': '30px'}}>Content Editable</div> */}
        <LogButton onClick={this.handleClick} />
        <div className={styles.body} >
          <Editor
            editorState={this.state.editorState}
            onChange={this.onChange}
          />
        </div>
      </div>

    );
  }
}

