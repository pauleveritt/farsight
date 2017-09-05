import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

describe("Basic tests", () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App/>, div);
        expect(1).toBe(1);
    });
});
