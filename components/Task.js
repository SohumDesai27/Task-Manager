import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated } from 'react-native';

const Task = ({ id, title, description, completed, onToggle, onDelete }) => {
  // State to manage expanded/collapsed state of the task description
  const [expanded, setExpanded] = useState(false);
  
  // Animated value for fade-out effect when deleting
  const fadeAnim = useRef(new Animated.Value(1)).current;

  // Function to handle task deletion with fade-out animation
  const handleDelete = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start(() => {
      onDelete(id);
    });
  };

  return (
    <Animated.View style={[styles.item, { opacity: fadeAnim }]}>
      {/* Task content (title and description) */}
      <TouchableOpacity onPress={() => setExpanded(!expanded)} style={styles.taskContent}>
        <View style={styles.itemLeft}>
          {/* Checkbox for task completion */}
          <TouchableOpacity onPress={onToggle} style={[styles.square, completed && styles.completed]}></TouchableOpacity>
          <View style={styles.textContainer}>
            {/* Task title */}
            <Text style={[styles.itemText, completed && styles.completedText]}>{title}</Text>
            {/* Task description (shown when expanded) */}
            {expanded && <Text style={styles.itemDescription}>{description}</Text>}
          </View>
        </View>
      </TouchableOpacity>
      {/* Delete button */}
      <TouchableOpacity onPress={handleDelete} style={styles.deleteButton}>
        <Text style={styles.deleteText}>X</Text>
      </TouchableOpacity>
    </Animated.View>
  )
}

// Styles for the Task component
const styles = StyleSheet.create({
  item: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  taskContent: {
    flex: 1,
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: '#55BCF6',
    opacity: 0.4,
    marginRight: 15,
  },
  completed: {
    backgroundColor: '#00FF00',
    opacity: 0.8,
  },
  textContainer: {
    flex: 1,
  },
  itemText: {
    maxWidth: '100%',
    fontWeight: 'bold',
  },
  itemDescription: {
    maxWidth: '100%',
    color: '#555',
    marginTop: 5,
  },
  completedText: {
    textDecorationLine: 'line-through',
    color: '#A0A0A0',
  },
  deleteButton: {
    padding: 5,
  },
  deleteText: {
    color: '#FF0000',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default Task;