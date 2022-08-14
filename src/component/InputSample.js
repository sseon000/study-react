import React, { useState } from 'react'

function InputSample() {
    const [inputs, setInputs] = useState({
        name: '',
        nickname: '',
    })

    const {name,nickname} = inputs;

    const onChange = e => {
        const {name,value} = e.target;

        /* 기존객체를 복사해서 불변성을 지켜야함! */

        setInputs({
            ...inputs,
            [name]: value,
        });
    }

    const onReset = () => {
        setInputs({
            name: '',
            nickname: '',
        })

    }

    return (
    <div>
      <input 
        name='name' 
        placeholder='이름' 
        onChange={onChange} 
        value={name}
      />
      <input 
        name='nickname' 
        placeholder='닉네임' 
        onChange={onChange} 
        value={nickname}
      />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값: </b>
        {name} ({nickname})
      </div>
    </div>
  )
}

export default InputSample