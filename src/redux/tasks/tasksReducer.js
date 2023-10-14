const initialState = {
  taskDetails: {},
};

const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_TASK_DETAILS":
      const { taskId, name, description } = action.payload;

      return {
        ...state,
        taskDetails: {
          ...state.taskDetails,
          [taskId]: { name, description },
        },
      };

    default:
      return state;
  }
};

export default tasksReducer;
