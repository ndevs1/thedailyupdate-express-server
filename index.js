const express = require('express');
const cors = require('cors');
const app = express();

// Your JSON data
const jsonData = {
    "menu": [
        {
            "id": 1,
            "name": "সর্বশেষ",
            "slug": "latest",
            "color": "#300449",
            "subMenuItem": []
        },
        {
            "id": 2,
            "name": "রাজনীতি",
            "slug": "politics",
            "color": "#E66A1F",
            "subMenuItem": [
                {
                    "id": 3,
                    "name": "দেশ",
                    "slug": "desh"
                },
                {
                    "id": 4,
                    "name": "বিদেশ",
                    "slug": "abroad"
                }
            ]
        },
        {
            "id": 3,
            "name": "বাংলাদেশ",
            "slug": "bangladesh",
            "color": "#FDD02B",
            "subMenuItem": [
                {
                    "id": 5,
                    "name": "রাজধানী",
                    "slug": "capital"
                },
                {
                    "id": 6,
                    "name": "জেলা",
                    "slug": "district"
                }
            ]
        },
        {
            "id": 4,
            "name": "অপরাধ",
            "slug": "crime",
            "color": "#E42A69",
            "subMenuItem": [
                {
                    "id": 7,
                    "name": "Menu 1",
                    "slug": "menu-1"
                },
                {
                    "id": 8,
                    "name": "Menu 2",
                    "slug": "menu-2"
                }
            ]
        },
        {
            "id": 5,
            "name": "বিশ্ব",
            "slug": "world",
            "color": "#27272F",
            "subMenuItem": [
                {
                    "id": 9,
                    "name": "Menu 1",
                    "slug": "menu-1"
                },
                {
                    "id": 10,
                    "name": "Menu 2",
                    "slug": "menu-2"
                }
            ]
        },
        {
            "id": 6,
            "name": "বাণিজ্য",
            "slug": "commerce",
            "color": "#3CB64F",
            "subMenuItem": [
                {
                    "id": 11,
                    "name": "Menu 1",
                    "slug": "menu-1"
                },
                {
                    "id": 12,
                    "name": "Menu 2",
                    "slug": "menu-2"
                }
            ]
        },
        {
            "id": 7,
            "name": "খেলা",
            "slug": "sports",
            "color": "#FDC132",
            "subMenuItem": [
                {
                    "id": 13,
                    "name": "Menu 1",
                    "slug": "menu-1"
                },
                {
                    "id": 14,
                    "name": "Menu 2",
                    "slug": "menu-2"
                }
            ]
        },
        {
            "id": 8,
            "name": "বিনোদন",
            "slug": "entertainment",
            "color": "#EE7677",
            "subMenuItem": [
                {
                    "id": 15,
                    "name": "Menu 1",
                    "slug": "menu-1"
                },
                {
                    "id": 16,
                    "name": "Menu 2",
                    "slug": "menu-2"
                }
            ]
        }
    ],
    "newsCategories": [
        {
            "id": 1,
            "name": "সর্বশেষ",
            "slug": "latest",
            "color": "#300449",
            "subMenuItem": []
        },
        {
            "id": 2,
            "name": "রাজনীতি",
            "slug": "politics",
            "color": "#E66A1F",
            "subMenuItem": [
                {
                    "id": 3,
                    "name": "দেশ",
                    "slug": "desh"
                },
                {
                    "id": 4,
                    "name": "বিদেশ",
                    "slug": "abroad"
                }
            ]
        },
        {
            "id": 3,
            "name": "বাংলাদেশ",
            "slug": "bangladesh",
            "color": "#FDD02B",
            "subMenuItem": [
                {
                    "id": 5,
                    "name": "রাজধানী",
                    "slug": "capital"
                },
                {
                    "id": 6,
                    "name": "জেলা",
                    "slug": "district"
                }
            ]
        },
        {
            "id": 4,
            "name": "অপরাধ",
            "slug": "crime",
            "color": "#E42A69",
            "subMenuItem": [
                {
                    "id": 7,
                    "name": "Menu 1",
                    "slug": "menu-1"
                },
                {
                    "id": 8,
                    "name": "Menu 2",
                    "slug": "menu-2"
                }
            ]
        },
        {
            "id": 5,
            "name": "বিশ্ব",
            "slug": "world",
            "color": "#27272F",
            "subMenuItem": [
                {
                    "id": 9,
                    "name": "Menu 1",
                    "slug": "menu-1"
                },
                {
                    "id": 10,
                    "name": "Menu 2",
                    "slug": "menu-2"
                }
            ]
        },
        {
            "id": 6,
            "name": "বাণিজ্য",
            "slug": "commerce",
            "color": "#3CB64F",
            "subMenuItem": [
                {
                    "id": 11,
                    "name": "Menu 1",
                    "slug": "menu-1"
                },
                {
                    "id": 12,
                    "name": "Menu 2",
                    "slug": "menu-2"
                }
            ]
        },
        {
            "id": 7,
            "name": "খেলা",
            "slug": "sports",
            "color": "#FDC132",
            "subMenuItem": [
                {
                    "id": 13,
                    "name": "Menu 1",
                    "slug": "menu-1"
                },
                {
                    "id": 14,
                    "name": "Menu 2",
                    "slug": "menu-2"
                }
            ]
        },
        {
            "id": 8,
            "name": "বিনোদন",
            "slug": "entertainment",
            "color": "#EE7677",
            "subMenuItem": [
                {
                    "id": 15,
                    "name": "Menu 1",
                    "slug": "menu-1"
                },
                {
                    "id": 16,
                    "name": "Menu 2",
                    "slug": "menu-2"
                }
            ]
        }
    ],
    "allNews": [
        {
            "id": 1,
            "title": "মির্জা ফখরুলকে গ্রেপ্তার দেখানো হবে: ডিএমপির মুখপাত্র",
            "shortDescription": "বিএনপির মহাসচিব মির্জা ফখরুল ইসলাম আলমগীরকে আটক করে ঢাকা মহানগর পুলিশের (ডিএমপি) গোয়েন্দা বিভাগের (ডিবি) মিন্টো রোডের কার্যালয়ে নেওয়া হয়েছে। তাঁকে গ্রেপ্তার দেখানো হবে বলে প্রথম আলোকে জানিয়েছেন ডিএমপির গণমাধ্যম ও জনসংযোগ বিভাগের উপকমিশনার মো. ফারুক হোসেন।",
            "longDescription": "বিএনপির মহাসচিব মির্জা ফখরুল ইসলাম আলমগীরকে আটক করে ঢাকা মহানগর পুলিশের (ডিএমপি) গোয়েন্দা বিভাগের (ডিবি) মিন্টো রোডের কার্যালয়ে নেওয়া হয়েছে। তাঁকে গ্রেপ্তার দেখানো হবে বলে প্রথম আলোকে জানিয়েছেন ডিএমপির গণমাধ্যম ও জনসংযোগ বিভাগের উপকমিশনার মো. ফারুক হোসেন। বিএনপির চেয়ারপারসনের প্রেস উইংয়ের সদস্য শায়রুল কবির খান প্রথম আলোকে বলেন, আজ রোববার সকালে রাজধানীর গুলশান-২-এর বাসা থেকে মির্জা ফখরুলকে আটক করে ডিবি। পরে ডিবির গুলশান বিভাগের অতিরিক্ত উপকমিশনার হাফিজ আল আসাদ প্রথম আলোকে বলেন, মির্জা ফখরুলকে তাঁরা নিয়ে এসেছেন। ডিএমপির গণমাধ্যম ও জনসংযোগ বিভাগের উপকমিশনার মো. ফারুক হোসেন প্রথম আলোকে বলেন, ডিবির গুলশান বিভাগ মির্জা ফখরুলকে আটক করেছে। তাঁকে ডিবির মিন্টো রোডের কার্যালয়ে নেওয়া হয়েছে। তাঁর বিরুদ্ধে পুরোনো মামলা আছে। গতকাল শনিবারের সহিংসতার ঘটনায়ও মামলা হবে। তাঁকে গ্রেপ্তার দেখানো হবে। গতকাল রাজধানীর নয়াপল্টনে বিএনপির মহাসমাবেশ ছিল। মহাসমাবেশ শুরুর আগেই কাকরাইলে দুপুর থেকে বিএনপির নেতা- কর্মীদের সঙ্গে পুলিশের সংঘর্ষ হয়। এই সংঘর্ষ পরে বিজয়নগর পানির ট্যাংক ও শান্তিনগর এলাকায় ছড়িয়ে পড়ে। একপর্যায়ে বেলা তিনটার দিকে বিএনপির মহাসমাবেশ পণ্ড হয়ে যায়। বিএনপির মহাসমাবেশকে কেন্দ্র করে রক্তক্ষয়ী সংঘর্ষে পুলিশের এক সদস্য ও যুবদলের ওয়ার্ড পর্যায়ের এক নেতা নিহত হন। সংঘর্ষে আহত হয়েছেন পুলিশের ৪১ ও আনসারের ২৫ জন সদস্য। আহত হয়েছেন কমপক্ষে ২০ জন সাংবাদিক। সংঘর্ষে হাজারের বেশি নেতা - কর্মী আহত হয়েছেন বলে দাবি বিএনপির।",
            "image": "https://images.unsplash.com/photo-1698434156086-918aa526b531",
            "timeToRead": "5 min",
            "category": "Politics",
            "categorySlug": "politics",
            "author": "admin"
        },
        {
            "id": 2,
            "title": "নয়াপল্টনে যে বার্তা দিয়ে মঞ্চ থেকে নেমে যান ফখরুল",
            "shortDescription": "নয়াপল্টনে যে বার্তা দিয়ে মঞ্চ থেকে নেমে যান ফখরুল আটক করে ঢাকা মহানগর পুলিশের (ডিএমপি) গোয়েন্দা বিভাগের (ডিবি) মিন্টো রোডের কার্যালয়ে নেওয়া হয়েছে। তাঁকে গ্রেপ্তার দেখানো হবে বলে প্রথম আলোকে জানিয়েছেন ডিএমপির গণমাধ্যম ও জনসংযোগ বিভাগের উপকমিশনার মো. ফারুক হোসেন।",
            "longDescription": "বিএনপির মহাসচিব মির্জা ফখরুল ইসলাম আলমগীরকে আটক করে ঢাকা মহানগর পুলিশের (ডিএমপি) গোয়েন্দা বিভাগের (ডিবি) মিন্টো রোডের কার্যালয়ে নেওয়া হয়েছে। তাঁকে গ্রেপ্তার দেখানো হবে বলে প্রথম আলোকে জানিয়েছেন ডিএমপির গণমাধ্যম ও জনসংযোগ বিভাগের উপকমিশনার মো. ফারুক হোসেন। বিএনপির চেয়ারপারসনের প্রেস উইংয়ের সদস্য শায়রুল কবির খান প্রথম আলোকে বলেন, আজ রোববার সকালে রাজধানীর গুলশান-২-এর বাসা থেকে মির্জা ফখরুলকে আটক করে ডিবি। পরে ডিবির গুলশান বিভাগের অতিরিক্ত উপকমিশনার হাফিজ আল আসাদ প্রথম আলোকে বলেন, মির্জা ফখরুলকে তাঁরা নিয়ে এসেছেন। ডিএমপির গণমাধ্যম ও জনসংযোগ বিভাগের উপকমিশনার মো. ফারুক হোসেন প্রথম আলোকে বলেন, ডিবির গুলশান বিভাগ মির্জা ফখরুলকে আটক করেছে। তাঁকে ডিবির মিন্টো রোডের কার্যালয়ে নেওয়া হয়েছে। তাঁর বিরুদ্ধে পুরোনো মামলা আছে। গতকাল শনিবারের সহিংসতার ঘটনায়ও মামলা হবে। তাঁকে গ্রেপ্তার দেখানো হবে। গতকাল রাজধানীর নয়াপল্টনে বিএনপির মহাসমাবেশ ছিল। মহাসমাবেশ শুরুর আগেই কাকরাইলে দুপুর থেকে বিএনপির নেতা- কর্মীদের সঙ্গে পুলিশের সংঘর্ষ হয়। এই সংঘর্ষ পরে বিজয়নগর পানির ট্যাংক ও শান্তিনগর এলাকায় ছড়িয়ে পড়ে। একপর্যায়ে বেলা তিনটার দিকে বিএনপির মহাসমাবেশ পণ্ড হয়ে যায়। বিএনপির মহাসমাবেশকে কেন্দ্র করে রক্তক্ষয়ী সংঘর্ষে পুলিশের এক সদস্য ও যুবদলের ওয়ার্ড পর্যায়ের এক নেতা নিহত হন। সংঘর্ষে আহত হয়েছেন পুলিশের ৪১ ও আনসারের ২৫ জন সদস্য। আহত হয়েছেন কমপক্ষে ২০ জন সাংবাদিক। সংঘর্ষে হাজারের বেশি নেতা - কর্মী আহত হয়েছেন বলে দাবি বিএনপির।",
            "image": "https://images.unsplash.com/photo-1695653421371-cd48246a6200",
            "timeToRead": "7 min",
            "category": "Business",
            "categorySlug": "business",
            "author": "Jane Smith"
        },
        {
            "id": 3,
            "title": "allNews News Title 3",
            "shortDescription": "Short description for the popular news article 3",
            "longDescription": "Detailed description for the popular news article 3",
            "image": "https://images.unsplash.com/photo-1698350335067-d44252583526",
            "timeToRead": "7 min",
            "category": "Business",
            "categorySlug": "business",
            "author": "Jane Smith"
        },
        {
            "id": 4,
            "title": "allNews News Title 4",
            "shortDescription": "Short description for the popular news article 4",
            "longDescription": "Detailed description for the popular news article 4",
            "image": "https://images.unsplash.com/photo-1698303715502-2ae80fb90af5",
            "timeToRead": "7 min",
            "category": "Business",
            "categorySlug": "business",
            "author": "Jane Smith"
        }
    ],
    "featuresNews": [
        {
            "id": 1,
            "title": "মির্জা ফখরুলকে গ্রেপ্তার দেখানো হবে: ডিএমপির মুখপাত্র",
            "shortDescription": "বিএনপির মহাসচিব মির্জা ফখরুল ইসলাম আলমগীরকে আটক করে ঢাকা মহানগর পুলিশের (ডিএমপি) গোয়েন্দা বিভাগের (ডিবি) মিন্টো রোডের কার্যালয়ে নেওয়া হয়েছে। তাঁকে গ্রেপ্তার দেখানো হবে বলে প্রথম আলোকে জানিয়েছেন ডিএমপির গণমাধ্যম ও জনসংযোগ বিভাগের উপকমিশনার মো. ফারুক হোসেন।",
            "longDescription": "বিএনপির মহাসচিব মির্জা ফখরুল ইসলাম আলমগীরকে আটক করে ঢাকা মহানগর পুলিশের (ডিএমপি) গোয়েন্দা বিভাগের (ডিবি) মিন্টো রোডের কার্যালয়ে নেওয়া হয়েছে। তাঁকে গ্রেপ্তার দেখানো হবে বলে প্রথম আলোকে জানিয়েছেন ডিএমপির গণমাধ্যম ও জনসংযোগ বিভাগের উপকমিশনার মো. ফারুক হোসেন। বিএনপির চেয়ারপারসনের প্রেস উইংয়ের সদস্য শায়রুল কবির খান প্রথম আলোকে বলেন, আজ রোববার সকালে রাজধানীর গুলশান-২-এর বাসা থেকে মির্জা ফখরুলকে আটক করে ডিবি। পরে ডিবির গুলশান বিভাগের অতিরিক্ত উপকমিশনার হাফিজ আল আসাদ প্রথম আলোকে বলেন, মির্জা ফখরুলকে তাঁরা নিয়ে এসেছেন। ডিএমপির গণমাধ্যম ও জনসংযোগ বিভাগের উপকমিশনার মো. ফারুক হোসেন প্রথম আলোকে বলেন, ডিবির গুলশান বিভাগ মির্জা ফখরুলকে আটক করেছে। তাঁকে ডিবির মিন্টো রোডের কার্যালয়ে নেওয়া হয়েছে। তাঁর বিরুদ্ধে পুরোনো মামলা আছে। গতকাল শনিবারের সহিংসতার ঘটনায়ও মামলা হবে। তাঁকে গ্রেপ্তার দেখানো হবে। গতকাল রাজধানীর নয়াপল্টনে বিএনপির মহাসমাবেশ ছিল। মহাসমাবেশ শুরুর আগেই কাকরাইলে দুপুর থেকে বিএনপির নেতা- কর্মীদের সঙ্গে পুলিশের সংঘর্ষ হয়। এই সংঘর্ষ পরে বিজয়নগর পানির ট্যাংক ও শান্তিনগর এলাকায় ছড়িয়ে পড়ে। একপর্যায়ে বেলা তিনটার দিকে বিএনপির মহাসমাবেশ পণ্ড হয়ে যায়। বিএনপির মহাসমাবেশকে কেন্দ্র করে রক্তক্ষয়ী সংঘর্ষে পুলিশের এক সদস্য ও যুবদলের ওয়ার্ড পর্যায়ের এক নেতা নিহত হন। সংঘর্ষে আহত হয়েছেন পুলিশের ৪১ ও আনসারের ২৫ জন সদস্য। আহত হয়েছেন কমপক্ষে ২০ জন সাংবাদিক। সংঘর্ষে হাজারের বেশি নেতা - কর্মী আহত হয়েছেন বলে দাবি বিএনপির।",
            "image": "https://images.unsplash.com/photo-1698509147474-f6e27ec2aaf6",
            "timeToRead": "5 min",
            "category": "Politics",
            "categorySlug": "politics",
            "author": "John Doe"
        },
        {
            "id": 2,
            "title": "featuresNews News Title 1",
            "shortDescription": "Short description for the popular news article 1",
            "longDescription": "Detailed description for the popular news article 1",
            "image": "https://images.unsplash.com/photo-1682685796965-9814afcbff55",
            "timeToRead": "5 min",
            "category": "Politics",
            "categorySlug": "politics",
            "author": "John Doe"
        },
        {
            "id": 3,
            "title": "featuresNews News Title 2",
            "shortDescription": "Short description for the popular news article 2",
            "longDescription": "Detailed description for the popular news article 2",
            "image": "https://images.unsplash.com/photo-1698428058528-d4e2150596a0",
            "timeToRead": "7 min",
            "category": "Business",
            "categorySlug": "business",
            "author": "Jane Smith"
        },
        {
            "id": 4,
            "title": "featuresNews News Title 3",
            "shortDescription": "Short description for the popular news article 3",
            "longDescription": "Detailed description for the popular news article 3",
            "image": "https://images.unsplash.com/photo-1698423847337-37200b432d58",
            "timeToRead": "7 min",
            "category": "Business",
            "categorySlug": "business",
            "author": "Jane Smith"
        },
        {
            "id": 5,
            "title": "featuresNews News Title 4",
            "shortDescription": "Short description for the popular news article 4",
            "longDescription": "Detailed description for the popular news article 4",
            "image": "https://images.unsplash.com/photo-1695653422718-48c2cc37caf7",
            "timeToRead": "7 min",
            "category": "Business",
            "categorySlug": "business",
            "author": "Jane Smith"
        },
        {
            "id": 6,
            "title": "featuresNews News Title 5",
            "shortDescription": "Short description for the popular news article 5",
            "longDescription": "Detailed description for the popular news article 5",
            "image": "https://images.unsplash.com/photo-1698298836213-f721f3f40e0a",
            "timeToRead": "7 min",
            "category": "Business",
            "categorySlug": "business",
            "author": "Jane Smith"
        },
        {
            "id": 7,
            "title": "featuresNews News Title 6",
            "shortDescription": "Short description for the popular news article 6",
            "longDescription": "Detailed description for the popular news article 6",
            "image": "https://images.unsplash.com/photo-1682685797088-283404e24b9d",
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
            "longDescription": "Detailed description for the popular news article 1",
            "image": "https://images.unsplash.com/photo-1698322281586-71da9adc8310",
            "timeToRead": "5 min",
            "category": "Politics",
            "categorySlug": "politics",
            "author": "John Doe"
        },
        {
            "id": 2,
            "title": "Popular News Title 2",
            "shortDescription": "Short description for the popular news article 2",
            "longDescription": "Detailed description for the popular news article 2",
            "image": "https://images.unsplash.com/photo-1698320602915-674e48adffd3",
            "timeToRead": "7 min",
            "category": "Business",
            "categorySlug": "business",
            "author": "Jane Smith"
        },
        {
            "id": 3,
            "title": "Popular News Title 3",
            "shortDescription": "Short description for the popular news article 3",
            "longDescription": "Detailed description for the popular news article 3",
            "image": "https://images.unsplash.com/photo-1698154934337-834cf9285172",
            "timeToRead": "7 min",
            "category": "Business",
            "categorySlug": "business",
            "author": "Jane Smith"
        },
        {
            "id": 4,
            "title": "Popular News Title 4",
            "shortDescription": "Short description for the popular news article 4",
            "longDescription": "Detailed description for the popular news article 4",
            "image": "https://images.unsplash.com/photo-1698222489084-4e70447821a8",
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
            "longDescription": "Detailed description for the popular news article 1",
            "image": "https://images.unsplash.com/photo-1698431126215-756e43ffb849",
            "timeToRead": "5 min",
            "category": "Politics",
            "categorySlug": "politics",
            "author": "John Doe"
        },
        {
            "id": 2,
            "title": "RecentNews News Title 2",
            "shortDescription": "Short description for the popular news article 2",
            "longDescription": "Detailed description for the popular news article 2",
            "image": "https://images.unsplash.com/photo-1682685797661-9e0c87f59c60",
            "timeToRead": "7 min",
            "category": "Business",
            "categorySlug": "business",
            "author": "Jane Smith"
        },
        {
            "id": 3,
            "title": "RecentNews News Title 3",
            "shortDescription": "Short description for the popular news article 3",
            "longDescription": "Detailed description for the popular news article 3",
            "image": "https://images.unsplash.com/photo-1698425021352-93d219b81dd0",
            "timeToRead": "7 min",
            "category": "Business",
            "categorySlug": "business",
            "author": "Jane Smith"
        },
        {
            "id": 4,
            "title": "RecentNews News Title 4",
            "shortDescription": "Short description for the popular news article 4",
            "longDescription": "Detailed description for the popular news article 4",
            "image": "https://images.unsplash.com/photo-1698484748914-032511e960a4",
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
            "longDescription": "Detailed description for the popular news article 1",
            "image": "https://images.unsplash.com/photo-1698422454454-a4e2a661aba8",
            "timeToRead": "5 min",
            "category": "Politics",
            "categorySlug": "politics",
            "author": "John Doe"
        },
        {
            "id": 2,
            "title": "mostViewedNews News Title 2",
            "shortDescription": "Short description for the popular news article 2",
            "longDescription": "Detailed description for the popular news article 2",
            "image": "https://images.unsplash.com/photo-1695653422853-3d8f373fb434",
            "timeToRead": "7 min",
            "category": "Business",
            "categorySlug": "business",
            "author": "Jane Smith"
        },
        {
            "id": 3,
            "title": "mostViewedNews News Title 3",
            "shortDescription": "Short description for the popular news article 3",
            "longDescription": "Detailed description for the popular news article 3",
            "image": "https://images.unsplash.com/photo-1698341286131-3621e665ba7b",
            "timeToRead": "7 min",
            "category": "Business",
            "categorySlug": "business",
            "author": "Jane Smith"
        },
        {
            "id": 4,
            "title": "mostViewedNews News Title 4",
            "shortDescription": "Short description for the popular news article 4",
            "longDescription": "Detailed description for the popular news article 4",
            "image": "https://images.unsplash.com/photo-1698424711327-a8766500e22f",
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
                "longDescription": "Detailed description for the popular news article 1",
                "image": "https://images.unsplash.com/photo-1682686580003-22d3d65399a8",
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
                "longDescription": "Detailed description for the popular news article 1",
                "image": "https://images.unsplash.com/photo-1698342381285-ebc8cdaa1f98",
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