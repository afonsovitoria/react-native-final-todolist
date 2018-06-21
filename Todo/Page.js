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
		
	}
		
}
	
addList() {
		
		if (this.state.noteText){
			let d = new Date();
			this.state.noteArray.push({
					date : new Date(this.state.dateText),
					note : this.state.noteText
			});
			this.setState({ noteArray: this.state.noteArray, noteText: "", dateText: ""});
		} 
}
	
deleteLi(key){
	this.state.noteArray.splice(key, 1);
	this.setState({noteArray: this.state.noteArray})
	
	
}
	
editingLi(key){
	this.setState({
		noteText: this.state.noteArray[key].note,
		dateText: this.state.noteArray[key].date
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
				<Text style={styles.headerText}>TodoList</Text>
			</View>
			
			<ScrollView style={styles.scrollContainer}>
				{notes}
			</ScrollView>
			
			<View style={styles.footer}>
				
				<TextInput 
					style={styles.textInput}
					onChangeText = {(noteText) => this.setState({noteText})}
					value = {this.state.noteText}
					placeholder= 'Type Task'
					placeholderTextColor = 'white'
					underlineColorAndroid='transparent'>
				</TextInput>
				
				<DatePicker
                	style={{width: 250, marginLeft: 10}}
                	date={this.state.dateText}
                	mode="date"
					placeholder="Select Date"
                	format="YYYY-MM-DD"
					confirmBtnText="Confirm"
					cancelBtnText="Cancel"
					customStyles={{
                     dateIcon: {
                     width: 0,
                     height: 0,
                     },
                     dateInput: {
                     borderLeftWidth: 0,
                     borderRightWidth: 0,
                     borderTopWidth: 0,
                     }
                 }}
                onDateChange={(dateText) => this.setState({dateText})}
                
          />
	

		</View>
			
			
			<TouchableOpacity onPress={ this.addList.bind(this)} style={styles.addButton}>
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
		backgroundColor:'#33c4bd',
		alignItems:'center',
		justifyContent:'center',
		borderBottomWidth: 10,
		borderBottomColor: '#ddd',
	},
	
	headerText:{
		color:'white',
		fontSize: 20,
		padding: 26,
		
	},
	
	scrollContainer:{
		flex: 1,
		marginBottom: 100,
	},
	
	footer:{
		position:'absolute',
		bottom:0,
		left: 0,
		right: 0,
		zIndex: 10,
	},
	
	textInput:{
		alignSelf: 'stretch',
		color: '#fff',
		padding: 20,
		backgroundColor: '#252525',
		borderTopWidth: 2,
		borderTopColor:'#ededed',
	},
	
	addButton:{
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
	
	addButtonText:{
		color: '#fff',
		fontSize: 35,
	},

});
