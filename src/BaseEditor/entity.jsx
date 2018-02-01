const { editorState, urlValue } = this.state;
const contentState = editorState.getCurrentContent();
const contentStateWithEntity = contentState.createEntity(
    'LINK', // what type of entity
    'MUTABLE', //mutable | immutable | segmented
    { url: 'infotrack.co.nz' } // data
);
const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
const newEditorState = EditorState.set(editorState, { currentContent: contentStateWithEntity });
this.setState({
    editorState: RichUtils.toggleLink(
        newEditorState,
        newEditorState.getSelection(),
        entityKey
    ),
    showURLInput: false,
    urlValue: '',
}