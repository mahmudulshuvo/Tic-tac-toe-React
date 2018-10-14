import React, { Component } from "react";
import ChoosePlayer from "./ChoosePlayer";

class PlayerStatus extends Component {
    handleSetPlayer(e) {
        this.props.setPlayer(e);
    }

    render() {
        return this.props.player === null ? (
            <ChoosePlayer player={e => this.handleSetPlayer(e)} />
        ) : !this.props.winner ? (
            <h2>Next player is {this.props.player}</h2>
        ) : null;
    }
}

export default PlayerStatus;
