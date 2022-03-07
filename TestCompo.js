
import { Text, View, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import SmallButton from './src/assets/components/reusable/SmallButton';
export default function TestCompo() {
    return (
        <Option
            options={['1', '2', '3', 'other']}
            onChange={(option) => {
                console.log(option);
            }}
        />
    )
}


export class Option extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeOption: this.props.options[0],
        };
    }
    updateActiveOption = (activeOption) => {
        this.setState({
            activeOption,
        });
    };
    render() {
        return (
            <View
                style={{
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                }}
            >
                {this.props.options.map((option, index) => (

                    <SmallButton title={option}
                        color={this.state.activeOption === option ? '#fff' : '#33Bd94'}
                        bgc={this.state.activeOption === option ? '#33Bd94' : '#EFFFFA'}
                        onpress={() => {
                            this.props.onChange(option);
                            this.updateActiveOption(option);
                        }}
                    />

                ))}
            </View>
        );
    }
}
