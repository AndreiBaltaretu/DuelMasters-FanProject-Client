interface Props {
    players: string[];
}

function PlayerList({players}: Props) {

    return (
        <div>
            <h2>Players in Room</h2>
            <ul className="list-group">
                {
                    players.map((playerId) => (
                        <li className="list-group-item" key={playerId}>
                            {playerId}
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default PlayerList;
