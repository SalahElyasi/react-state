import React from 'react';


export class ImageChanger extends React.Component {
    constructor(props) {
        super(props);
        this.state = { test: 'test' };

        setInterval(() => {
            this.setState({ test: 'Ich wurde verändert!' })
        }, 3000)
    }


    render() {
        return (
        <h1>{this.state.test}</h1>
        );
    }
}