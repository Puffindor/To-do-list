import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todosnpm",
  initialState: [
    {
      id: 10,
      title: "Task Group 1",
      edit: false,
      task: [
        {
          id: Math.random(),
          text: "Task 1",
          isDone: false,
          edit: false,
          SubTasks: [],
          SubTasksComplited: [],
        },
      ],
      taskComplited: [
        {
          id: Math.random(),
          text: "Task 5",
          isDone: true,
          edit: false,
          SubTasks: [],
        },
      ],
    },

    {
      id: 20,
      title: "Task Group 2",
      edit: false,
      task: [
        {
          id: Math.random(),
          text: "Task 4",
          isDone: false,
          edit: false,
          SubTasks: [],
        },
      ],
      taskComplited: [],
    },
  ],

  reducers: {
    addGroup: (state, action) => {
      const NewGroup = {
        id: Math.random(),
        title: action.payload.title,
        edit: false,
        task: [],
        taskComplited: [],
      };

      if (action.payload.title) {
        state.push(NewGroup);
      }
    },

    deleteGroup: (state, action) => {
      return state.filter((el) => el.id !== action.payload.groupID);
    },

    editeGroup: (state, action) => {
      const index = state.findIndex((el) => el.id === action.payload.groupID);
      state[index].title = action.payload.title;
    },

    addTodo: (state, action) => {
      const NewTask = {
        id: Math.random(),
        text: action.payload.text,
        isDone: false,
        edit: false,
        SubTasks: [],
      };
      if (action.payload.text) {
        const index = state.findIndex(
          (todo) => todo.id === action.payload.selectedId
        );
        state[index].task.push(NewTask);
      }
    },

    compliteTodo: (state, action) => {
      const index1 = state.findIndex(
        (todo) => todo.id === action.payload.groupID
      );
      const index2 = state[index1].task.findIndex(
        (todo) => todo.id === action.payload.id.id
      );
      state[index1].task[index2].isDone = true;
      state[index1].task[index2].SubTasks = [];
      state[index1].taskComplited.push(state[index1].task[index2]);
      const NewState = state[index1].task.filter((el) => el.isDone === false);
      state[index1].task = NewState;
    },
    deleteTodo: (state, action) => {
      const index1 = state.findIndex(
        (todo) => todo.id === action.payload.groupID
      );
      if (action.payload.task.isDone === true) {
        const NewState = state[index1].taskComplited.filter(
          (el) => el.id !== action.payload.task.id
        );
        state[index1].taskComplited = NewState;
      } else {
        const NewState = state[index1].task.filter(
          (el) => el.id !== action.payload.task.id
        );
        state[index1].task = NewState;
      }
    },
    editeTodo: (state, action) => {
      const index1 = state.findIndex(
        (todo) => todo.id === action.payload.groupID
      );
      const index2 = state[index1].task.findIndex(
        (todo) => todo.id === action.payload.task.id
      );
      state[index1].task[index2].text = action.payload.NewText;
    },
    addSubtask: (state, action) => {
      const NewSubTask = {
        id: Math.random(),
        text: action.payload.text,
        complited: false,
      };

      const index1 = state.findIndex(
        (todo) => todo.id === action.payload.idGroup
      );
      const index2 = state[index1].task.findIndex(
        (todo) => todo.id === action.payload.id
      );
      state[index1].task[index2].SubTasks.push(NewSubTask);
    },
    compliteSubTask: (state, action) => {
      const index1 = state.findIndex(
        (todo) => todo.id === action.payload.groupID
      );
      const index2 = state[index1].task.findIndex(
        (todo) => todo.id === action.payload.taskID
      );
      const index3 = state[index1].task[index2].SubTasks.findIndex(
        (todo) => todo.id === action.payload.SubTask.id
      );
      state[index1].task[index2].SubTasks[index3].complited =
        !action.payload.SubTask.complited;
    },
    deleteSubTask: (state, action) => {
      const index1 = state.findIndex(
        (todo) => todo.id === action.payload.groupID
      );
      const index2 = state[index1].task.findIndex(
        (todo) => todo.id === action.payload.taskID
      );
      const NewState = state[index1].task[index2].SubTasks.filter(
        (el) => el.id !== action.payload.SubTaskID
      );
      state[index1].task[index2].SubTasks = NewState;
    },
  },
});

export const {
  addTodo,
  addSubtask,
  compliteSubTask,
  deleteSubTask,
  compliteTodo,
  deleteTodo,
  editeTodo,
  addGroup,
  deleteGroup,
  editeGroup,
} = todoSlice.actions;
export default todoSlice.reducer;
