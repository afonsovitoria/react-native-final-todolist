import React from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import DatePicker from 'react-native-datepicker';
import ListItens from './ListItens';

export default class Page extends React.Component {
	
	constructor(props){
		super(props);
			this.state = {
				noteArray: [],
				noteText: '',
				dateText: '',
				idEditing: -1,
		
	}
		
}
	
saveTask() {
	
		if (this.state.noteText){
			let tempList = this.state.noteArray.slice()
			if(this.state.idEditing === -1) {
				tempList.push({
						date : new Date(this.state.dateText),
						note : this.state.noteText
				});
			}
			else {
				tempList[this.state.idEditing] = {
						date : new Date(this.state.dateText),
						note : this.state.noteText
				};
			}
			this.setState({ 
				noteArray: tempList, 
				noteText: "", 
				dateText: "",
				idEditing: -1,
			});
			
		}
}
	
deleteLi(key){
	this.state.noteArray.splice(key, 1);
	this.setState({noteArray: this.state.noteArray})
	
	
}
	
editingLi(key){
	this.setState({
		noteText: this.state.noteArray[key].note,
		dateText: this.state.noteArray[key].date,
		idEditing: key,
	})
}


  render() {
	 let notes = this.state.noteArray.map((val, key) => {
		  return <ListItens key ={key} keyval={key} val={val}
					 deleteMethod={ () => this.deleteLi(key) }
					 onEditing ={ () => this.editingLi(key)}
					 updateItens={ () =>this.updateLi(key)}
		 /> 
});

		  			 
		
	
    return (
	
      <View style={styles.container}>
        
			<View style={styles.header}>
				<Text style={styles.headerText}>todolist</Text>
			</View>
			
			<ScrollView style={styles.scrollContainer}>
				{notes}
			</ScrollView>
			
			<View key={this.props.keyval} style={styles.footer}>
				
				<TextInput 
					style={styles.textInput}
					onChangeText = {(noteText) => this.setState({noteText})}
					value = {this.state.noteText}
					placeholder= 'Type Task'
					placeholderTextColor = 'white'
					underlineColorAndroid='transparent'
				/>
				
				<DatePicker
                	style={{position: 'absolute', top: 30, right: 7 }}
                	date={this.state.dateText}
                	mode="date"
					placeholder=" "
                	format="YYYY-MM-DD"
					confirmBtnText="Confirm"
					cancelBtnText="Cancel"
					customStyles={{
                     dateIcon: {
                     width: 60,
                     height: 60,
 
                     },
                     dateInput: {
                       borderWidth: 0,
					   borderStyle: null,
  					   height: 0,
					   width: 0,
                     }
                 }}
                onDateChange={(dateText) => this.setState({dateText})}
                
          />
	

		</View>
			
			<TouchableOpacity onPress={this.saveTask.bind(this)} style={styles.addButton}>
				<Text style={styles.addButtonText}>+</Text>
			 </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
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
