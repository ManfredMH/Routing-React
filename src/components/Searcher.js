import React,{Component} from 'react';
import './css/searcher.css';

export default class Searcher extends Component {

    readData = (e) => {

        const term = e.target.value;

        this.props.searcher(term);

    }

    render() {
        return (
            <form className="searcher">
                <input type="text" placeholder="Searcher" onChange={this.readData} />
            </form>
        );
    }
}