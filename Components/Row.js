import {Stylesheet, View} from 'react-native';
import React from 'react';

export const Row = ({children}) => {
return <View style={Stylesheet.rowcontainer}>{children}</View>;
};

//create styles of row
const styles= StyleSheet.create({
    rowcontainer: {
        flexDirection: 'row',
        alignContent: "flex-start",
        flexWrap: 'wrap',
    },
});

