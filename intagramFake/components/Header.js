import React, {Component} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import Send from "react-native-vector-icons/Feather";
import Television from "react-native-vector-icons/Feather";
import Camera from 'react-native-vector-icons/FontAwesome5';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';


export default class Header extends Component {
    render() {
        return (
            <View>
                <View style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginTop: 4,
                    backgroundColor: "white",
                    width: "100%"
                }}>
                    <View style={{
                        flexDirection: "row",
                        width: 130,
                        marginLeft: 10
                    }}>
                        <Camera name="camera" size={35}/>
                        <Image
                            source={{uri: "https://thepracticaldev.s3.amazonaws.com/i/9dgus6e6o80pv1gx8y7t.png"}}
                            style={{width: wp(40), height: hp(7)}}/>
                    </View>
                    <View style={{width: 70, flexDirection: "row",}}>
                        <Television name="tv" size={35}/>
                        <Send name="send" size={35}/>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    }
});
