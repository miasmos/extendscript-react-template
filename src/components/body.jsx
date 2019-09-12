import React from 'react';
import styled from 'styled-components';
import { Reload } from './reload.jsx';
import { getVersionInfo, updateEventPanel } from '../extendscript/Premiere';

const BodyStyle = styled.div`
    background-color: ${({ theme }) => theme.colors.background};
    padding: 0.3125rem;
`;

export class Body extends React.Component {
    state = {
        versionInfo: '',
        message: 'hello from react'
    };

    setStateAsync = state =>
        new Promise(resolve => this.setState(state, resolve));

    getVersionInfo = async () => {
        const [versionInfo] = await getVersionInfo();
        await this.setStateAsync({
            versionInfo
        });
    };

    componentDidMount() {
        this.getVersionInfo();
    }

    render() {
        const { versionInfo, message } = this.state;
        return (
            <BodyStyle>
                <p> hello world </p> <span> {versionInfo} </span> <br />
                <br />
                <input
                    type="text"
                    value={message}
                    onChange={event =>
                        this.setState({
                            message: event.target.value
                        })
                    }
                />
                <br />
                <button onClick={() => updateEventPanel(message)}>
                    Show notification
                </button>
                <br />
                <br />
                <Reload />
            </BodyStyle>
        );
    }
}
