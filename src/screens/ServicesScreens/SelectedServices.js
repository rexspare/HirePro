import { View, Text, FlatList } from 'react-native'
import React, { useState } from 'react'
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';
import { useNavigation } from '@react-navigation/native'

import Header from '../../assets/components/reusable/Header'
import RenderBottomSheet from '../../assets/components/RenderBottomSheet';
import BigButton from '../../assets/components/reusable/BigButton'
import MainStyles from '../../assets/styles/MainStyles'
import { RenderSelected } from '../../assets/components/FlatLists'
import { useSelector } from 'react-redux';

export default function SelectedServices({ route }) {
    const navigation = useNavigation();
    const { selected } = route.params
    const sheetRef = React.useRef(null);
    const state = useSelector((state) => state.handleCart)


    return (
        < View style={MainStyles.Home_Container} >
            <Header />
            {/* BODY */}
            <View>
                <FlatList
                    style={{ height: '83%' }}
                    data={selected}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({ item }) => <RenderSelected item={item} />}

                    ListFooterComponent={
                        <View style={{ alignSelf: 'center', marginVertical: 50 }}>
                            <BigButton title="Proceed"
                                isDisabled={Object.keys(state).length === 0 ? true : false}
                                onpress={() => sheetRef.current.snapTo(0)} />
                        </View>
                    }
                />

            </View>
            <BottomSheet
                ref={sheetRef}
                snapPoints={[720, 0]}
                initialSnap={1}
                borderRadius={10}
                renderContent={() => <RenderBottomSheet sheetRef={() => sheetRef.current.snapTo(1)} />}
            />

        </View >
    )
}