# Project Overview

## Project Name

Cafe Loco

## Project Description

Cafe Loco is an application that renders data from Airtable onto the DOM. This data will be pertaining to coffee. The rendered data will show a title, image, and description. The site also will allow users to  submit their own coffee to the database.

The main function of the application is to allow users to vote on their preferred coffee and have the data organized according to number of likes. The application will render # of votes and place for each peice of coffee data.

## API and Data Sample

https://api.airtable.com/v0/appVlLE3mPJTySm4A/Cafe%20Loco

{
    "records": [
        {
            "id": "rec29h8deR3nkpreJ",
            "fields": {
                "image": "https://www.thespruceeats.com/thmb/CvRyhjbotop2ZQjIGTtw_cgNrQQ=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/CaramelIrishCoffee-5bce108cc9e77c00517ea06e.jpg",
                "votes": 11,
                "name": "Caramel Irish Coffee"
            },
            "createdTime": "2021-09-21T15:43:05.000Z"
        },
        {
            "id": "rec2cvXVpyHtikspG",
            "fields": {
                "image": "https://www.thespruceeats.com/thmb/KCrcQx7oZewhM4-YtSI8HPVGSPc=/975x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/CafeLatte-TheSpruce-a94ad25744d547608e34d94b5f35f55d.jpg",
                "votes": 10,
                "name": "Cafe Latte"
            },
            "createdTime": "2021-09-21T15:43:38.000Z"
        },
        {
            "id": "rec5oaV9LJQgSe5kQ",
            "fields": {
                "image": "https://www.thespruceeats.com/thmb/FQjAQBA9AdtbtttFyKrvoxyG_Ys=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/how-to-make-cappuccinos-766116-hero-01-a754d567739b4ee0b209305138ecb996.jpg",
                "votes": 5,
                "name": "The Perfect Cappuccino"
            },
            "createdTime": "2021-09-21T15:42:11.000Z"
        },
        {
            "id": "rec7fTfGVlCkW44Yn",
            "fields": {
                "image": "https://www.thespruceeats.com/thmb/VGcmTQ7I_6Ye4a6TN2GfLXfKesg=/977x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/TurkishCoffee-TheSpruce-185082b48e40495c8f25188627a66811.jpg",
                "votes": 7,
                "name": "Turkish Coffee"
            },
            "createdTime": "2021-09-21T15:44:28.000Z"
        },
        {
            "id": "recETsHOUUblumjzO",
            "fields": {
                "image": "https://www.thespruceeats.com/thmb/vL1Th4SwAkYbx8ecSf8GgB89B-E=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/cafe-au-lait-recipe-1374920-hero-01-0b1bbc7d69304240a1e864cef38eff88.jpg",
                "votes": 14,
                "name": "French Café au Lait"
            },
            "createdTime": "2021-09-16T19:20:13.000Z"
        },
        {
            "id": "recIqm6On4bATatvt",
            "fields": {
                "image": "https://www.thespruceeats.com/thmb/PtrWxXwKDRugmbHwN8DNE64OaRo=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/mexican-coffee-4783525-07-3c1c51246bff498bbcbc3ea55b8d1930.jpg",
                "votes": 22,
                "name": "Mexican Coffee"
            },
            "createdTime": "2021-09-21T15:45:18.000Z"
        },
        {
            "id": "recaNkgxTPrn7Drq4",
            "fields": {
                "image": "https://www.thespruceeats.com/thmb/2DSnxsgXZfmWN5KaPjFNEmSXssw=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Brazilian-coffee-582ca3813df78c6f6a678502.jpg",
                "votes": 6,
                "name": "New Orleans Cafe Noir"
            },
            "createdTime": "2021-09-21T15:42:40.000Z"
        },
        {
            "id": "recjwBjpuoLFsX5Ud",
            "fields": {
                "image": "https://www.thespruceeats.com/thmb/_ScrRNGx-2Lg9NW7ncxgpm9v0qc=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/CubanCoffee-001-4928e640d5b7491aa223fb594285a3bf.jpg",
                "votes": 2,
                "name": "Cuban Coffee"
            },
            "createdTime": "2021-09-16T19:20:13.000Z"
        },
        {
            "id": "rect0qyEQSzC9v7Yj",
            "fields": {
                "image": "https://www.thespruceeats.com/thmb/-hb0nkDUofZ_w4BS6sS3N3WKtkg=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/PourOverCoffee-003-d3f790fbb41f4b43963db49bf37550a5.jpg",
                "votes": 12,
                "name": "Pour-Over Coffee"
            },
            "createdTime": "2021-09-16T19:20:13.000Z"
        },
        {
            "id": "recus1vbUuQdOWx4j",
            "fields": {
                "image": "https://www.thespruceeats.com/thmb/huv4pcwyoPHP_UYbvk8gE6hj8oI=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/aIMG_2287fhor-5bbfe808c9e77c00512728b5.jpg",
                "votes": 12,
                "name": "White Chocolate Mocha"
            },
            "createdTime": "2021-09-21T15:43:32.000Z"
        }
    ]
}

## Wireframes

## Component Hierarchy

## API

## MVP/ Post-MVP

####MVP

- Interface that renders coffee data onto cards
- function to vote on favorite coffee. This then sorts the coffee accordingly.
- ability for users to submit a recipe to the database

###Post-MVP

- Learn more button on main page that sends them to an :id page
- Style the home page

## Project Schedule

| Day      | Deliverable                                | Status   |
| -------- | ------------------------------------------ | -------- |
| Oct 9-11 | Proposal Approval / Airtable Setup         | Complete |
| Oct 12   | Component Creation / Get, Set, Delete Data | Complete |
| Oct 13   | Oct. 12 cont'd / CSS Components            | Complete |
| Oct 14   | CSS Components cont'd / MVP                | Complete |
| Oct 15   | Styling                                    | Complete |

## Timeframes

|
| Proposal                  |    H     |      2hrs      |     2hrs      |    2hrs     |
| Airtable setup            |    H     |     .5hrs      |      1hr      |     1hr     |
| Clickable icons           |    H     |      1hrs      |      1hr      |     1hr     |
| Data population pg 1      |    H     |      3hrs      |     3hrs      |    3hrs     |
| Data population pg 2      |    H     |      3hrs      |     2hrs      |    2hrs     |
| Data population pg 3      |    H     |      3hrs      |     2hrs      |    2hrs     |
| Form creation pg 1        |    H     |      2hrs      |     2hrs      |    2hrs     |
| Form creation pg 2        |    H     |      2hrs      |     1 hr      |    1 hr     |
| Form creation pg 3        |    H     |      2hrs      |     1 hr      |     1hr     |
| Data creation/update pg 1 |    H     |      3hrs      |     3hrs      |    3hrs     |
| Data creation/update pg 2 |    H     |      3hrs      |      1hr      |     1hr     |
| Data creation/update pg 3 |    H     |      3hrs      |      1hr      |     1hr     |
| Data deletion pg 1        |    H     |      2hrs      |      1hr      |     1hr     |
| Data deletion pg 2        |    H     |      2hrs      |      1hr      |     1hr     |
| Data deletion pg 3        |    H     |      2hrs      |      1hr      |     1hr     |
| Component CSS pg 1        |    H     |      3hrs      |     4hrs      |    4hrs     |
| Component CSS pg 2        |    H     |      3hrs      |     4hrs      |    4hrs     |
| Component CSS pg 3        |    H     |      3hrs      |     4hrs      |    4hrs     |
| Total                     |    H     |    42.5hrs     |     35hrs     |    35hrs 

## SWOT Analysis
