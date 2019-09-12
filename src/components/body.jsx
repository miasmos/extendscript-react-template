import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Reload } from './reload.jsx';
import { usePromise } from '../hooks/usePromise';
import { getVersionInfo, updateEventPanel } from '../extendscript/Premiere';

const BodyStyle = styled.div`
    background-color: ${({ theme }) => theme.colors.background};
    padding: 0.3125rem;
`;

export const Body = () => {
    const [versionInfo] = usePromise(getVersionInfo());
    const [message, setMessage] = useState('hello from react');
    usePromise(updateEventPanel(message));

    return (
        <BodyStyle>
            <p>hello world</p>
            <br />
            <span>{versionInfo}</span>
            <br />
            <br />
            <input
                type="text"
                value={message}
                onChange={event => setMessage(event.target.value)}
            />
            <br />
            <br />
            <Reload />
        </BodyStyle>
    );
};
