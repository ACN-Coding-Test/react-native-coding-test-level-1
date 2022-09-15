import React from 'react';
import { StyleSheet, View } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Button, Dialog, HelperText, Paragraph, Portal, Provider, TextInput, Title } from 'react-native-paper';

const ContactUsScreen = () => {

	const [name, setName] = React.useState('');
	const [email, setEmail] = React.useState('');
	const [birthdate, setbirthdate] = React.useState(new Date());
	const [visible, setVisible] = React.useState(false);

	const validName = (text: string) => {
		const regexp = new RegExp(/^[a-zA-Z]{1,50}$/);
		return regexp.test(text);
	}

	const validEmail = (text: string) => {
		const regexp = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
		return regexp.test(text);
	}

	return (
		<Provider>
			<View style={styles.viewContainer}>
				<TextInput
					label="Name"
					style={styles.textInput}
					onChangeText={text => setName(text)}
					placeholder="John Dope"
					defaultValue=''
					value={name}
					error={name && !validName(name)}
				/>
				<HelperText
					style={styles.helperText}
					type="error"
					visible={name && !validName(name)}
				>
				{'Name is invalid!'}
				</HelperText>
				<TextInput
					label="Email"
					style={styles.textInput}
					placeholder="johndope@gmail.com"
					value={email}
					onChangeText={text => setEmail(text)}
					error={email && !validEmail(email)}
				/>
				<HelperText
					style={styles.helperText}
					type="error"
					visible={email && !validEmail(email)}
				>
				{'Email address is invalid!'}
				</HelperText>
				<View style={{flexDirection: 'row'}}>
					<Title style={styles.title}>{'Birthday'}</Title>
					<DateTimePicker
						style={styles.datePicker}
						// title="Birthdate"
						onChange={(_, date) => { setbirthdate(date) }}
						maximumDate={new Date()}
						value={birthdate}
					/>
				</View>
				<Button
					style={styles.button}
					disabled={!validEmail(email) || !validName(name)}
					mode="contained"
					onPress={() => {setVisible(true)}}
				>
				{'Submit'}
				</Button>
				<Portal>
					<Dialog visible={visible} onDismiss={() => setVisible(false)}>
						<Dialog.Title>{'Information'}</Dialog.Title>
						<Dialog.Content>
							<Paragraph>{`Name : ${name}`}</Paragraph>
							<Paragraph>{`Email : ${email}`}</Paragraph>
							<Paragraph>{`Birthdate : ${birthdate.toDateString()}`}</Paragraph>
						</Dialog.Content>
						<Dialog.Actions>
						<Button onPress={() => setVisible(false)}>{'Done'}</Button>
						</Dialog.Actions>
					</Dialog>
				</Portal>
			</View>
		</Provider>
	);
}

const styles = StyleSheet.create({
	viewContainer: {
	},
	textInput: {
		marginHorizontal: 20,
		marginTop: 10,
	},
	helperText: {
		marginHorizontal: 20,
	},
	title: {
		marginHorizontal: 20,
		marginTop: 10,
	},
	datePicker: {
		marginHorizontal: 20,
		marginTop: 10,
		flex: 1
	},
	button: {
		marginHorizontal: 20,
		marginTop: 10,
	}
});

export default ContactUsScreen;
