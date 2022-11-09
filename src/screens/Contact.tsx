import React from 'react';
import {useState} from 'react';
import {View, TextInput as Input, Image, Alert} from 'react-native';
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
      <View
        style={{
          paddingTop: '5%',
          paddingBottom: '5%',
        }}>
        <View>
          <Image
            source={pokemonLogo}
            style={{
              resizeMode: 'contain',
              height: 200,
              width: 300,
              alignSelf: 'center',
            }}
          />
        </View>
        <Subheading
          style={{
            color: colors.blue,
            letterSpacing: 1.5,
            fontStyle: 'italic',
            fontWeight: 'bold',
            fontSize: 25,
            textAlign: 'center',
            marginTop: 10,
          }}>
          Gotta catch 'em all
        </Subheading>

        <View style={{marginTop: '5%'}}>
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

        <View style={{marginTop: '5%', alignItems: 'center'}}>
          <Button
            label="Submit"
            backgroundColor={colors.blue}
            onPress={submit}
          />
        </View>

        <Modal isOpen={open} onClose={() => setOpen(!open)} size={'xl'}>
          <Modal.Content>
            <View style={{paddingTop: '7.5%', paddingBottom: '7.5%'}}>
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  source={require('../../assets/pokemon-go.png')}
                  style={{resizeMode: 'contain', height: 150}}
                />

                <View style={{marginTop: '5%'}}>
                  <Title
                    style={{
                      fontSize: 20,
                      color: colors.blue,
                      letterSpacing: 1.5,
                    }}>
                    Thank you for your feedback!
                  </Title>

                  <View style={{marginTop: 10}}>
                    <Subheading style={{letterSpacing: 1.5}}>
                      Name : {info.name}
                    </Subheading>

                    <Subheading style={{letterSpacing: 1.5}}>
                      Email : {info.email}
                    </Subheading>

                    <Subheading style={{letterSpacing: 1.5}}>
                      Birthday : {date}
                    </Subheading>
                  </View>
                </View>
              </View>
            </View>
          </Modal.Content>
        </Modal>
      </View>
    </Container>
  );
};

export default Contact;
