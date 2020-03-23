import React, { Component } from 'react';
import PhoneInfo from './PhoneInfo';

class PhoneInfoList extends Component {

    //1-1
    static defaultProps = {
        data: []
    }

    render() {
        const {data} = this.props;

        //1-2
        //if (!data) return null; 만일 데이터가 없으면 null을 리턴, 하단 내용을 진행하지 않음, 또는 1-1도 동일한 방법

        const list = data.map(
            info => (<PhoneInfo info={info} key={info.id} />)
        );
        return (
            <div>
                {list}
            </div>
        );
    }
}

export default PhoneInfoList;