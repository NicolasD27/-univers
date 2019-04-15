export const FETCH_PROJECTS = "FETCH_PROJECTS"
export const FETCH_TASKS = "FETCH_TASKS"
export const FETCH_COMMENTS = "FETCH_COMMENTS"
export const CLEAR_COMMENTS = "CLEAR_COMMENTS"
export const SELECT_TASK = "SELECT_TASK"
export const COMMENT_POSTED = "COMMENT_POSTED"
export const COMMENT_DELETED = "COMMENT_DELETED"
export const TASK_POSTED = "TASK_POSTED"
export const TASK_DELETED = "TASK_DELETED"
export const CHECK_TASK = "CHECK_TASK"
export const PROJECT_POSTED = "PROJECT_POSTED"
export const PROJECT_DELETED = "PROJECT_DELETED"

export function fetchProjects() {
  const url = `/api/v1/projects`;
  const promise = fetch(url,  { credentials: "same-origin" })
  .then((r) => {
    return r.json()
  })

  return {
    type: FETCH_PROJECTS,
    payload: promise // Will be resolved by redux-promise
  };
}


export function fetchTasks(project) {
  const url = `/api/v1/projects/${project}/tasks`;
  const promise = fetch(url,  { credentials: "same-origin" })
  .then((r) => {
    return r.json()
  })

  return {
    type: FETCH_TASKS,
    payload: promise // Will be resolved by redux-promise
  };
}

export function fetchComments(task) {
  const url = `/api/v1/projects/anything/tasks/${task.id}/comments`;
  const promise = fetch(url,  { credentials: "same-origin" })
  .then((r) => {
    return r.json()
  })

  return {
    type: FETCH_COMMENTS,
    payload: promise // Will be resolved by redux-promise
  };
}

export function createComment(task, content) {
  const csrfToken = document.querySelector('meta[name="csrf-token"]').attributes.content.value;
  const url = `/api/v1/projects/anything/tasks/${task.id}/comments`;
  const body = { content }; // ES6 destructuring
  const promise = fetch(url, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'X-CSRF-Token': csrfToken,
      "Access-Control-Allow-Origin" : "*",
      "Access-Control-Allow-Credentials" : true 
    },
    credentials: 'same-origin',
    body: JSON.stringify(body)
  }).then(r => r.json());

  return {
    type: COMMENT_POSTED,
    payload: promise // Will be resolved by redux-promise
  };
}

export function createProject(name) {
  const csrfToken = document.querySelector('meta[name="csrf-token"]').attributes.content.value;
  const url = `/api/v1/projects`;
  const body = { name }; // ES6 destructuring
  const promise = fetch(url, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'X-CSRF-Token': csrfToken,
      "Access-Control-Allow-Origin" : "*",
      "Access-Control-Allow-Credentials" : true 
    },
    credentials: 'same-origin',
    body: JSON.stringify(body)
  }).then(r => r.json());

  return {
    type: PROJECT_POSTED,
    payload: promise // Will be resolved by redux-promise
  };
}

export function createTask(project, name, deadline, priority) {
  const csrfToken = document.querySelector('meta[name="csrf-token"]').attributes.content.value;
  const url = `/api/v1/projects/${project}/tasks`;
  const body = { name, deadline, priority }; // ES6 destructuring
  const promise = fetch(url, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'X-CSRF-Token': csrfToken,
      "Access-Control-Allow-Origin" : "*",
      "Access-Control-Allow-Credentials" : true 
    },
    credentials: 'same-origin',
    body: JSON.stringify(body)
  }).then(r => r.json());

  return {
    type: TASK_POSTED,
    payload: promise // Will be resolved by redux-promise
  };
}

export function deleteComment(comment) {
  const csrfToken = document.querySelector('meta[name="csrf-token"]').attributes.content.value;
  const url = `/api/v1/projects/anything/tasks/${comment.task_id}/comments/${comment.id}`;
  const promise = fetch(url, {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'X-CSRF-Token': csrfToken,
      "Access-Control-Allow-Origin" : "*",
      "Access-Control-Allow-Credentials" : true 
    },

    credentials: 'same-origin',
    body: JSON.stringify({id: comment.id })
  })
  .then(r => r.json())

  return {
    type: COMMENT_DELETED,
    payload: promise // Will be resolved by redux-promise
  };
}

export function deleteTask(task) {
  const csrfToken = document.querySelector('meta[name="csrf-token"]').attributes.content.value;
  const url = `/api/v1/projects/anything/tasks/${task.id}`;
  const promise = fetch(url, {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'X-CSRF-Token': csrfToken,
      "Access-Control-Allow-Origin" : "*",
      "Access-Control-Allow-Credentials" : true 
    },

    credentials: 'same-origin',
    body: JSON.stringify({id: task.id })
  })
  .then(r => r.json())

  return {
    type: TASK_DELETED,
    payload: promise // Will be resolved by redux-promise
  };
}


export function deleteProject(project) {
  const csrfToken = document.querySelector('meta[name="csrf-token"]').attributes.content.value;
  const url = `/api/v1/projects/${project.id}`;
  const promise = fetch(url, {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'X-CSRF-Token': csrfToken,
      "Access-Control-Allow-Origin" : "*",
      "Access-Control-Allow-Credentials" : true 
    },

    credentials: 'same-origin',
    body: JSON.stringify({id: project.id })
  })
  .then(r => r.json())

  return {
    type: PROJECT_DELETED,
    payload: promise // Will be resolved by redux-promise
  };
}

export function checkTask(task) {
	const csrfToken = document.querySelector('meta[name="csrf-token"]').attributes.content.value;
  const url = `/api/v1/projects/anything/tasks/${task.id}`;
  const body = { name: task.name, priority: task.priority, deadline: task.deadline, done: task.done ? false : true }
  const promise = fetch(url, {
    method: 'PUT',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'X-CSRF-Token': csrfToken,
      "Access-Control-Allow-Origin" : "*",
      "Access-Control-Allow-Credentials" : true 
    },

    credentials: 'same-origin',
    body: JSON.stringify({body})
  })
  .then(r => r.json())

  return {
    type: CHECK_TASK,
    payload: promise // Will be resolved by redux-promise
  };
} 


export function selectTask(task) {
	return {
		type: SELECT_TASK,
		payload: task
	}
}

export function clearComments() {
	return {
		type: CLEAR_COMMENTS,
		payload: []
	}
}