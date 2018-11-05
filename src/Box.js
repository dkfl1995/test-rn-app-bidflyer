import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import {Icon} from 'react-native-elements'

const { width, height } = Dimensions.get('screen');

export default class Box extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        console.log(this.props.imageUrl)
        return (
            <View style={styles.container}>
                <Image source={{uri: this.props.imageUrl}} style={[ styles.image, styles.containerWidth ]}/>
                <Text style={[ styles.boundText, styles.containerWidth, { padding: 10 } ]}>{`${this.props.outboundId}-${this.props.inboundId}`}</Text>
                <Text style={[ { fontSize: 18, padding: 10 }, styles.alignText, styles.containerWidth ]}>{`${this.props.viewersCount} viewing this`}</Text>
                <View style={[ styles.priceContainer, styles.containerWidth ]}>
                    <Text style={{ textAlign: 'center', fontSize: 18 }}>{`Now from ${this.props.currentMinPrice}$`}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: width < 300 ? '100%' : '90%',
        marginVertical: 10, 
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#aabb55',
        borderWidth: 1,
    },
    containerWidth: {
        width: width*.9*.9,
    },

    image: {
        height: width*.7,
        marginVertical: 20,
    },
    boundText: {
        fontSize: 30,
    },    
    alignText: {
        alignContent: 'flex-start',

    },
    priceContainer: {
        borderWidth: 1,
        borderRadius: 10,]
        padding: 20,
        margin: 10,
        backgroundColor: 'aqua'
    },  
});