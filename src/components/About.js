import React,{Component} from 'react';
import './css/about.css';

export default class About extends Component {

    render() {
        return (
            <div className="container-about">
                <div className="img">
                    <img src="/img/camisa_1.png" alt="img about" />
                </div>
                <div className="content">
                    <h2>About Us</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae repellat fugit, debitis provident aperiam beatae laborum animi, quas quis laudantium neque voluptatum? Nostrum, vel ut! Rem molestias fugit dolores minus quaerat. Consequatur tempore cumque suscipit ipsum quibusdam neque est, expedita sed autem corporis numquam eum praesentium illo architecto consectetur incidunt!</p>
                </div>
            </div>
        );
    }
}