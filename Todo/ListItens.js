import React from 'react';
import {Text, View, TouchableOpacity, TextInput, CheckBox } from 'react-native';
import {formatDate} from './../helpers';
import DatePicker from 'react-native-datepicker';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from '.././styles/styles';





export default class ListItens extends React.Component {
	
	constructor(props){
		super(props)
		this.state = {
			isEditing: false,
			itemDone: false,
		}
		this.handleDone = this.handleDone.bind(this),
		this.editMethod = this.editMethod.bind(this)
		
	}

handleDone(){
	this.setState({
	itemDone: !this.state.itemDone
})
}
	
editMethod(){
	if(this.props.isEditing) {
            this.handleSubmit ()
        }
        else {
            !this.props.onEditing || this.props.onEditing(this)
        }
	
}

	



  render() {
	  
    return (
			
       <View 
		   style={ !this.state.itemDone ? styles.itemNotDone : styles.itemDone
		  }>
			<View key={this.props.keyval} style={styles.note}>
			
			{this.state.isEditing
			
			? <DatePicker
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
		:	
		 <Text style={styles.noteText} onChangeText = {this.handleSubmit}>
				{formatDate(this.props.val.date)}
		 </Text>
			
		}
		{this.state.isEditing
		
			? <TextInput style={styles.noteText} value={this.props.val.note}
			  />
			:
			
			<Text style={styles.noteText}>
				{this.props.val.note}
			</Text>
			}
		</View>
			
			
			<TouchableOpacity onPress={this.props.deleteMethod} style={styles.liDelete}>
				<Icon name="delete" size={30} color="red"/>
				<Text style={styles.liDeleteText}></Text>
			</TouchableOpacity>
			
			<TouchableOpacity onPress={this.editMethod} style={styles.liEdit}>
				<Icon name="edit" size={30} color="#2980b9"/>
				<Icon style={styles.liEditText}></Icon>
			</TouchableOpacity>
			
			<CheckBox
				onValueChange = {this.handleDone}
				value = {this.state.itemDone}
				style={styles.boxCheck}
				
			/>

			</View>

    );
  }
}
