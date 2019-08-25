import React from 'react'
import "../Home/home.css"

const Home = () => {
    return (
        <div className="container">
            <div className="todo_container">
                <div className="todo_main">
                    <div className="todo_input">
                        <div className="todo_input_container">
                            <div className="todo_input_text">
                                <input type="text" name="todo" />
                            </div>
                            <div className="todo_toggle">
                                <div className="toggle">A</div>
                            </div>
                        </div>
                    </div>
                    <div className="todo_list">
                        <div className="todo_list_container">
                            <ul className="todo_list">
                                <li className="todo_data">
                                    <div className="todo_data_main">Water the plant before evening.</div>
                                    <div className="todo_data_delete">D</div>
                                </li>
                                <li className="todo_data">
                                    <div className="todo_data_main">Water the plant before evening.</div>
                                    <div className="todo_data_delete">D</div>
                                </li>
                                <li className="todo_data">
                                    <div className="todo_data_main">Water the plant before evening.</div>
                                    <div className="todo_data_delete">D</div>
                                </li>
                                <li className="todo_data">
                                    <div className="todo_data_main">Water the plant before evening.</div>
                                    <div className="todo_data_delete">D</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;