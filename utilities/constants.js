const HOST = {
  development: 'http://localhost:8080',
  production: 'https://loyalty-block-chain-server.herokuapp.com',
};

export const SERVER_ADDRESS = HOST[process.env.NODE_ENV];

export const SERVER_ENDPOINT = {
  CONFIG: 'config'
}

export const SOCKET_CLIENT_EVENT = {
  UPDATE_ALL: 'update-all',
  UPDATE_CHAIN: 'update-chain',
  UPDATE_BLOCK: 'update-block',
  UPDATE_TRANSACTIONS: 'update-transactions',
  USER_DISCONNECTED: 'user-disconnected',
  NEW_TRANSACTION: 'new-transaction',
  VALID_BLOCK: 'valid-block',
  WELCOME_USER: 'welcome',
  DISCONNECT: 'disconnect',
  REQUEST_VERIFY: 'request-verify',
  BROAD_CAST_NEW_BLOCK: 'new-block',
};

export const WORKER_EVENT = {
  GREETINGS: 'GREETINGS',
  START_MINING: 'START_MINING',
  MINE_SUCCEED: 'MINE_SUCCEED',
  MINE_FAILED: 'MINE_FAILED',
}

export const IMAGE_URL = {
  REWARD: 'https://res.cloudinary.com/dmiw0tnor/image/upload/v1624956732/Loyalty-block-chain/reward_fakcor.png',
  USER: 'https://res.cloudinary.com/dmiw0tnor/image/upload/v1624956732/Loyalty-block-chain/user_f9admb.png',
}
