# movies-explorer-api

dotenv



# возвращает информацию о пользователе (email и имя)
GET /users/me

# обновляет информацию о пользователе (email и имя)
PATCH /users/me

# возвращает все сохранённые текущим пользователем фильмы
GET /movies

# создаёт фильм с переданными в теле
# country, director, duration, year, description, image, trailer, nameRU, nameEN и thumbnail, movieId 
POST /movies

# удаляет сохранённый фильм по id
DELETE /movies/_id 
