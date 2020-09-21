import React, {Component} from 'react';

class DisplayResult extends Component {
    render() {
        const {result} = this.props;
        return (
            <div className="output">
                <p>{result}</p>
            </div>
    );
    }
}
export default DisplayResult;
