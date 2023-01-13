import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, ActivityIndicator, Dimensions, Image } from "react-native";
import { Button } from "../../components";
import * as COLOR from "../../utils/colors";
import * as STRINGS from "../../utils/strings";
import { updatePokemonList } from "../../redux/actions";
import { getPokeImageUrl } from "../../utils/util";
import { useDispatch, useSelector } from "react-redux";
const { width } = Dimensions.get("screen");

export default function CatalogScreen(props) {
    const [loader, setLoader] = useState(true);
    const [showError, setShowError] = useState(false);
    const dispatch = useDispatch();
    const pokeList = useSelector(state => state.data.pokemon_list);
    useEffect(() => {
        serviceInitializer(`${STRINGS.API}?limit=10`);
    }, [])
    function serviceInitializer(url) {
        setLoader(true);
        dispatch(updatePokemonList(url)).then(response => {
            setLoader(false);
        }).catch(error => {
            setLoader(false);
            setShowError(true);
        })
    }
    function renderPokeCard(item) {
        let url = getPokeImageUrl(item.url);
        return <View elevation={2} style={styles.poke_card}>
            <Image source={{ uri: url }} style={styles.poke_image} resizeMode="contain" />
            <Text style={styles.poke_name}>{item.name}</Text>
            <Button onPress={() => props.navigation.navigate("CatalogDetailsScreen",{data: {url: item.url, image: url}})} style={styles.view_button}>
                <Text style={styles.button_text}>{STRINGS.VIEW}</Text>
            </Button>
        </View>
    }
    function renderPagination() {
        return <View elevation={2} style={styles.pagination_container}>
{pokeList.previous != null ? <Button onPress={() => serviceInitializer(pokeList.previous)} style={styles.page_button}>
                <Text style={styles.button_text}>{STRINGS.PREVIOUS}</Text>
            </Button> : null}
            {pokeList.next != null ? <Button onPress={() => serviceInitializer(pokeList.next)} style={styles.page_button}>
                <Text style={styles.button_text}>{STRINGS.NEXT}</Text>
            </Button> : null}
        </View>
    }
    if (loader) {
        return <View style={styles.loader_container}>
            <ActivityIndicator size={STRINGS.LARGE} color={COLOR.PRIMARY} />
        </View>
    }
    if (showError) {
        return <View style={styles.loader_container}>
            <Text style={styles.error_text}>{STRINGS.LIST_FETCH_ERROR}</Text>
        </View>
    }
    return (
        <View style={styles.container}>
            <FlatList
                data={pokeList?.results}
                keyExtractor={(item, index) => index}
                renderItem={({ item }) => renderPokeCard(item)}
                showsVerticalScrollIndicator={false}
                ListFooterComponent={() => renderPagination()}
                numColumns={2} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        alignItems: "center",
        justifyContent: "center"
    },
    loader_container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    error_text: {
        textAlign: "center",
        padding: 10
    },
    poke_card: {
        width: width / 2.5,
        backgroundColor: COLOR.WHITE,
        margin: 5,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center"
    },
    poke_name: {
        fontSize: 16,
        padding: 10
    },
    poke_image: {
        width: 100,
        height: 100
    },
    view_button: {
        width: "60%",
        height: 30
    },
    button_text: {
        color: COLOR.WHITE,
        fontSize: 12
    },
    pagination_container: {
        height: 50,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    page_button: {
        width: width / 3.5,
        height: 35,
        marginHorizontal: 5,
        backgroundColor: COLOR.BLUE
    }
})