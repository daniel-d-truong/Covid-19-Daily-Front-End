import React from 'react';
import { TextBoxProps } from '../constants/PropConstants';

const TextBox: React.FC<TextBoxProps> = (props) => {

    const changeValue = (value: string) => {
        // textValue = value;
        // console.log(textValue);
        props.setFormattedString(value);
    };

    console.log(props.formattedString)

    return (
        <textarea className="textbox" 
                  name="text"
                  cols={100}
                  rows={10}
                  defaultValue={props.formattedString}
                  onChange={(e) => changeValue(e.target.value)}>
        </textarea>
    )
};

export default TextBox;