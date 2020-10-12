import React from 'react';

class Left extends React.Component {
    state = {
        nicaragua: [{ name: 'Devidas', checked: false }, { name: 'Xenie', checked: false }, { name: 'Ezequiel', checked: false }],
        marshell: [{ name: 'Aaron', checked: false }, { name: 'Jelena', checked: false }, { name: 'Denisova', checked: false }],
        portugal: [{ name: 'Aasiya Jayaent', checked: false }, { name: 'Rey Miboure', checked: false }, { name: 'Cyla Brister', checked: false }],

    };
    ChangeValue = (index, name) => {
        if (name === 'portugal') {
            const { portugal } = this.state;
            portugal[index].checked = !portugal[index].checked;
            this.setState({ portugal });

        } else if (name === 'nicaragua') {
            const { nicaragua } = this.state;
            nicaragua[index].checked = !nicaragua[index].checked;
            this.setState({ nicaragua });
        } else {
            const { marshell } = this.state;
            marshell[index].checked = !marshell[index].checked;
            this.setState({ marshell });
        }
    }

    render() {
        const { portugal, marshell, nicaragua } = this.state;
        return (
            <div>
                <div style={{ float: "left", width: "50%" }}>
                    <h3>Portugal</h3>
                    {portugal.map((data, index) => {
                        return (
                            <p>
                                <input type="checkbox" checked={data.checked} onChange={(e) => this.ChangeValue(index, 'portugal')} />
                                <label>{data.name}</label>
                            </p>
                        );
                    })}
                    <h3>Nicargua</h3>
                    {nicaragua.map((data, index) => {
                        return (
                            <p>
                                <input type="checkbox" checked={data.checked} onChange={(e) => this.ChangeValue(index, 'nicaragua')} />
                                <label>{data.name}</label>
                            </p>
                        );
                    })}
                    <h3>Marshell</h3>
                    {marshell.map((data, index) => {
                        return (
                            <p>
                                <input type="checkbox" checked={data.checked} onChange={(e) => this.ChangeValue(index, 'marshell')} />
                                <label>{data.name}</label>
                            </p>
                        );
                    })}
                </div>
                <div style={{ float: "left", width: "50%" }}>
                    <h3>Portugal</h3>
                    {portugal.map((data, index) => {
                        if (data.checked) {
                            return (
                                <p>
                                    <label style={{ marginRight: "20px" }}>{data.name}</label>
                                    <button type="button" onClick={() => this.ChangeValue(index, 'portugal')}>Clear</button>
                                </p>
                            );
                        }

                    })}
                    <h3>Nicargua</h3>
                    {nicaragua.map((data, index) => {
                        if (data.checked) {
                            return (
                                <p>
                                    <label>{data.name}</label>
                                    <button type="button" onClick={() => this.ChangeValue(index, 'nicaragua')}>Clear</button>
                                </p>
                            );
                        }

                    })}
                    <h3>Marshell</h3>
                    {marshell.map((data, index) => {
                        if (data.checked) {
                            return (
                                <p>
                                    <label>{data.name}</label>
                                    <button type="button" onClick={() => this.ChangeValue(index, 'marshell')}>Clear</button>
                                </p>
                            );
                        }
                    })}
                </div>
            </div>
        );
    }
}
export default Left;