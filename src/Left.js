import React from 'react';

class Left extends React.Component {
    state = {
        nicaragua: [{ name: 'Devidas', checked: false }, { name: 'Xenie', checked: false }, { name: 'Ezequiel', checked: false }],
        marshell: [{ name: 'Aaron', checked: false }, { name: 'Jelena', checked: false }, { name: 'Denisova', checked: false }],
        portugal: [{ name: 'Aasiya Jayaent', checked: false }, { name: 'Rey Miboure', checked: false }, { name: 'Cyla Brister', checked: false }],

    };
    ChangeValue = (e) => {
        console.log("Console", e);
    }

    render() {
        const { portugal, marshell, nicaragua } = this.state;
        return (
            <div>
                <div style={{ float: "left", width: "50%" }}>
                    <h3>Portugal</h3>
                    {portugal.map(data => {
                        return (
                            <p>
                                <input type="checkbox" checked={data.checked} onChange={(e) => this.ChangeValue(e, portugal)} />
                                <label>{data.name}</label>
                            </p>
                        );
                    })}
                    <h3>Nicargua</h3>
                    {nicaragua.map(data => {
                        return (
                            <p>
                                <input type="checkbox" checked={data.checked} onChange={(e) => this.ChangeValue(e, nicaragua)} />
                                <label>{data.name}</label>
                            </p>
                        );
                    })}
                    <h3>Marshell</h3>
                    {marshell.map(data => {
                        return (
                            <p>
                                <input type="checkbox" checked={data.checked} onChange={(e) => this.ChangeValue(e, marshell)} />
                                <label>{data.name}</label>
                            </p>
                        );
                    })}/
                </div>
                <div style={{ float: "left", width: "50%" }}>
                    <h3>Right Side</h3>
                    <input type="checkbox" label="Label" onClick={(e) => this.ChangeValue(e)} />
                    <label>Hello</label>
                </div>
            </div>
        );
    }
}
export default Left;