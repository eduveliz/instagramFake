import React, {Component} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import CardPicture from "./components/CardPicture";
import instagramData from "./InstagramData";
import Header from "./components/Header";

export default class App extends Component {
    render() {
        return (
            <View>
                <Header/>
                <FlatList
                    data={instagramData}
                    renderItem={account =>
                        <CardPicture
                            account={account}/>
                    }
                />
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
