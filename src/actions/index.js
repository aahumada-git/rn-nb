//Action to get all Repos
export function getEvents(response) {
  return {
    type: 'Get_Events',
    payload: response
  }
}
// Thunk function, it calls the getRepos action above after it receives the fetch response.
export function getEventsThunk() {
  return function (dispatch, getState) {
    fetch('https://api.github.com/repositories')
      .then(e => e.json())
      .then(function (response) {
        console.log(response);
        var arr = response.slice(0, 10);
        dispatch(getRepos(arr))
      })
      .catch((error) => {
        console.error(error, "ERRRRRORRR");
      });
  }
}
// Repo selected action
export function eventSelected(repo) {
  return {
    type: 'Event_Selected',
    payload: repo
  }
}