import axios from 'axios';
// const axios = require('axios').default;

// Логика работы с API
// class NewsApiGalleryService отвечает за запросы на API
export default class NewsApiGalleryService {
    constructor() {
        this.searchQuery = '';
        this.page = 1;
    }
// Ключи, базовый URL
    async fetchGallery() {
        console.log(this);
    const BASE_URL = `https://pixabay.com/api/`;
    const API_KEY = `30076693-e53e479545b9ac001fe6f9d5f`;
        // HTTP запрсы
          const response = await axios.get(
              `${BASE_URL}?key=${API_KEY}&q=${this.searchQuery}&
      image_type=photo&orientation=horizontal&safesearch=true&page=${this.page}&
      per_page=40`
          );
          return response.data;
    }

    // Если запрос успешный добавляет на +1 
    incrementPage() {
        this.page += 1;
    }
    // И збасывает на один запрос (при новом запросе)
    resetPage() {
        this.page = 1;
    }
    get query() {
        return this.searchQuery;
    }
    set query(newQuery) {
        this.searchQuery = newQuery
    }

}
    
    
    
