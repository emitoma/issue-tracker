const translations = {
  todo: 'Todo',
  in_progress: 'In progress',
  done: 'Done',
};

const translateIssueStatus = (status) => {
  return translations[status];
};

export default translateIssueStatus;
