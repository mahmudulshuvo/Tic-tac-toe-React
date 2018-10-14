import React, { Component } from "react";
import ChoosePlayer from "./ChoosePlayer";
import PlayerStatus from "./PlayerStatus";
import "./App.css";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            board: Array(9).fill(null),
            player: null,
            winner: null
        };
    }

    checkWinner() {
        const winLines = [
            ["0", "1", "2"],
            ["3", "4", "5"],
            ["6", "7", "8"],
            ["0", "3", "6"],
            ["1", "4", "7"],
            ["2", "5", "8"],
            ["0", "4", "8"],
            ["2", "4", "6"]
        ];

        for (let index = 0; index < winLines.length; index++) {
            const [a, b, c] = winLines[index];

            if (
                this.state.board[a] &&
                this.state.board[a] === this.state.board[b] &&
                this.state.board[a] === this.state.board[c]
            ) {
                this.setState({
                    winner: this.state.player
                });
                setTimeout(() => {
                    alert(`${this.state.winner} won`);
                }, 500);
            }
        }
    }

    handleClick(index) {
        if (this.state.player && !this.state.winner) {
            let newBoard = this.state.board;

            if (this.state.board[index] === null) {
                newBoard[index] = this.state.player;

                this.setState({
                    board: newBoard,
                    player: this.state.player === "X" ? "O" : "X"
                });

                this.checkWinner();
            }
        }
    }

    setPlayer(player) {
        console.log(player);
        this.setState({
            player
        });
    }

    renderBoxes() {
        return this.state.board.map((box, index) => (
            <div
                className="Box"
                key={index}
                onClick={() => this.handleClick(index)}
            >
                {box}
            </div>
        ));
    }

    handleRefresh() {
        this.setState({
            board: Array(9).fill(null),
            player: null,
            winner: null
        });
    }

    render() {
        return (
            <div className="App">
                <h1>Tic-tac-toe React</h1>

                <PlayerStatus
                    player={this.state.player}
                    winner={this.state.winner}
                    setPlayer={e => this.setPlayer(e)}
                />
                {this.state.winner ? (
                    <div style={{ width: "80%" }}>
                        <input
                            type="submit"
                            value="Refresh"
                            onClick={e => this.handleRefresh(e)}
                        />
                    </div>
                ) : null}
                <div className="Box-container">{this.renderBoxes()}</div>
            </div>
        );
    }
}

export default App;
