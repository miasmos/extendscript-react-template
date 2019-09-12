// this file exports the methods in Premiere.jsx

import { evalJsxScript } from './util/evalJsxScript';

export const getVersionInfo = () =>
    evalJsxScript.bind(evalJsxScript, 'getVersionInfo');

export const updateEventPanel = message =>
    evalJsxScript.bind(evalJsxScript, 'updateEventPanel', message);
