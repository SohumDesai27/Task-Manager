import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated } from 'react-native';

const Task = ({ id, title, description, completed, onToggle, onDelete }) => {
  const [expanded, setExpanded] = useState(false);
  const fadeAnim = useRef(new Animated.Value(1)).current;

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
      <TouchableOpacity onPress={() => setExpanded(!expanded)} style={styles.taskContent}>
        <View style={styles.itemLeft}>
          <TouchableOpacity onPress={onToggle} style={[styles.square, completed && styles.completed]}></TouchableOpacity>
          <View style={styles.textContainer}>
            <Text style={[styles.itemText, completed && styles.completedText]}>{title}</Text>
            {expanded && <Text style={styles.itemDescription}>{description}</Text>}
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleDelete} style={styles.deleteButton}>
        <Text style={styles.deleteText}>X</Text>
      </TouchableOpacity>
    </Animated.View>
  )
}

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