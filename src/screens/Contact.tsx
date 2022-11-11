import React from 'react';
import {useState} from 'react';
import {View, TextInput as Input, Image, Alert, StyleSheet} from 'react-native';
import {Paragraph, Subheading, Surface, Title} from 'react-native-paper';
import {Modal} from 'native-base';
import {Button, DateInput, TextInput} from '../components';
import {Container} from '../containers';
import {HomeNavigationProp} from '../navigation/model';
import {RootState} from '../redux';
import {Info, onChangeBOD, onChangeInfo} from '../redux/contactReducer';
import {useAppDispatch, useAppSelector} from '../redux/hooks';
import {isEmailValid, isNameValid} from '../utils';
import {colors} from '../utils/themes';

const pokemonLogo = require('../../assets/pokemon_logo.png');

type Props = {
  navigation: HomeNavigationProp;
};

const Contact = () => {
  const dispatch = useAppDispatch();
  const {info, date} = useAppSelector((state: RootState) => state.contact);

  const [open, setOpen] = useState<boolean>(false);
  const validEmail = isEmailValid(info.email);
  const validName = isNameValid(info.name);

  const onChangeTextInput = (key: keyof Info) => (value: string) => {
    dispatch(onChangeInfo({key: key, value: value}));
  };

  const onChangeDate = (value: Date) => {
    dispatch(onChangeBOD({value: value.toDateString()}));
  };

  const submit = () => {
    const {name, email} = info;

    if (name.length === 0 || !validName) {
      Alert.alert('Alert', 'Please enter name correctly');
      return;
    }

    if (email.length === 0 || !validEmail) {
      Alert.alert('Alert', 'Please enter email correctly');
      return;
    }

    setOpen(!open);
  };

  const parseDate = new Date(date);

  return (
    <Container
      backgroundColor="white"
      statusBarColor="red"
      title="PokeDex"
      isMain>
      <View style={styles.container}>
        <View style={styles.image_container}>
          <Image source={pokemonLogo} style={styles.image} />
        </View>
        <Subheading style={styles.text}>Gotta catch 'em all</Subheading>

        <View style={styles.input_container}>
          <TextInput
            value={info.name}
            onChange={onChangeTextInput('name')}
            label="Name"
            errorLines="Enter your name correctly."
            affix
            affixLength="/50"
            keyInfo="name"
            error={validName}
            maxlength={50}
          />

          <TextInput
            value={info.email}
            onChange={onChangeTextInput('email')}
            label="Email"
            errorLines="Enter your email correctly."
            keyInfo="email"
            error={validEmail}
          />

          <DateInput value={parseDate} onChange={onChangeDate} />
        </View>

        <View style={styles.button_container}>
          <Button
            label="Submit"
            backgroundColor={colors.blue}
            onPress={submit}
          />
        </View>

        <Modal isOpen={open} onClose={() => setOpen(!open)} size={'xl'}>
          <Modal.Content>
            <View style={styles.modal_container}>
              <View style={styles.info_container}>
                <Title style={styles.title}>Thank you for your feedback!</Title>

                <View style={{marginTop: '5%'}}>
                  <Subheading style={styles.subheading}>
                    Name : {info.name}
                  </Subheading>

                  <Subheading style={styles.subheading}>
                    Email : {info.email}
                  </Subheading>

                  <Subheading style={styles.subheading}>
                    Birthday : {date}
                  </Subheading>
                </View>
              </View>
            </View>
          </Modal.Content>
        </Modal>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: '5%',
    paddingBottom: '5%',
  },
  image_container: {marginTop: '10%'},
  image: {resizeMode: 'contain', height: 200, width: 300, alignSelf: 'center'},
  text: {
    color: colors.blue,
    letterSpacing: 1.5,
    fontStyle: 'italic',
    fontWeight: 'bold',
    fontSize: 25,
    textAlign: 'center',
    marginTop: 10,
  },
  button_container: {marginTop: '5%', alignItems: 'center'},
  input_container: {marginTop: '5%'},
  modal_container: {paddingTop: '7.5%', paddingBottom: '7.5%'},
  info_container: {alignItems: 'center', justifyContent: 'center'},
  title: {fontSize: 20, color: colors.blue, letterSpacing: 1.5},
  subheading: {letterSpacing: 1.5},
});

export default Contact;
