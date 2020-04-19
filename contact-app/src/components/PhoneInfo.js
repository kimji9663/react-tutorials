import React, { Component, Fragment } from 'react';

class PhoneInfo extends Component {

    state = {
        editing: false,
        name: '',
        phone: ''
    }

    handleRemove = () => {
        const { info, onRemove} = this.props;
        onRemove(info.id);
    }

    //현재 값을 반전시킨다. true <-> false
    handleToggleEdit = () => {
        const { info, onUpdate } = this.props;
        if (this.state.editing) {
            onUpdate(info.id, {
                name: this.state.name,
                phone: this.state.phone
            });
        } else {
            this.setState({
                name: info.name,
                phone: info.phone
            });
        }
        this.setState({
            editing: !this.state.editing,
        })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        const { name, phone } = this.props.info; //info는 name과 phone
        const { editing } = this.state;
        
        const style = {
            border: '1px solid black',
            padding: '8px',
            margin: '8px',
        };

        return (
            <div style={style}>
                {
                    editing ? ( //true 이면
                        <Fragment>
                            <div><input name="name" onChange={this.handleChange} value={this.state.name} /></div>
                            <div><input name="phone" onChange={this.handleChange} value={this.state.phone} /></div>
                        </Fragment>
                    ) : ( //false 이면
                        <Fragment>
                            <div><b>{name}</b></div>
                            <div>{phone}</div>
                        </Fragment>
                    )
                }
                <button onClick={this.handleRemove}>삭제</button>
                <button onClick={this.handleToggleEdit}>
                    { editing ? '적용' : '수정' }
                </button>
            </div>
        );
    }
}

export default PhoneInfo;