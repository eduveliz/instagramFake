import React, {Component} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';
import Config from "react-native-vector-icons/Entypo";
import Heard from "react-native-vector-icons/AntDesign";
import Comment from "react-native-vector-icons/FontAwesome";
import Send from "react-native-vector-icons/Feather";
import Save from "react-native-vector-icons/Feather";


export default class CardPicture extends Component {
    render() {
        return (
            <View>
                <View style={styles.container}>
                    <View style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        width: 130
                    }}>
                        <Image
                            source={{uri: this.props.account.item.user.profile_picture}}
                            style={{width: 45, height: 45, borderRadius: 25}}/>
                        <Text style={styles.account}>{this.props.account.item.user.full_name}</Text>
                    </View>
                    <View>
                        <Config name="dots-three-vertical" size={20}/>
                    </View>
                </View>
                <View>
                    <Image
                        source={{uri: this.props.account.item.images}}
                        style={styles.image}/>
                </View>
                <View>
                    <View style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        marginTop: 4,
                        width: "100%"
                    }}>
                        <View style={{
                            flexDirection: "row",
                            width: 130
                        }}>
                            <Heard style={{marginLeft: 10}} name="hearto" size={30}/>
                            <Comment style={{marginLeft: 10}} name="comment-o" size={30}/>
                            <Send style={{marginLeft: 10}} name="send" size={30}/>
                        </View>
                        <View>
                            <Save name="bookmark" size={30}/>
                        </View>
                    </View>
                </View>
                <View style={{
                    flexDirection: "row",
                    marginLeft: 10,
                    marginTop: 10,
                    justifyContent: "space-between",
                    width: 80
                }}>
                    <Image
                        source={{uri: "https://d500.epimg.net/cincodias/imagenes/2016/07/04/lifestyle/1467646262_522853_1467646344_noticia_normal.jpg"}}
                        style={{width: 20, height: 20, borderRadius: 10}}/>
                    <Text>Le gusta a ...</Text>
                </View>
                <View style={{
                    marginTop: 8,
                    marginLeft: 10
                }}>
                    <Text>Accont - comments</Text>
                    <Text>Ver los 2 comentarios</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        height: hp('8%'),
        width: wp('100%'),
        flexDirection: "row",
        justifyContent: 'space-between',
    },
    account: {
        fontSize: 20,
        fontWeight: "bold"
    },
    image: {
        width: wp('100%'),
        height: hp('30%'),
    }
});