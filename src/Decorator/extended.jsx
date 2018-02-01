import React from 'react';
import style from './Checkbox.css';
import audio from '../assets/audio.m4a';


console.log(audio)

export default class HashTag extends React.Component {
    render() {
        return (
            // <span {...this.props} className="testlkjdf">
            //     <input type="checkbox" className={style.box} />
            //     {this.props.children}
            // </span>
            <span {...props} style={styles.handle}>{props.children}</span>
        )
    }
}


export const SlackBot = (props) => {
    return (
        <span
            style={styles.handle}
            data-offset-key={props.offsetKey}
        >
            {props.children} (Xamarin > react)
        </span>
    );
};

const styles = {
    handle: {
        color: 'rgba(98, 177, 254, 1.0)',
    },
    audio: {
        fontWeight: 'bold'
    }
};

// const HANDLE_REGEX = /\[\x]\w+/g;
const HANDLE_REGEX = /react/g;
const AUDIO_REGEX = /despacito/g
const APPLE_REGEX = /apple/g
const BREAD_REGEX = /bread/g
const AWS_REGEX = /aws/g

const Sound = new Audio(audio);

export const audioStrategy = (contentBlock, callback, contentState) => {
    findWithRegex(AUDIO_REGEX, contentBlock, callback);
}

export const AudioComponent = (props) => {
    Sound.play()
    return (
        <span
            style={styles.audio}
            data-offset-key={props.offsetKey}

        >
            {props.children}
        </span>
    );
};


export const slackBotStrategy = (contentBlock, callback, contentState) => {

    findWithRegex(HANDLE_REGEX, contentBlock, callback);
}

export function findWithRegex(regex, contentBlock, callback) {
    const text = contentBlock.getText();
    let matchArr, start;

    while ((matchArr = regex.exec(text)) !== null) {
        //console.log(text, matchArr)
        start = matchArr.index;
        callback(start, start + matchArr[0].length);
    }
}
