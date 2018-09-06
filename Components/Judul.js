import React from 'react';
import {Text} from 'react-native';

class Judul extends React.Component
{
	render(){
		return(<Text style={kata.judul}>{this.props.title}</Text>)

	}
}
const kata ={
	judul:{
		color:'#f00',
		fontSize:30,
	}
}
export default Judul;
