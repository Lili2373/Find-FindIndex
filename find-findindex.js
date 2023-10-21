function findUserByUsername(arr, username) {
  return arr.find(obj => obj.username === username);
}


function removeUser(arr, username) {
  const index = arr.findIndex(obj => obj.username === username);

  if (index !== -1) {

    const removedUser = arr.splice(index, 1)[0];
    return removedUser;
  } else {

    return undefined;
  }
}