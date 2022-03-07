import { Text, View } from 'react-native'
import React, { Component } from 'react'
import SmallButton from './SmallButton'

export default class Option extends Component {
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