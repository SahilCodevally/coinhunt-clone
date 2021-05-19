// Update new state to old state
export const updateObject = (oldState, updatedState) => {
  return {
    ...oldState,
    ...updatedState,
  };
};
