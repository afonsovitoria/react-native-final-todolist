import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
note: {
		position: 'relative',
		padding: 20,
		paddingRight: 100,
		borderBottomWidth: 2,
		borderBottomColor: '#ededed',
	},
	
		noteText:{
			paddingLeft:30,
			borderLeftWidth: 0,
			borderRightWidth: 0,
			borderTopWidth: 0,
			fontSize: 18,
		},

		liEdit:{
			position: 'absolute',
			justifyContent: 'center',
			padding:10,
			top: 10,
			bottom: 10,
			right: 20,
		},

		liEditText:{

		},

		liDelete:{
			position: 'absolute',
			justifyContent: 'center',
			padding: 20,
			top: 10,
			bottom: 10,
			right: 60,
		},

		liDeleteText:{

		},

		itemDone:{
			backgroundColor:'#eee',
		},

		boxCheck:{
			position: 'absolute',
			alignItems:'center',
			justifyContent:'center',
			margin: 'auto',
			top: 30,

		},
	
	
	container: {
  	flex: 1,
  },

   	header:{
		position: 'relative',
		alignItems:'center',
		justifyContent:'center',

	},
	
	headerText:{
		fontFamily: 'Roboto',
		color:'#ccc',
		fontSize: 30,
		padding: 40,
		letterSpacing: 6,
		
	},
	
	scrollContainer:{
		flex: 1,
		marginBottom: 100,
	},
	
	footer:{
		position: 'relative',
		padding: 20,
		paddingRight: 4,
		borderBottomWidth: 2,
		borderBottomColor: '#ededed',
	},
	
	textInput:{
		alignSelf: 'stretch',
		color: '#fff',
		padding: 15,
		backgroundColor: '#252525',
		borderTopColor:'#ededed',
		width: 260,
		borderRadius: 10,
		
	},
	
	addButton:{
		position: 'absolute',
		zIndex: 11,
		right: 145,
		bottom: 105,
		backgroundColor: '#ed5e5e',
		width: 80,
		height: 80,
		borderRadius: 50,
		alignItems: 'center',
		justifyContent: 'center',
		elevation:8,
	},
	
	addButtonText:{
		color: '#fff',
		fontSize: 35,
	},
	
	updateList:{
		position: 'absolute',
		zIndex: 11,
		right: 155,
		bottom: 90,
		backgroundColor: '#33c4bd',
		width: 70,
		height: 70,
		borderRadius: 10,
		alignItems: 'center',
		justifyContent: 'center',
		elevation: 8,
	},
	
	addButtonUpdate:{
		color: '#fff',
		fontSize: 35,
	},
});

export default styles			
			
