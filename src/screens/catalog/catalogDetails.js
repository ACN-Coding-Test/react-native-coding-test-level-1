import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, ActivityIndicator, Dimensions, Image } from "react-native";
import { Button } from "../../components";
import * as COLOR from "../../utils/colors";
import * as STRINGS from "../../utils/strings";
import { updatePokemonData } from "../../redux/actions";
import { getPokeImageUrl } from "../../utils/util";
import { useDispatch, useSelector } from "react-redux";
const { width } = Dimensions.get("screen");

export default function CatalogDetails(props) {
    const [loader, setLoader] = useState(true);
    const [showError, setShowError] = useState(false);
    const pokeUrl = props.route.params.data;
    const dispatch = useDispatch();
    const pokeData = useSelector(state => state.data.pokemon_details);
    useEffect(() => {
        serviceInitializer(`${pokeUrl.url}`);
    }, [])
    function serviceInitializer(url) {
        setLoader(true);
        dispatch(updatePokemonData(url)).then(response => {
            setLoader(false);
        }).catch(error => {
            setLoader(false);
            setShowError(true);
        })
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
            <Image source={{ uri: pokeUrl.image }} style={styles.poke_image} resizeMode="contain" />
            <Text style={styles.poke_name}>{pokeData.name}</Text>
            <View elevation={3} style={styles.about_info}>
                <View style={styles.wh_container}>
                    <View style={styles.content_container}>
                        <Text style={styles.wh_text}>{pokeData.weight} {STRINGS.KG}</Text>
                        <Text style={styles.wh_title}>{STRINGS.WEIGHT}</Text>
                    </View>
                    <View style={[styles.content_container, { flexDirection: "row" }]}>
                        {pokeData?.types.map((item, index) => {
                            return <Text key={index} style={styles.wh_title}>{Number(index) + 1 === pokeData?.types.length ? item.type.name : `${item.type.name}/`}</Text>
                        })}
                    </View>
                    <View style={styles.content_container}>
                        <Text style={styles.wh_text}>{pokeData.height} {STRINGS.M}</Text>
                        <Text style={styles.wh_title}>{STRINGS.HEIGHT}</Text>
                    </View>
                </View>
                <View style={styles.wh_container}>
                    <Image source={{ uri: pokeData.sprites.back_shiny }} style={styles.poke_image_small} resizeMode="contain" />
                    <Image source={{ uri: pokeData.sprites.front_shiny }} style={styles.poke_image_small} resizeMode="contain" />
                    <Image source={{ uri: pokeData.sprites.back_default }} style={styles.poke_image_small} resizeMode="contain" />
                    <Image source={{ uri: pokeData.sprites.front_default }} style={styles.poke_image_small} resizeMode="contain" />
                </View>
            </View>
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
    poke_name: {
        fontSize: 22,
        fontWeight: "bold",
        padding: 10
    },
    poke_image: {
        width: width / 1.5,
        height: width / 1.5
    },
    view_button: {
        width: "60%",
        height: 30
    },
    button_text: {
        color: COLOR.WHITE,
        fontSize: 12
    },
    about_info: {
        width: "100%",
        backgroundColor: COLOR.WHITE,
        borderRadius: 10
    },
    wh_container: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    wh_text: {
        fontSize: 24,
        padding: 10,
        color: COLOR.PRIMARY
    },
    content_container: {
        alignItems: "center"
    },
    poke_image_small: {
        width: width / 5,
        height: width / 5
    }
})