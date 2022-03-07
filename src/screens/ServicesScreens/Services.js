import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import MainStyles from '../../assets/styles/MainStyles';
import Header from '../../assets/components/reusable/Header'
import Unchecked from '../../assets/svg/Service_svg/Unchecked.svg'
import Checked from '../../assets/svg/Service_svg/Checked.svg'
import BigButton from '../../assets/components/reusable/BigButton'
import { Data } from '../Data'

export default class App extends Component {
    constructor() {
        super()
        this.state = {
            renderData: Data,
            selectedServices: [],
            checker: []
        }
    }


    // function will call when Button clicked
    onPressHandler(id) {
        let renderData = [...this.state.renderData];
        let selectedServices = [...this.state.selectedServices];

        for (let data of renderData) {
            if (data.id == id) {
                data.selected = (data.selected == null) ? true : !data.selected;
                if (data.selected) {
                    selectedServices.push(data);
                } else {
                    selectedServices = this.arrayRemove(this.state.selectedServices, data.name)
                }
                break;
            }
        }
        this.setState({ renderData });
        this.setState({ selectedServices: selectedServices });
    }

    // function which remove value from array and return  
    arrayRemove(arr, value) {
        return arr.filter(ser => ser.name != value)
    }

    renderComponent = ({ item }) => {
        return (
            <TouchableOpacity style={[MainStyles.itemContainer,
            { backgroundColor: item.selected ? "#33BD94" : '#EFFFFA' }]}
                onPress={() => this.onPressHandler(item.id)}
                activeOpacity={0.7} >

                <View style={MainStyles.item_svg}>
                    {item.selected == true ? item.svg_S : item.svg}
                </View>

                <Text style={[MainStyles.itemText, { color: item.selected ? "#fff" : '#33BD94' }]}>
                    {item.name}</Text>

                <View style={MainStyles.item_svg_S}>
                    {item.selected == true ? <Checked /> : <Unchecked />}
                </View>

            </TouchableOpacity >
        );
    };

    render() {
        return (
            <View style={MainStyles.Home_Container}>
                <Header />
                <Text style={MainStyles.services_Header}>Our core services include:</Text>
                <View>
                    <FlatList
                        style={{ marginTop: 15 }}
                        data={this.state.renderData}
                        keyExtractor={item => item.id.toString()}
                        renderItem={({ item }) => <this.renderComponent item={item} />}
                    />
                </View>
                <View style={{ alignSelf: 'center', top: 30 }}>
                    <BigButton title="Proceed"
                        isDisabled={this.state.selectedServices.length === 0 ? true : false}
                        onpress={() => this.props.navigation.navigate("SelectedServives",
                            { selected: this.state.selectedServices })} />
                </View>

            </View>

        )
    }
}
