const express = require('express');
const cors = require('cors');
const app = express();

// Your JSON data
const jsonData = {
    "menu": [
        {
            "id": 1,
            "name": "Home",
            "slug": "home",
            "submenus": []
        },
        {
            "id": 2,
            "name": "News",
            "slug": "news",
            "submenus": [
                {
                    "id": 3,
                    "name": "Politics",
                    "slug": "politics"
                },
                {
                    "id": 4,
                    "name": "Business",
                    "slug": "business"
                }
            ]
        },
        {
            "id": 5,
            "name": "Sports",
            "slug": "sports",
            "submenus": []
        }
    ],
    "newsCategories": [
        {
            "id": 1,
            "name": "Politics",
            "slug": "politics",
            "color": "#FF5733"
        },
        {
            "id": 2,
            "name": "Business",
            "slug": "business",
            "color": "#337CFF"
        }
    ],
    "allNews": [
        {
            "id": 1,
            "title": "allNews News Title 1",
            "shortDescription": "Short description for the popular news article 1",
            "loginDescription": "Detailed description for the popular news article 1",
            "image": "popular_image_1.jpg",
            "timeToRead": "5 min",
            "category": "Politics",
            "categorySlug": "politics",
            "author": "John Doe"
        },
        {
            "id": 2,
            "title": "allNews News Title 2",
            "shortDescription": "Short description for the popular news article 2",
            "loginDescription": "Detailed description for the popular news article 2",
            "image": "popular_image_2.jpg",
            "timeToRead": "7 min",
            "category": "Business",
            "categorySlug": "business",
            "author": "Jane Smith"
        },
        {
            "id": 3,
            "title": "allNews News Title 3",
            "shortDescription": "Short description for the popular news article 3",
            "loginDescription": "Detailed description for the popular news article 3",
            "image": "popular_image_2.jpg",
            "timeToRead": "7 min",
            "category": "Business",
            "categorySlug": "business",
            "author": "Jane Smith"
        },
        {
            "id": 4,
            "title": "allNews News Title 4",
            "shortDescription": "Short description for the popular news article 4",
            "loginDescription": "Detailed description for the popular news article 4",
            "image": "popular_image_2.jpg",
            "timeToRead": "7 min",
            "category": "Business",
            "categorySlug": "business",
            "author": "Jane Smith"
        }
    ],
    "featuresNews": [
        {
            "id": 1,
            "category": "বাণিজ্য",
            "title": "আয়কর রিটার্ন জমা নভেম্বরের মধ্যে",
            "author": "admin",
            "image": " news/3.jpg",
            "catbgColor": "red"
        },
        {
            "id": 1,
            "title": "featuresNews News Title 1",
            "shortDescription": "Short description for the popular news article 1",
            "loginDescription": "Detailed description for the popular news article 1",
            "image": "popular_image_1.jpg",
            "timeToRead": "5 min",
            "category": "Politics",
            "categorySlug": "politics",
            "author": "John Doe"
        },
        {
            "id": 2,
            "title": "featuresNews News Title 2",
            "shortDescription": "Short description for the popular news article 2",
            "loginDescription": "Detailed description for the popular news article 2",
            "image": "popular_image_2.jpg",
            "timeToRead": "7 min",
            "category": "Business",
            "categorySlug": "business",
            "author": "Jane Smith"
        },
        {
            "id": 3,
            "title": "featuresNews News Title 3",
            "shortDescription": "Short description for the popular news article 3",
            "loginDescription": "Detailed description for the popular news article 3",
            "image": "popular_image_2.jpg",
            "timeToRead": "7 min",
            "category": "Business",
            "categorySlug": "business",
            "author": "Jane Smith"
        },
        {
            "id": 4,
            "title": "featuresNews News Title 4",
            "shortDescription": "Short description for the popular news article 4",
            "loginDescription": "Detailed description for the popular news article 4",
            "image": "popular_image_2.jpg",
            "timeToRead": "7 min",
            "category": "Business",
            "categorySlug": "business",
            "author": "Jane Smith"
        },
        {
            "id": 5,
            "title": "featuresNews News Title 5",
            "shortDescription": "Short description for the popular news article 5",
            "loginDescription": "Detailed description for the popular news article 5",
            "image": "popular_image_2.jpg",
            "timeToRead": "7 min",
            "category": "Business",
            "categorySlug": "business",
            "author": "Jane Smith"
        },
        {
            "id": 6,
            "title": "featuresNews News Title 6",
            "shortDescription": "Short description for the popular news article 6",
            "loginDescription": "Detailed description for the popular news article 6",
            "image": "popular_image_2.jpg",
            "timeToRead": "7 min",
            "category": "Business",
            "categorySlug": "business",
            "author": "Jane Smith"
        }
    ],
    "popularNews": [
        {
            "id": 1,
            "title": "Popular News Title 1",
            "shortDescription": "Short description for the popular news article 1",
            "loginDescription": "Detailed description for the popular news article 1",
            "image": "popular_image_1.jpg",
            "timeToRead": "5 min",
            "category": "Politics",
            "categorySlug": "politics",
            "author": "John Doe"
        },
        {
            "id": 2,
            "title": "Popular News Title 2",
            "shortDescription": "Short description for the popular news article 2",
            "loginDescription": "Detailed description for the popular news article 2",
            "image": "popular_image_2.jpg",
            "timeToRead": "7 min",
            "category": "Business",
            "categorySlug": "business",
            "author": "Jane Smith"
        },
        {
            "id": 3,
            "title": "Popular News Title 3",
            "shortDescription": "Short description for the popular news article 3",
            "loginDescription": "Detailed description for the popular news article 3",
            "image": "popular_image_2.jpg",
            "timeToRead": "7 min",
            "category": "Business",
            "categorySlug": "business",
            "author": "Jane Smith"
        },
        {
            "id": 4,
            "title": "Popular News Title 4",
            "shortDescription": "Short description for the popular news article 4",
            "loginDescription": "Detailed description for the popular news article 4",
            "image": "popular_image_2.jpg",
            "timeToRead": "7 min",
            "category": "Business",
            "categorySlug": "business",
            "author": "Jane Smith"
        }
    ],
    "recentNews": [
        {
            "id": 1,
            "title": "RecentNews News Title 1",
            "shortDescription": "Short description for the popular news article 1",
            "loginDescription": "Detailed description for the popular news article 1",
            "image": "popular_image_1.jpg",
            "timeToRead": "5 min",
            "category": "Politics",
            "categorySlug": "politics",
            "author": "John Doe"
        },
        {
            "id": 2,
            "title": "RecentNews News Title 2",
            "shortDescription": "Short description for the popular news article 2",
            "loginDescription": "Detailed description for the popular news article 2",
            "image": "popular_image_2.jpg",
            "timeToRead": "7 min",
            "category": "Business",
            "categorySlug": "business",
            "author": "Jane Smith"
        },
        {
            "id": 3,
            "title": "RecentNews News Title 3",
            "shortDescription": "Short description for the popular news article 3",
            "loginDescription": "Detailed description for the popular news article 3",
            "image": "popular_image_2.jpg",
            "timeToRead": "7 min",
            "category": "Business",
            "categorySlug": "business",
            "author": "Jane Smith"
        },
        {
            "id": 4,
            "title": "RecentNews News Title 4",
            "shortDescription": "Short description for the popular news article 4",
            "loginDescription": "Detailed description for the popular news article 4",
            "image": "popular_image_2.jpg",
            "timeToRead": "7 min",
            "category": "Business",
            "categorySlug": "business",
            "author": "Jane Smith"
        }
    ],
    "mostViewedNews": [
        {
            "id": 1,
            "title": "mostViewedNews News Title 1",
            "shortDescription": "Short description for the popular news article 1",
            "loginDescription": "Detailed description for the popular news article 1",
            "image": "popular_image_1.jpg",
            "timeToRead": "5 min",
            "category": "Politics",
            "categorySlug": "politics",
            "author": "John Doe"
        },
        {
            "id": 2,
            "title": "mostViewedNews News Title 2",
            "shortDescription": "Short description for the popular news article 2",
            "loginDescription": "Detailed description for the popular news article 2",
            "image": "popular_image_2.jpg",
            "timeToRead": "7 min",
            "category": "Business",
            "categorySlug": "business",
            "author": "Jane Smith"
        },
        {
            "id": 3,
            "title": "mostViewedNews News Title 3",
            "shortDescription": "Short description for the popular news article 3",
            "loginDescription": "Detailed description for the popular news article 3",
            "image": "popular_image_2.jpg",
            "timeToRead": "7 min",
            "category": "Business",
            "categorySlug": "business",
            "author": "Jane Smith"
        },
        {
            "id": 4,
            "title": "mostViewedNews News Title 4",
            "shortDescription": "Short description for the popular news article 4",
            "loginDescription": "Detailed description for the popular news article 4",
            "image": "popular_image_2.jpg",
            "timeToRead": "7 min",
            "category": "Business",
            "categorySlug": "business",
            "author": "Jane Smith"
        }
    ],
    "tagNews": {
        "technology": [
            {
                "id": 1,
                "title": "mostViewedNews News Title 1",
                "shortDescription": "Short description for the popular news article 1",
                "loginDescription": "Detailed description for the popular news article 1",
                "image": "popular_image_1.jpg",
                "timeToRead": "5 min",
                "category": "Politics",
                "categorySlug": "politics",
                "author": "John Doe"
            }
        ],
        "sports": [
            {
                "id": 1,
                "title": "mostViewedNews News Title 1",
                "shortDescription": "Short description for the popular news article 1",
                "loginDescription": "Detailed description for the popular news article 1",
                "image": "popular_image_1.jpg",
                "timeToRead": "5 min",
                "category": "Politics",
                "categorySlug": "politics",
                "author": "John Doe"
            }
        ]
    }
};

app.use(cors());

// Route to get all data
app.get('/api/data', (req, res) => {
    res.json(jsonData);
});


// Route to get allNews
app.get('/api/allNews', (req, res) => {
    res.json(jsonData.allNews);
});

// Route to get a single item by ID from allNews
app.get('/api/allNews/:id', (req, res) => {
    const itemId = parseInt(req.params.id);
    const item = jsonData.allNews.find((news) => news.id === itemId);

    if (!item) {
        res.status(404).json({ error: 'Item not found' });
    } else {
        res.json(item);
    }
});

// Route to get menu
app.get('/api/menu', (req, res) => {
    res.json(jsonData.menu);
});

// Route to get a single item by ID from menu
app.get('/api/menu/:id', (req, res) => {
    const itemId = parseInt(req.params.id);
    const item = jsonData.menu.find((news) => news.id === itemId);

    if (!item) {
        res.status(404).json({ error: 'Item not found' });
    } else {
        res.json(item);
    }
});

// Route to get newsCategories
app.get('/api/newsCategories', (req, res) => {
    res.json(jsonData.newsCategories);
});

// Route to get a single item by ID from newsCategories
app.get('/api/newsCategories/:id', (req, res) => {
    const itemId = parseInt(req.params.id);
    const item = jsonData.newsCategories.find((news) => news.id === itemId);

    if (!item) {
        res.status(404).json({ error: 'Item not found' });
    } else {
        res.json(item);
    }
});

// Route to get featuresNews
app.get('/api/featuresNews', (req, res) => {
    res.json(jsonData.featuresNews);
});

// Route to get a single item by ID from featuresNews
app.get('/api/featuresNews/:id', (req, res) => {
    const itemId = parseInt(req.params.id);
    const item = jsonData.featuresNews.find((news) => news.id === itemId);

    if (!item) {
        res.status(404).json({ error: 'Item not found' });
    } else {
        res.json(item);
    }
});


// Route to get popularNews
app.get('/api/popularNews', (req, res) => {
    res.json(jsonData.popularNews);
});

// Route to get a single item by ID from popularNews
app.get('/api/popularNews/:id', (req, res) => {
    const itemId = parseInt(req.params.id);
    const item = jsonData.popularNews.find((news) => news.id === itemId);

    if (!item) {
        res.status(404).json({ error: 'Item not found' });
    } else {
        res.json(item);
    }
});

// Route to get recentNews
app.get('/api/recentNews', (req, res) => {
    res.json(jsonData.recentNews);
});

// Route to get a single item by ID from recentNews
app.get('/api/recentNews/:id', (req, res) => {
    const itemId = parseInt(req.params.id);
    const item = jsonData.recentNews.find((news) => news.id === itemId);

    if (!item) {
        res.status(404).json({ error: 'Item not found' });
    } else {
        res.json(item);
    }
});


// Route to get mostViewedNews
app.get('/api/mostViewedNews', (req, res) => {
    res.json(jsonData.mostViewedNews);
});

// Route to get a single item by ID from mostViewedNews
app.get('/api/mostViewedNews/:id', (req, res) => {
    const itemId = parseInt(req.params.id);
    const item = jsonData.mostViewedNews.find((news) => news.id === itemId);

    if (!item) {
        res.status(404).json({ error: 'Item not found' });
    } else {
        res.json(item);
    }
});

// Route to get tagNews
app.get('/api/tagNews', (req, res) => {
    res.json(jsonData.tagNews);
});

// Route to get a single item by ID from tagNews
app.get('/api/tagNews/:id', (req, res) => {
    const itemId = parseInt(req.params.id);
    const item = jsonData.tagNews.find((news) => news.id === itemId);

    if (!item) {
        res.status(404).json({ error: 'Item not found' });
    } else {
        res.json(item);
    }
});


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});