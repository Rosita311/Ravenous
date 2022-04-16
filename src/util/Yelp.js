const apiKey = 'rCarDjiwYSLmO4Emsar1M-b5A8dGUeC1AWr0LzKb0q6-tm8-0Mv5jFEaITt_Tz4Cq8FxR1sKlZpQpl5L2TBtf1syZaGRZigza0N-k1fVavAKtQ7gUt0PsM0Lsv1XYnYx';

const Yelp = {
  search(term, location, sortBy) {
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
      headers: {
        Authorization: `Bearer ${apiKey}`
      }
    }).then(response => {
      return response.json();
    }).then(jsonResponse => {
      if (jsonResponse.businesses) {
        return jsonResponse.businesses.map(business => ({
          id: business.id,
          imageSrc: business.image_url,
          name: business.name,
          address: business.location.address1,
          city: business.location.city,
          state: business.location.state,
          zipCode: business.location.zip_code,
          category: business.categories[0].title,
          rating: business.rating,
          reviewCount: business.review_count
        }));
      }
    });
  }
};

export default Yelp;
