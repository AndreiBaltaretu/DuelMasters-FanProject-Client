import {ReactNode} from "react";


interface Props {
    children: ReactNode;
}

function MainWindow({children}: Props) {
    return (
        <div className="container-fluid d-flex p-0" style={{height: "100vh"}}>
            {children}
        </div>
    );
}

export default MainWindow;