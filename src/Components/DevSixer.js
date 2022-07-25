import {Routes,Route } from 'react-router-dom';
import Home from './Home/Home';

const DevSixer = ({ show, setShow, theme, setTheme }) => {
    return (
        <div>
            <Routes>
                <Route index element={<Home show={show} setShow={setShow} them={theme} setTheme={setTheme} />} />
            </Routes>
        </div>
    );
};

export default DevSixer;