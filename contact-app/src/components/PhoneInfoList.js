import React, { Component } from 'react';
import PhoneInfo from './PhoneInfo';

class PhoneInfoList extends Component {
    static defaultProps = {
        data: []
    } //data의 초기값을 정해준다.

    render() {
        const { data } = this.props; //data를 props로 받는다.

        //if (!data) return null; //만약 data 값이 없으면 중단

        const list = data.map(
            info => (<PhoneInfo info={info} key={info.id} />)
        )
        return (
            <div>
                {list}
            </div>
        );
    }
}

export default PhoneInfoList;