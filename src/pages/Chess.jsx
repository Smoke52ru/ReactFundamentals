import React, {useState} from 'react';
import * as ChessModule from 'chess.js';
import MyButton from "../components/UI/button/MyButton";
import Chessboard from "chessboardjsx";

//TODO - добавить движок

const Chess = () => {
    const initialFen = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1";
    const [chess] = useState(
        new ChessModule(initialFen)
    );

    const [fen, setFen] = useState(chess.fen());
    const [hideFen, setHideFen] = useState(true);
    const [hideHistory, setHideHistory] = useState(true);

    const handleMove = (move) => {
        if (chess.move(move)) {
            setTimeout(() => {
                const moves = chess.moves();

                if (moves.length > 0) {
                    const computerMove = moves[Math.floor(Math.random() * moves.length)];
                    chess.move(computerMove);
                    setFen(chess.fen());
                }
            }, 300);

            setFen(chess.fen());
        }
    };

    return (
        <div>
            <div>
                <MyButton onClick={() => setHideFen(!hideFen)}>
                    {hideFen
                        ? 'Показать' : 'Скрыть'} FEN
                </MyButton>
                <MyButton onClick={() => setHideHistory(!hideHistory)}>
                    {hideHistory
                        ? 'Показать' : 'Скрыть'} ходы
                </MyButton>
                <MyButton onClick={() => {
                    chess.reset();
                    setFen(chess.fen());
                }}>
                    Заново
                </MyButton>
                <MyButton onClick={() => {
                    chess.undo();
                    chess.undo();
                    setFen(chess.fen());
                }}>
                    Предыдущий ход
                </MyButton>
            </div>
            <Chessboard
                boardStyle={boardStyle}
                width={document.innerWidth}
                position={fen}
                onDrop={(move) =>
                    handleMove({
                        from: move.sourceSquare,
                        to: move.targetSquare,
                        promotion: "q",
                    })
                }
            />
            <div hidden={hideFen}>
                <h3>Текущая FEN позиция</h3>
                <div>{fen}</div>
            </div>
            <div hidden={hideHistory}>
                <h3>История ходов</h3>
                {chess.pgn({max_width: 5, newline_char: '<br/>'})
                    .split("<br/>")
                    .map((str) => <span>{str}<br/></span>)}
            </div>
        </div>
    );
};

const boardStyle = {
    borderRadius: "5px",
    boxShadow: `0 5px 15px rgba(0, 0, 0, 0.5)`,
    margin: '1rem',
};

export default Chess;