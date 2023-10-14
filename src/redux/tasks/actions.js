export const updateTaskDetails = (taskId, name, description) => {
  return {
    type: "UPDATE_TASK_DETAILS",
    payload: {
      taskId,
      name,
      description,
    },
  };
};
