import React from 'react';
import PropTypes from 'prop-types'
import { StyleSheet, View, Text } from 'react-native';
import theme from "../theme";

function ListItem(props) {
    const { title, subTitle, containerStyle, ...otherProps } = props;
    return (
        <View style={[styles.containerStyle, containerStyle]}>
            <Text style={styles.titleStyle}>{title}</Text>
            <Text style={styles.subTitleStyle}>{subTitle}</Text>
        </View>
    );
}

ListItem.defaultProps = {
    title: "",
    subTitle: ""
}

ListItem.propTypes = {
    title: PropTypes.string,
    subTitle: PropTypes.string
}


const styles = StyleSheet.create({
    containerStyle: {
        width: "100%",
        padding: theme.padding.default,
    },
    titleStyle: {
        fontSize: theme.fontSizes.body,
        color: theme.colors.primary
    },
    subTitleStyle: {
        fontSize: theme.fontSizes.subTitle
    }
});


export default ListItem;
