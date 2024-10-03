import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Task from '../components/Task';

const TaskListScreen = ({ tasks }) => {
  // State to toggle between completed and incomplete tasks
  const [showCompleted, setShowCompleted] = useState(false);

  // Filter tasks based on their completion status
  const filteredTasks = tasks.filter(task => task.completed === showCompleted);

  return (
    <View style={styles.container}>
      {/* Header with toggle buttons for completed/incomplete tasks */}
      <View style={styles.header}>
        <TouchableOpacity
          style={[styles.headerButton, !showCompleted && styles.activeButton]}
          onPress={() => setShowCompleted(false)}
        >
          <Text style={styles.headerButtonText}>Incomplete</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.headerButton, showCompleted && styles.activeButton]}
          onPress={() => setShowCompleted(true)}
        >
          <Text style={styles.headerButtonText}>Completed</Text>
        </TouchableOpacity>
      </View>

      {/* Scrollable list of tasks */}
      <ScrollView contentContainerStyle={styles.tasksWrapper}>
        {filteredTasks.map((task, index) => (
          <Task
            key={index}
            title={task.title}
            description={task.description}
            completed={task.completed}
            onToggle={() => {}}  // These are placeholder functions
            onDelete={() => {}}  // You might want to implement these
          />
        ))}
        {/* Display a message when there are no tasks */}
        {filteredTasks.length === 0 && (
          <Text style={styles.noTasksText}>
            No {showCompleted ? 'completed' : 'incomplete'} tasks
          </Text>
        )}
      </ScrollView>
    </View>
  );
};

// Styles for the components
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20,
    backgroundColor: '#FFF',
  },
  headerButton: {
    padding: 10,
    borderRadius: 5,
  },
  activeButton: {
    backgroundColor: '#55BCF6',
  },
  headerButtonText: {
    fontWeight: 'bold',
  },
  tasksWrapper: {
    padding: 20,
  },
  noTasksText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
    color: '#888',
  },
});

export default TaskListScreen;