# Ecommerce

Ecommerce is a simple React template to build ecommerce on top of it.

[Open Live Project](https://clothing-ecommerce-template.herokuapp.com/)

## What It Uses:

- Flexbox & Grids
- React
- Redux
- Redux Thunk
- Redux Saga
- PWA
- Node.js / Express.js
- Firebase
- Stripe

## Installation

Make sure to have [git](https://git-scm.com/downloads) and [node](https://nodejs.org/en/) installed, then run:

```bash
git clone https://github.com/ale917k/ecommerce
cd ./ecommerce
npm install
```

Add an `.env` file which looks as follow:

```
# Server
STRIPE_API_KEY=<stripe-api-key> # You can grab Stripe API key here: (https://stripe.com/gb)
```

In order to handle your users and db, you will require an account with [Firebase](https://firebase.google.com/); You can then grab your project config and replace it on `./client/src/firebase/firebase.utils.js`

You can then run `npm start`; That will boot up client and server concurrently.

## License

[MIT](https://choosealicense.com/licenses/mit/)
