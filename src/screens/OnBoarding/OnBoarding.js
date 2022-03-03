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
import OnBoarding_1 from '../../assets/svg/Onborading/OnBoarding_1'

const { width, height } = Dimensions.get('window');

const COLORS = { primary: '#383838', white: '#fff' };

const slides = [
    {
        id: '1',
        image: require('../../assets/images/OnBoarding/OnBoarding_1.png'),
        title: 'Best Digital SolutioHire IT Professionals at very affordable prices.',
        subtitle: 'Make the most of HirePro’s 150+ Seasoned IT Professionals to Boost Your Online Presence. HirePro has experts who usher ease of mind for you..',
    },
    {
        id: '2',
        image: require('../../assets/images/OnBoarding/OnBoarding_2.png'),
        title: 'Quick, Easy, and Seamless!',
        subtitle: 'We showcase to you the best talent pool. You choose the best resources according to your needs & budget, that’s all about it. That’s all it takes to hire certified professionalswith HirePro.',
    },
    {
        id: '3',
        image: require('../../assets/images/OnBoarding/OnBoarding_3.png'),
        title: 'Why to choose HirePro ',
        subtitle: 'Years of industry exposure have helped HirePro set up a diverse service pool, covering all areas essential for any business to thrive in the virtual world. Our resource pool comprises the best professionals with solid track record. We select them through a lengthy & strict vetting process, So you get the best services for the best rates.',
    },
    {
        id: '4',
        image: require('../../assets/images/OnBoarding/OnBoarding_3.png'),
        title: 'Increase Your Value',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
];

const Slide = ({ item }) => {
    return (

        <View style={{ alignItems: 'center', top: 120 }}>
            {/* <TouchableOpacity style={styles.skip_Container}>
                <Text style={{ color: '#FFFFFF', fontSize: 16 }}>SKIP</Text>
            </TouchableOpacity> */}
            {item.id != 4 ? (<View style={{ alignItems: 'center' }}>
                <View style={{ width: 320, alignItems: 'center', bottom: 10 }}>
                    <Text style={styles.title}>{item?.title}</Text>
                    <Text style={styles.subtitle}>{item?.subtitle}</Text>
                </View>
                <Image
                    source={item?.image}
                    style={{ height: '65%', width, resizeMode: 'contain' }}
                />

            </View>) :
                (<Text style={{ width: 300, height: 4000 }}>2</Text>)}

        </View>
    );
};

const OnBoarding = ({ navigation }) => {
    const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);
    const ref = React.useRef();
    const updateCurrentSlideIndex = e => {
        const contentOffsetX = e.nativeEvent.contentOffset.x;
        const currentIndex = Math.round(contentOffsetX / width);
        setCurrentSlideIndex(currentIndex);
    };

    const goToNextSlide = () => {
        const nextSlideIndex = currentSlideIndex + 1;
        if (nextSlideIndex != slides.length) {
            const offset = nextSlideIndex * width;
            ref?.current.scrollToOffset({ offset });
            setCurrentSlideIndex(currentSlideIndex + 1);
        }
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
                    {currentSlideIndex == slides.length - 1 ? (
                        <View style={{ height: 50 }}>
                            <TouchableOpacity
                                style={styles.btn}
                                onPress={() => navigation.replace('AppStack')}>
                                <Text style={{ fontWeight: 'bold', fontSize: 15, color: '#ECF1F4' }}>
                                    GET STARTED
                                </Text>
                            </TouchableOpacity>
                        </View>
                    ) : (
                        // <View style={{ flexDirection: 'row' }}>
                        //     <TouchableOpacity
                        //         activeOpacity={0.8}
                        //         style={[
                        //             styles.btn,
                        //             {
                        //                 borderColor: COLORS.white,
                        //                 borderWidth: 1,
                        //                 backgroundColor: 'transparent',
                        //             },
                        //         ]}
                        //         onPress={skip}>
                        //         <Text
                        //             style={{
                        //                 fontWeight: 'bold',
                        //                 fontSize: 15,
                        //                 color: COLORS.white,
                        //             }}>
                        //             SKIP
                        //         </Text>
                        //     </TouchableOpacity>
                        //     <View style={{ width: 15 }} />
                        //     <TouchableOpacity
                        //         activeOpacity={0.8}
                        //         onPress={goToNextSlide}
                        //         style={styles.btn}>
                        //         <Text
                        //             style={{
                        //                 fontWeight: 'bold',
                        //                 fontSize: 15,
                        //                 color: '#ECF1F4'
                        //             }}>
                        //             NEXT
                        //         </Text>
                        //     </TouchableOpacity>
                        // </View>
                        null

                    )}
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
                                        width: 10,
                                        height: 10,
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
    subtitle: {
        color: COLORS.white,
        fontSize: 13,
        marginTop: 10,
        textAlign: 'center',
        lineHeight: 16,
    },
    title: {
        color: COLORS.white,
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 20,
        textAlign: 'center',
    },
    image: {
        height: '100%',
        width: '100%',
        resizeMode: 'contain',
    },
    indicator: {
        height: 10,
        width: 10,
        backgroundColor: 'grey',
        marginHorizontal: 3,
        borderRadius: 5,
    },
    btn: {
        flex: 1,
        height: 50,
        borderRadius: 5,
        backgroundColor: '#E75950',
        justifyContent: 'center',
        alignItems: 'center',
    },
    skip_Container: {
        position: 'absolute',
        top: 25,
        right: 25
    }
});
export default OnBoarding;