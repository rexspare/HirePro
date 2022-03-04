import React from 'react';
import {
    SafeAreaView,
    Image,
    StyleSheet,
    FlatList,
    View,
    Text,
    StatusBar,
    TouchableOpacity,
    Dimensions,
} from 'react-native';
import OnBoarding_1 from '../../assets/svg/Onborading/OnBoarding_1.svg'
import ItemView from './ItemView';
import LastItem from './LastItem';
const { width, height } = Dimensions.get('screen');

const COLORS = { primary: '#383838', white: '#fff' };

const slides = [
    {
        id: '1',
        title: 'Best Digital SolutioHire IT Professionals at very affordable prices.',
        subtitle: 'Make the most of HirePro’s 150+ Seasoned IT Professionals to Boost Your Online Presence. HirePro has experts who usher ease of mind for you..',
    },
    {
        id: '2',
        title: 'Quick, Easy, and Seamless!',
        subtitle: 'We showcase to you the best talent pool. You choose the best resources according to your needs & budget, that’s all about it. That’s all it takes to hire certified professionalswith HirePro.',
    },
    {
        id: '3',
        title: 'Why to choose HirePro ',
        subtitle: 'Years of industry exposure have helped HirePro set up a diverse service pool, covering all areas essential for any business to thrive in the virtual world. Our resource pool comprises the best professionals with solid track record. We select them through a lengthy & strict vetting process, So you get the best services for the best rates.',
    },
    {
        id: '4',
        title: 'Increase Your Value',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
];


const OnBoarding = ({ navigation }) => {
    const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);
    const ref = React.useRef();
    const updateCurrentSlideIndex = e => {
        const contentOffsetX = e.nativeEvent.contentOffset.x;
        const currentIndex = Math.round(contentOffsetX / width);
        setCurrentSlideIndex(currentIndex);
    };


    const Slide = ({ item }) => {
        return (

            <View>

                {item.id != 4 ? (
                    <ItemView slider={item} onSkip={skip} />
                ) :
                    (
                        <LastItem slider={item} goHome={() => navigation.replace('AppStack')} />

                    )}

            </View>
        );
    };

    const skip = () => {
        const lastSlideIndex = slides.length - 1;
        const offset = lastSlideIndex * width;
        ref?.current.scrollToOffset({ offset });
        setCurrentSlideIndex(lastSlideIndex);
    };

    const Footer = () => {
        return (
            <View
                style={{
                    height: height * 0.1,
                    justifyContent: 'space-between',
                    paddingHorizontal: 20,
                }}>
                {/* Render buttons */}
                <View style={{ marginBottom: 20 }}>

                    {/* Indicator container */}
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'center'
                        }}>
                        {/* Render indicator */}
                        {slides.map((_, index) => (
                            <View
                                key={index}
                                style={[
                                    styles.indicator,
                                    currentSlideIndex == index && {
                                        backgroundColor: COLORS.white,
                                        width: 9,
                                        height: 9,
                                        borderRadius: 5,
                                    },
                                ]}
                            />
                        ))}
                    </View>
                </View>
            </View>
        );
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#33BD94" }}>
            <StatusBar backgroundColor={"#33bd94"} />
            <FlatList
                // style={{ marginTop: 150 }}
                ref={ref}
                onMomentumScrollEnd={updateCurrentSlideIndex}
                contentContainerStyle={{ height: height * 0.85 }}
                showsHorizontalScrollIndicator={false}
                horizontal
                data={slides}
                pagingEnabled
                renderItem={({ item }) => <Slide item={item} />}
            />
            <Footer />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({


    indicator: {
        height: 9,
        width: 9,
        backgroundColor: 'grey',
        marginHorizontal: 3,
        borderRadius: 5,
    },
    skip_Container: {
        position: 'absolute',
        top: 25,
        right: 25
    }
});
export default OnBoarding;