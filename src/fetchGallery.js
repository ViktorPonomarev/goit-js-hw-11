import axios from 'axios';
// const axios = require('axios').default;

// Логика
export default class NewsApiGalleryService {
    constructor() {
        this.searchQuery = '';
        this.page = 1;
    }

    async fetchGallery() {
    const BASE_URL = `https://pixabay.com/api/`;
    const API_KEY = `30076693-e53e479545b9ac001fe6f9d5f`;
        
          const response = await axios.get(
              `${BASE_URL}?key=${API_KEY}&q=${this.searchQuery}&
      image_type=photo&orientation=horizontal&safesearch=true&page=${this.page}&
      per_page=40`
          );
          return response.data;
    }

    incrementPage() {
        this.page += 1;
    }
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
    
    
    
