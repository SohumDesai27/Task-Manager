import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, ScrollView, Modal, Platform } from 'react-native';
import Task from './components/Task';
import TaskListScreen from './screens/TaskListScreen';

const Stack = createStackNavigator();

function HomeScreen({ navigation, tasks, setTasks }) {
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const handleAddTask = () => {
    if (taskTitle.trim() !== '') {
      const newTask = {
        id: Date.now().toString(),
        title: taskTitle,
        description: taskDescription,
        completed: false
      };
      setTasks([...tasks, newTask]);
      setTaskTitle('');
      setTaskDescription('');
      setModalVisible(false);
      Keyboard.dismiss();
    }
  }

  const toggleTaskCompletion = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  }

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1
        }}
        keyboardShouldPersistTaps='handled'
      >
        <View style={styles.tasksWrapper}>
          <Text style={styles.sectionTitle}>Today's tasks</Text>
          <View style={styles.items}>
            {
              tasks.map((item) => (
                <Task 
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  description={item.description}
                  completed={item.completed}
                  onToggle={() => toggleTaskCompletion(item.id)}
                  onDelete={() => deleteTask(item.id)}
                />
              ))
            }
          </View>
          <TouchableOpacity style={styles.viewTasksButton} onPress={() => navigation.navigate('TaskList')}>
            <Text style={styles.viewTasksButtonText}>View All Tasks</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TouchableOpacity style={styles.addButton} onPress={() => setModalVisible(true)}>
          <Text style={styles.addButtonText}>Add New Task</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalView}>
          <TextInput 
            style={styles.input} 
            placeholder={'Task title'} 
            value={taskTitle} 
            onChangeText={text => setTaskTitle(text)} 
          />
          <TextInput 
            style={[styles.input, styles.descriptionInput]} 
            placeholder={'Task description'} 
            value={taskDescription} 
            onChangeText={text => setTaskDescription(text)}
            multiline
          />
          <TouchableOpacity style={styles.addTaskButton} onPress={handleAddTask}>
            <Text style={styles.addTaskButtonText}>Add Task</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cancelButton} onPress={() => setModalVisible(false)}>
            <Text style={styles.cancelButtonText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}

export default function App() {
  const [tasks, setTasks] = useState([]);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home">
          {props => <HomeScreen {...props} tasks={tasks} setTasks={setTasks} />}
        </Stack.Screen>
        <Stack.Screen name="TaskList">
          {props => <TaskListScreen {...props} tasks={tasks} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  input: {
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginBottom: 15,
  },
  descriptionInput: {
    height: 100,
    textAlignVertical: 'top',
  },
  addButton: {
    backgroundColor: '#55BCF6',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    width: '80%',
  },
  addButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  viewTasksButton: {
    backgroundColor: '#55BCF6',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  viewTasksButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  addTaskButton: {
    backgroundColor: '#55BCF6',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginBottom: 15,
  },
  addTaskButtonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  cancelButton: {
    backgroundColor: '#FF3B30',
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  cancelButtonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  }
});