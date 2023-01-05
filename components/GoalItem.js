import { StyleSheet, Text, View, Pressable } from 'react-native';

function GoalItem(props) {
    return (
        <Pressable onPress={props.onDeleteItem}>
            <View style={styles.goalItem}>
                <Text style={styles.goalText}>{props.text}</Text>
            </View>
        </Pressable>
    )
}


const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        padding: 8,
        color: '#ffffff',
        borderRadius: 6,
        backgroundColor: '#5e0acc',
    },
    goalText: {
        color: '#ffffff',
    }

});


export default GoalItem;