const token = "asb4c4boc86gasb4c4boc86g37w3cc3bo3b83k4g37k3bk3cg3c03ck4k";
const API_URL_USER = "https://wedev-api.sky.pro/api/user";
const API_URL = "https://wedev-api.sky.pro/api/kanban";

export async function login({ login, password }) {
  const responce = await fetch(API_URL_USER + "/login", {
    method: "POST",
    body: JSON.stringify({
      login,
      password,
    }),
  });
  const data = await responce.json();
  return data;
}

export async function register({ name, login, password }) {
  const responce = await fetch(API_URL_USER, {
    method: "POST",
    body: JSON.stringify({
      name,
      login,
      password,
    }),
  });
  const data = await responce.json();
  return data;
}

export async function getTasks({ token }) {
  const responce = await fetch(API_URL, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await responce.json();
  return data;
}

export async function postNewTask({
  token,
  description,
  title,
  topic,
  status,
  date,
})
 {
  if (!Response.ok) {

    throw new Error("тут сообщение об ошибке")
  
  }
  const responce = await fetch(API_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      description,
      title,
      topic,
      status,
      date,
    }),
  });

  const data = await responce.json();
  return data;
}
