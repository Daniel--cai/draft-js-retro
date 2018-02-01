import React from 'react';
import audio from '../assets/audio.m4a';
import apple from '../assets/apple.jpg'
import fish from '../assets/fish.jpg'
import bread from '../assets/bread.jpg'
import style from './Decorator.css'

const Seefood = {
    'fish': fish,
    'bread': bread,
    'orange': apple,
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



export class Fish extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            toggle: false
        }
        this.onHover = this.onHover.bind(this)
    }

    onHover = toggle => event => this.setState({ toggle })

    render() {
        const text = this.props.decoratedText.substr(8)
        if (Seefood.hasOwnProperty(text)) {

            return (
                <span
                    style={styles.handle}
                    data-offset-key={this.props.offsetKey}
                    onMouseEnter={this.onHover(true)}
                    onMouseLeave={this.onHover(false)}
                >
                    {this.props.children} {this.state.toggle && <img src={Seefood[text]} className={style.image} />}
                </span>
            );
        }
        return <span {...this.props}>{this.props.children}</span>
    }

};


const styles = {
    handle: {
        position: 'relative',
        fontWeight: 'bold'
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
const FISH_REGEX = /seefood:\w+/g

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

export const breadStrategy = (contentBlock, callback, contentState) => {
    findWithRegex(BREAD_REGEX, contentBlock, callback);
}
export const fishStrategy = (contentBlock, callback, contentState) => {
    findWithRegex(FISH_REGEX, contentBlock, callback);
}
export const appleStrategy = (contentBlock, callback, contentState) => {
    findWithRegex(APPLE_REGEX, contentBlock, callback);
}


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
