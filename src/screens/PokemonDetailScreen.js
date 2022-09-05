import { useNavigation } from '@react-navigation/native';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Dimensions
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { globalStyles } from '../utils/style.js';
import { getPokemonDetail } from '../services/api.js';
import { useDispatch } from 'react-redux';
import Spinner from 'react-native-loading-spinner-overlay/lib';
import ProgressBar from 'react-native-progress/Bar';
import {
  getTypeContainerColor,
  getBackgroundColor,
  formatPokemonIndex,
  getStat,
  getProgress
} from '../utils/pokemonUtils.js';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { statName } from '../utils/constants.js';

const screenHeight = Dimensions.get('window').height;

const PokemonDetailScreen = ({ route }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [spinnerVisible, setSpinnerVisible] = useState(false);
  const [option, setOption] = useState('About');
  const [pokemonImage, setPokemonImage] = useState('');
  const [pokemonTypes, setPokemonTypes] = useState([]);
  const [pokemonAbilities, setPokemonAbilities] = useState([]);
  const [pokemonStats, setPokemonStats] = useState([]);
  const [pokemonHeight, setPokemonHeight] = useState(0);
  const [pokemonWeight, setPokemonWeight] = useState(0);

  const pokemonProps = route.params.item;
  const pokemonName = route.params.item.name;
  const pokemonIndex = formatPokemonIndex(route.params.number);

  useEffect(() => {
    getPokemonData();
  }, []);

  function goBack() {
    navigation.goBack();
  }

  function getPokemonData() {
    setSpinnerVisible(true);
    getPokemonDetail(dispatch, pokemonProps.url)
      .then((res) => {
        if (res) {
          setPokemonImage(res.sprites.other['official-artwork'].front_default);
          setPokemonTypes(res.types);
          setPokemonHeight(res.height);
          setPokemonWeight(res.weight);
          setPokemonAbilities(res.abilities);
          setPokemonStats(res.stats);
          setTimeout(() => {
            setSpinnerVisible(false);
          }, 500);
        }
      })
      .catch((err) => {
        setSpinnerVisible(false);
        console.log('getPokemonDetail error', err);
      });
  }

  function setLabel(label) {
    setOption(label);
  }

  function renderLabelStyle(label) {
    return {
      fontWeight: option === label ? 'bold' : 'normal',
      color: option === label ? '#000000' : '#727272',
      marginBottom: 10
    };
  }

  function renderUnderline(label) {
    return {
      height: 3,
      borderRadius: 5,
      backgroundColor: '#AAAAAA',
      marginVertical: 5,
      width: option === label ? 50 : 0
    };
  }

  if (spinnerVisible) {
    return <Spinner visible={spinnerVisible}></Spinner>;
  }

  return (
    <SafeAreaView
      style={[
        styles.container,
        {
          backgroundColor: getBackgroundColor(
            pokemonTypes.length > 0 ? pokemonTypes[0].type.name : ''
          )
        }
      ]}
    >
      <View style={styles.header}>
        <TouchableOpacity style={styles.button} onPress={goBack}>
          <Ionicons name="arrow-back" style={styles.iconStyle} />
        </TouchableOpacity>
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: getBackgroundColor(
            pokemonTypes.length > 0 ? pokemonTypes[0].type.name : ''
          )
        }}
      >
        <View style={styles.topContainer}>
          <View style={globalStyles.justifyContent}>
            <Text style={styles.pokemonNameLabel}>{pokemonName}</Text>
          </View>
          <View style={globalStyles.alignItemsEnd}>
            <Text style={styles.pokemonIndexLabel}>#{pokemonIndex}</Text>
          </View>

          <View style={globalStyles.flexDirectionRow}>
            {pokemonTypes.length > 0 &&
              pokemonTypes.map((type) => {
                return (
                  <View
                    key={type.type.name}
                    style={[
                      styles.typesContainer,
                      {
                        backgroundColor: getTypeContainerColor(pokemonTypes[0].type.name)
                      }
                    ]}
                  >
                    <Text style={styles.typesText}>{type.type.name}</Text>
                  </View>
                );
              })}
          </View>
        </View>

        <View style={styles.imageContainer}>
          <Image
            style={styles.imageStyling}
            source={{
              uri: pokemonImage
            }}
          />
        </View>

        <View style={styles.contentContainer}>
          <View style={styles.optionLabelContainer}>
            <TouchableOpacity
              onPress={() => {
                setLabel('About');
              }}
              style={styles.optionLabel}
            >
              <Text style={renderLabelStyle('About')}>About</Text>
              <View style={renderUnderline('About')}></View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setLabel('Stats');
              }}
              style={styles.optionLabel}
            >
              <Text style={renderLabelStyle('Stats')}>Stats</Text>
              <View style={renderUnderline('Stats')}></View>
            </TouchableOpacity>
          </View>
          {option === 'About' && (
            <View style={styles.aboutContentDetail}>
              <View style={styles.eachContentDetail}>
                <Text style={styles.contentDetailLabel}>Height</Text>
                <Text style={styles.contentDetailValue}>{pokemonHeight / 10} m</Text>
              </View>

              <View style={styles.eachContentDetail}>
                <Text style={styles.contentDetailLabel}>Weight</Text>
                <Text style={styles.contentDetailValue}>{pokemonWeight / 10} kg</Text>
              </View>

              <View style={styles.eachContentDetail}>
                <Text style={styles.contentDetailLabel}>Types</Text>
                <View style={[globalStyles.flexDirectionRow, { flex: 6 }]}>
                  {pokemonTypes.length > 0 &&
                    pokemonTypes.map((type, index) => {
                      return (
                        <Text key={type.type.name} style={{ textTransform: 'capitalize' }}>
                          {type.type.name}
                          {index + 1 !== pokemonTypes.length ? ', ' : ''}
                        </Text>
                      );
                    })}
                </View>
              </View>

              <View style={styles.eachContentDetail}>
                <Text style={styles.contentDetailLabel}>Abilities</Text>
                <View style={[globalStyles.flexDirectionRow, { flex: 6 }]}>
                  {pokemonAbilities.length > 0 &&
                    pokemonAbilities.map((ability, index) => {
                      return (
                        <Text key={ability.ability.name} style={{ textTransform: 'capitalize' }}>
                          {ability.ability.name}
                          {index + 1 !== pokemonAbilities.length ? ', ' : ''}
                        </Text>
                      );
                    })}
                </View>
              </View>
            </View>
          )}
          {option === 'Stats' && (
            <View style={styles.statContentDetail}>
              <View style={styles.eachStatContentDetail}>
                <Text style={styles.contentDetailLabel}>HP</Text>
                <Text style={styles.statDetailValue}>{getStat(statName.HP, pokemonStats)}</Text>
                <View style={[styles.progressBar]}>
                  <ProgressBar
                    color={'#2fd64e'}
                    style={{ backgroundColor: '#f2f2f2', borderWidth: 0 }}
                    width={null}
                    progress={getProgress(statName.HP, pokemonStats)}
                  />
                </View>
              </View>

              <View style={styles.eachStatContentDetail}>
                <Text style={styles.contentDetailLabel}>Attack</Text>
                <Text style={styles.statDetailValue}>{getStat(statName.ATTACK, pokemonStats)}</Text>
                <View style={[styles.progressBar]}>
                  <ProgressBar
                    color={'#ff2e00'}
                    style={{ backgroundColor: '#f2f2f2', borderWidth: 0 }}
                    width={null}
                    progress={getProgress(statName.ATTACK, pokemonStats)}
                  />
                </View>
              </View>

              <View style={styles.eachStatContentDetail}>
                <Text style={styles.contentDetailLabel}>Defense</Text>
                <Text style={styles.statDetailValue}>
                  {getStat(statName.DEFENSE, pokemonStats)}
                </Text>
                <View style={[styles.progressBar]}>
                  <ProgressBar
                    color={'#2fd64e'}
                    style={{ backgroundColor: '#f2f2f2', borderWidth: 0 }}
                    width={null}
                    progress={getProgress(statName.DEFENSE, pokemonStats)}
                  />
                </View>
              </View>

              <View style={styles.eachStatContentDetail}>
                <Text style={styles.contentDetailLabel}>Sp. Attack</Text>
                <Text style={styles.statDetailValue}>{getStat(statName.SP_ATK, pokemonStats)}</Text>
                <View style={[styles.progressBar]}>
                  <ProgressBar
                    color={'#a155f2'}
                    style={{ backgroundColor: '#f2f2f2', borderWidth: 0 }}
                    width={null}
                    progress={getProgress(statName.SP_ATK, pokemonStats)}
                  />
                </View>
              </View>

              <View style={styles.eachStatContentDetail}>
                <Text style={styles.contentDetailLabel}>Sp. Defense</Text>
                <Text style={styles.statDetailValue}>{getStat(statName.SP_DEF, pokemonStats)}</Text>
                <View style={[styles.progressBar]}>
                  <ProgressBar
                    color={'#a155f2'}
                    style={{ backgroundColor: '#f2f2f2', borderWidth: 0 }}
                    width={null}
                    progress={getProgress(statName.SP_DEF, pokemonStats)}
                  />
                </View>
              </View>

              <View style={styles.eachStatContentDetail}>
                <Text style={styles.contentDetailLabel}>Speed</Text>
                <Text style={styles.statDetailValue}>{getStat(statName.SPEED, pokemonStats)}</Text>
                <View style={[styles.progressBar]}>
                  <ProgressBar
                    color={'#e8e654'}
                    style={{ backgroundColor: '#f2f2f2', borderWidth: 0 }}
                    width={null}
                    progress={getProgress(statName.SPEED, pokemonStats)}
                  />
                </View>
              </View>

              <View style={styles.eachStatContentDetail}>
                <Text style={styles.contentDetailLabel}>Total</Text>
                <Text style={styles.statDetailValue}>{getStat(statName.TOTAL, pokemonStats)}</Text>
                <View style={[styles.progressBar]}>
                  <ProgressBar
                    color={'#2d33cf'}
                    style={{ backgroundColor: '#f2f2f2', borderWidth: 0 }}
                    width={null}
                    progress={getProgress(statName.TOTAL, pokemonStats)}
                  />
                </View>
              </View>
            </View>
          )}
        </View>
      </View>
      <Spinner visible={spinnerVisible}></Spinner>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header: {
    height: 30,
    justifyContent: 'center',
    paddingHorizontal: 20
  },
  contentContainer: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    zIndex: 1,
    marginTop: -screenHeight * 0.04,
    height: screenHeight
  },
  topContainer: {
    height: 200,
    width: undefined,
    padding: 20
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2,
    marginTop: -screenHeight * 0.08
  },
  imageStyling: {
    height: 200,
    width: 200
  },
  typesContainer: {
    height: 25,
    width: 70,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8
  },
  typesText: {
    textTransform: 'capitalize',
    color: '#fff',
    fontSize: 13
  },
  optionLabelContainer: {
    height: 50,
    flexDirection: 'row',
    marginTop: 25
  },
  optionLabel: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  aboutContentDetail: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 40
  },
  statContentDetail: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 40
  },
  eachContentDetail: {
    flexDirection: 'row',
    marginBottom: 20
  },
  eachStatContentDetail: {
    flexDirection: 'row',
    marginBottom: 20,
    alignItems: 'center'
  },
  contentDetailLabel: {
    flex: 3,
    color: '#727272'
  },
  contentDetailValue: {
    flex: 6
  },
  statDetailValue: {
    flex: 1
  },
  progressBar: {
    flex: 5,
    height: 3,
    marginTop: -6,
    width: '100%',
    backgroundColor: 'white'
  },
  button: {
    width: 30
  },
  iconStyle: {
    fontSize: 25,
    color: '#F5F5F5'
  },
  pokemonNameLabel: {
    fontWeight: 'bold',
    fontSize: 25,
    textTransform: 'capitalize',
    color: '#fff'
  },
  pokemonIndexLabel: {
    fontWeight: 'bold',
    fontSize: 15,
    textTransform: 'capitalize',
    color: '#fff'
  }
});

export default PokemonDetailScreen;
