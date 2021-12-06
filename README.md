# Sing Me a Song
## About this Project
SIng me A Song is an API that give you recommendations musics.


## Database Layout

first of all, you can create a dev DATABASE just openning "createDatabase.txt" file and copying the scripts there.

## Functionalities

postRecommendation: create a music recommendation.The body must be in the following format:
```
{
  name: 'bandName - songName',
  youtubeLink: 'songYoutubeLink'
}
```

postUpvote: increses music score.

postDownvote: decreases music score.

getRandomRecommendation: You will receive a random recommendation music. the recommendation logic is as follows:
> * **70% of the time**: a song with a score higher than 10 is randomly recommended;
> * **30% of the time**: a song with a score between -5 and 10 (inclusive) is randomly recommended;
> * If there are only songs with a score above 10 or only below/equal to 10, 100% of the time any song is recommended;


getRecommendationAmount: You can get a list of recommendation musics.

## Installing

**Cloning the Repository**

```
$ git clone https://github.com/digdiego13/sing-me-a-song.git
```

**Installing dependencies**

```
$ npm install
```

**Run the application in production mode**
the production mode is deployed by HEROKU on URL: "https://singmeamusic.herokuapp.com/"
```
$ ntl -> start
```
**Run the application in development mode**

Create a .env.dev file and fill it using your environment variables following the .env.example

```
$ ntl -> start:dev
```

**Run test mode**

```
$ ntl -> test:watch
```

## Technologies
Main thechnologies used in the construction of the project:<br>
<p>
  <img src="https://img.shields.io/badge/-Nodejs-green?style=for-the-badge" />
  <img src="https://img.shields.io/badge/-Express-green?style=for-the-badge" />
  <img src="https://img.shields.io/badge/-PostgreSQL-green?style=for-the-badge" />
  <img src="https://img.shields.io/badge/-Jest-green?style=for-the-badge" />
</p>

