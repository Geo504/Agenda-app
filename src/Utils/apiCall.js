

export const createUser = (contact, updateFuntion) => {
  fetch(
    `https://assets.breatheco.de/apis/fake/contact/`,
    {
      method: "POST",
      body: JSON.stringify(contact),
      headers: { "Content-Type": "application/json" },
    }
  )
  .then((res) => {
    if (!(res.status >= 200 && res.status < 300)) {
      throw Error(`You have an error ${res.status} in create user!`);
    }
    return;
  })
  .then(() => { getUserData(updateFuntion) })
  .catch((err) => console.log(err));
  return;
};


export const getUserData = (updateFuntion) => {
  fetch(`https://assets.breatheco.de/apis/fake/contact/agenda/geovanny_valladares`)
    .then((res) => {
      if (!(res.status >= 200 && res.status < 300)) {
        throw Error(`You have an error ${res.status} in request user data!`);
      }
      return res.json();
    })
    .then((body) => {
      updateFuntion(body);
    })
    .catch((err) => console.log(err));
};


export const updateUserData = (url, contact) => {
  fetch(
    `https://assets.breatheco.de/apis/fake/contact/${contact.id}`,
    {
      method: "PUT",
      body: JSON.stringify(contact),
      headers: { "Content-Type": "application/json" },
    }
  )
  .then((res) => {
    if (res.status === 404){
      createUser(url);
    }
    if (!(res.status >= 200 && res.status < 300)) {
      throw Error(`You have an error ${res.status} in update user data!`);
    }
    return;
  })
  .catch((err) => console.log(err));
  return;
};

export const deleteUserData = (id) => {
  fetch(
    `https://assets.breatheco.de/apis/fake/contact/${id}`,
    { method: "DELETE" }
  )
  .then((res) => {
    if (!(res.status >= 200 && res.status < 300)) {
      throw Error(`You have an error ${res.status} in deleting!`);
    }
    return;
  })
  .catch((err) => console.log(err));
  return;
};