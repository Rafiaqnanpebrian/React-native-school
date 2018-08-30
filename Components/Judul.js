import React from 'react';
import {Text} from 'react-native';

class Judul extends React.Component
{
	render(){
		return(<Text style={kata.judul}>Biodata</Text>)

	}
}
const kata ={
	judul:{
		color:'#f00',
		fontSize:50,
	}
}
export default Judul;
