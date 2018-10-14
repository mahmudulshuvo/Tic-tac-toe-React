import React, { Component } from "react";
import "./App.css";

class ChoosePlayer extends Component {
    handleForm(e) {
        e.preventDefault();
        this.props.player(e.target.player.value);
    }

    render() {
        return (
            <div className="Select-player">
                <h3>Choosse Your player</h3>
                <form onSubmit={e => this.handleForm(e)}>
                    <input type="radio" name="player" value="X" />
                    <label>PlayerX</label>

                    <input type="radio" name="player" value="O" />
                    <label>Player0</label>
                    <br />
                    <br />
                    <input type="submit" value="Start" />
                </form>
            </div>
        );
    }
}

export default ChoosePlayer;
