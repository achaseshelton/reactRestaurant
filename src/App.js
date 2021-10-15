import React from 'react';
import './App.css';
import MenuItem from './MenuItem'

function App() {
    return (
        <div className="container">
            <header className="container text-center">
                <div className="row">
                    <h1><strong>Winespring Tavern</strong></h1>
                </div>
                <div className="row">
                    <h3>348 E Main St, Lexington, KY</h3>
                </div>
                <div className="row">
                    <h4>Tuesday-Sunday 5-10:00 PM</h4>
                </div>
            </header>
            <div className="container">
                <div className="row h2 p-1">Appetizers</div>
                <hr></hr>
                <div className="row row-cols-md-3 row-cols-xs-1">
                    <MenuItem
                        url="https://port-3000-aincbootcampapi-ianrios529550.codeanyapp.com/api/menu/type_amount/4/1"
                        value={10}
                        src="./img/app1.png"
                    />
                    <MenuItem
                        url="https://port-3000-aincbootcampapi-ianrios529550.codeanyapp.com/api/menu/type_amount/4/1"
                        value={7}
                        src="./img/app2.png"
                    />
                    <MenuItem
                        url="https://port-3000-aincbootcampapi-ianrios529550.codeanyapp.com/api/menu/type_amount/4/1"
                        value={8}
                        src="./img/app3.png"
                    />
                </div>
            </div>
            <div className="container">
                <div className="row h2 p-1">Entrees</div>
                <hr></hr>
                <div className="row row-cols-md-3 row-cols-xs-1">
                    <MenuItem
                        url="https://port-3000-aincbootcampapi-ianrios529550.codeanyapp.com/api/menu/type_amount/5/1"
                        value={25}
                        src="./img/main1.png"
                    />
                    <MenuItem
                        url="https://port-3000-aincbootcampapi-ianrios529550.codeanyapp.com/api/menu/type_amount/5/1"
                        value={38}
                        src="./img/main2.png"
                    />
                    <MenuItem
                        url="https://port-3000-aincbootcampapi-ianrios529550.codeanyapp.com/api/menu/type_amount/5/1"
                        value={42}
                        src="./img/main3.png"
                    />
                    <MenuItem
                        url="https://port-3000-aincbootcampapi-ianrios529550.codeanyapp.com/api/menu/type_amount/5/1"
                        value={45}
                        src="./img/main4.png"
                    />
                    <MenuItem
                        url="https://port-3000-aincbootcampapi-ianrios529550.codeanyapp.com/api/menu/type_amount/5/1"
                        value={50}
                        src="./img/main5.png"
                    />
                    <MenuItem
                        url="https://port-3000-aincbootcampapi-ianrios529550.codeanyapp.com/api/menu/type_amount/5/1"
                        value={27}
                        src="./img/main6.png"
                    />
                    <MenuItem
                        url="https://port-3000-aincbootcampapi-ianrios529550.codeanyapp.com/api/menu/type_amount/5/1"
                        value={32}
                        src="./img/main7.png"
                    />
                    <MenuItem
                        url="https://port-3000-aincbootcampapi-ianrios529550.codeanyapp.com/api/menu/type_amount/5/1"
                        value={55}
                        src="./img/main8.png"
                    />
                    <MenuItem
                        url="https://port-3000-aincbootcampapi-ianrios529550.codeanyapp.com/api/menu/type_amount/5/1"
                        value={20}
                        src="./img/main9.png"
                    />
                </div>
            </div>
            <div className="container">
                <div className="row h2">Desserts</div>
                <hr></hr>
                <div className="row row-cols-md-3 row-cols-xs-1">
                    <MenuItem
                        url="https://port-3000-aincbootcampapi-ianrios529550.codeanyapp.com/api/menu/type_amount/7/1"
                        value={8}
                        src="./img/dessert1.png"
                    />
                    <MenuItem
                        url="https://port-3000-aincbootcampapi-ianrios529550.codeanyapp.com/api/menu/type_amount/7/1"
                        value={9}
                        src="./img/dessert2.png"
                    />
                    <MenuItem
                        url="https://port-3000-aincbootcampapi-ianrios529550.codeanyapp.com/api/menu/type_amount/7/1"
                        value={6}
                        src="./img/dessert3.png"
                    />
                </div>
            </div>
        </div>
    );
}



export default App;
