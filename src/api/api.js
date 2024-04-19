import axios from 'axios';

const instance = axios.create({
  baseURL: "http://localhost:8010/proxy/",
  withCredentials: true,
});


const api = {
  // Получение информации об авторизации
  getAuth: () => {
    const csrftoken = document.cookie.split('; ').find(row => row.startsWith('csrftoken=')).split('=')[1];
    return instance.get(`/user_api/user`, {}, { headers: { 'X-CSRFToken': csrftoken } })
      .then((response) => {
        return response.data
      })
      .catch((error) => {
        return error.message;
      });
  },
  // Аутонтификация пользователя
  login: (username, password) => {
    const csrftoken = document.cookie.split('; ').find(row => row.startsWith('csrftoken=')).split('=')[1];
    return instance.post(`/user_api/login`, { username, password }, { headers: { 'X-CSRFToken': csrftoken } })
      .then((response) => {
        return response.data
      })
      .catch((error) => {
        return error.message;
      });
  },
  // Выход пользователя из системы
  logout: () => {
    return instance.get(`/user_api/logout`)
      .then((response) => response.data)
      .catch((error) => {
        return error.message;
      });
  },
  //загрузка рекламных баннеров
  getBanners: () => {
    return instance.get(`/store_app/banners/`)
      .then((response) => response.data)
      .catch((error) => {
        return error.message;
      });
  },
  //загрузка всех книг
  getBooks: () => {
    return instance.get(`/store_app/books/`)
      .then((response) => {
        return response.data
      })
      .catch((error) => {
        return error.message;
      });
  },
  //загрузка выбранной книги
  getBook: (id) => {
    return instance.get(`/store_app/books/${id}/`)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        return error.message;
      });
  },
  //загрузка постов выбранной книги
  getCommentsBook: (idBook) => {
    return instance.get(`/store_app/books/${idBook}/comments/`)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        return error.message;
      })
  },
  //добавление поста к выбранной книге
  setCommentBookAdd: (id, text, stars) => {
    const csrftoken = document.cookie.split('; ').find(row => row.startsWith('csrftoken=')).split('=')[1];
    return instance.post(`/store_app/books/${id}/comments/`, { text: text, stars: stars }, {
      headers: { 'X-CSRFToken': csrftoken }
    })
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        return error.message;
      });
  },
  //редактирование поста выбранной книги
  setCommentBookEdit: (idComment, text, stars) => {
    const csrftoken = document.cookie.split('; ').find(row => row.startsWith('csrftoken=')).split('=')[1];
    return instance.put(`/store_app/comments/${idComment}/`, { text: text, stars: stars }, {
      headers: { 'X-CSRFToken': csrftoken }
    })
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        return error.message;
      });
  },
  //удаление своего поста
  setCommentBookDelete: (idComment) => {
    const csrftoken = document.cookie.split('; ').find(row => row.startsWith('csrftoken=')).split('=')[1];
    return instance.delete(`/store_app/comments/${idComment}/`, { headers: { 'X-CSRFToken': csrftoken } })
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        return error.message;
      });
  },
  //избранные книги ползователя
  getFavoriteBook: () => {
    const csrftoken = document.cookie.split('; ').find(row => row.startsWith('csrftoken=')).split('=')[1];
    return instance.get(`/store_app/favorite/`, {}, { headers: { 'X-CSRFToken': csrftoken } })
      .then((response) => {
        return response.data;
      })
      .catch(() => {
        return null;
      })
  },
  //добавление книги в зибранное
  setBookFavoriteAdd: (idBook) => {
    const csrftoken = document.cookie.split('; ').find(row => row.startsWith('csrftoken=')).split('=')[1];
    return instance.post(`/store_app/books/${idBook}/favorite/`, {}, { headers: { 'X-CSRFToken': csrftoken } })
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        return error.message;
      });
  },
  //удаление книги из избранных
  setBookFavoriteDelete: (idBook) => {
    const csrftoken = document.cookie.split('; ').find(row => row.startsWith('csrftoken=')).split('=')[1];
    return instance.delete(`/store_app/books/${idBook}/favorite/`, { headers: { 'X-CSRFToken': csrftoken } })
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        return error.message;
      });
  },
  //корзина пользователя
  getBasket: () => {
    const csrftoken = document.cookie.split('; ').find(row => row.startsWith('csrftoken=')).split('=')[1];
    return instance.get(`/store_app/basket/`, {}, { headers: { 'X-CSRFToken': csrftoken } })
      .then((response) => {
        return response.data;
      })
      .catch(() => {
        return null;
      })
  },
  //добавление в корзину
  setBasketBookAdd: (idBook) => {
    const csrftoken = document.cookie.split('; ').find(row => row.startsWith('csrftoken=')).split('=')[1];
    return instance.post(`/store_app/books/${idBook}/add_to_basket/`, {}, { headers: { 'X-CSRFToken': csrftoken } })
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        return error.message;
      });
  },
  //удаление книги из корзины
  setBasketBookDelete: (idBook) => {
    const csrftoken = document.cookie.split('; ').find(row => row.startsWith('csrftoken=')).split('=')[1];
    return instance.delete(`/store_app/basket/${idBook}/`, { headers: { 'X-CSRFToken': csrftoken } })
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        return error.message;
      })
  },
  //получение списка жанров
  getGenres: () => {
    const csrftoken = document.cookie.split('; ').find(row => row.startsWith('csrftoken=')).split('=')[1];
    return instance.get(`/store_app/genres/`, {}, { headers: { 'X-CSRFToken': csrftoken } })
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        return error.message;
      })
  },
};
export default api;