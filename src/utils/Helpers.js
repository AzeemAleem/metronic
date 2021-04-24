// import AsyncStorage from '@react-native-community/async-storage';
// import Toast from 'react-native-root-toast';

// const storeData = async (key, value) => {
// 	try {
// 		await AsyncStorage.setItem(key, value);
// 	} catch (e) {
// 		console.log('store error is here', e);
// 		// saving error
// 	}
// };
// const getData = async (key) => {
// 	try {
// 		const value = await AsyncStorage.getItem(key);
// 		return value;
// 	} catch (e) {
// 		console.log('data get error', e);
// 		// error reading value
// 	}
// };

// const login = async (token, user) => {
// 	await storeData('token', token);
// 	await storeData('user', JSON.stringify(user));
// };

// const logout = async () => {
// 	await storeData('token', '');
// 	await storeData('user', '');
// };

// const getUser = async () => {
// 	return JSON.parse(await getData('user'));
// };

// const setUser = async (user) => {
// 	await storeData('user', JSON.stringify(user));
// };

