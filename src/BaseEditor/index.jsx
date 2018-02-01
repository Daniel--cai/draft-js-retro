import React from 'react';
import ReactDOM from 'react-dom';
import { Editor, EditorState, CompositeDecorator } from 'draft-js';

export default class BaseEditor extends React.Component {
    constructor(props) {

        super(props);
        this.state = { editorState: EditorState.createEmpty() };
    }

    onChange = editorState => this.setState({ editorState });

    createWithPlainText = () => {
        contentState = Draft.ContentState, createFromText("hello world")
        newEditorState = Draft.EditorState.createWithContent(contentState)
        this.setState({ editorState })
    }

    createWithJason = (json) => {
        const contentState  = Draft.convertFromRaw(json)
        newEditorState = Draft.EditorState.createWithContent(contentState)
        this.setState({ editorState })
    }

    render() {
        return (
            <Editor
                editorState={this.state.editorState}
                onChange={this.onChange}
                blockRendererFn={blockRenderer}
            />
        );
    }
}

const Sticker = (props) => {
    const key = props.block.getEntityAt(0);
    const { src } = Entitiy.get().getData();
    return <img src={src} />
}

const blockRenderer = (block) => {
    if (block.getType() === 'atomic') {
        const entity = Entity.get(block.getEntityAt(0));
        const type = entity.getType();
        if (type === 'sticker') {
            return {
                component: Sticker,
                editable: false
            }
        }
    }
}