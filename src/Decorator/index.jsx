import React from 'react';
export class HashTag extends React.Component {
    render() {
        return (
            <span  style={style.handle}>{this.props.children}</span>
        )
    }
}

const style = {
    handle: {
        color: 'rgba(98, 177, 254, 1.0)',
    },
};

const HASHTAG_REGEX = /#\w+/g

export const regexStrategy = (contentBlock, callback, contentState) => {

    findWithRegex(HASHTAG_REGEX, contentBlock, callback);
}

function findWithRegex(regex, contentBlock, callback) {
    const text = contentBlock.getText();
    let matchArr, start;

    while ((matchArr = regex.exec(text)) !== null) {
        start = matchArr.index;
        callback(start, start + matchArr[0].length);
    }
}
