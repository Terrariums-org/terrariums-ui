export const getStatusActionRedux = (reduxAction: string) => {
  const statusActionIndex = reduxAction.lastIndexOf("/");
  if (statusActionIndex === -1) {
    return reduxAction;
  }
  const stateAction = reduxAction.substring(statusActionIndex + 1);
  return stateAction.trim().toLowerCase();
};
