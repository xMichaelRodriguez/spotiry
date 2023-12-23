### `Run Local Project`
  #### `Config Envs`
  
```.env
VITE_AUTH_ENDPOINT=https://accounts.spotify.com/authorize
VITE_CLIENTID=
VITE_REDIRECT_URI=
VITE_USER_LIBRARY=streaming user-read-email user-read-private user-library-read user-library-modify
VITE_PLAYLIST=playlist-read-private

VITE_SPOTIFY_CLIENT_SECRET=
VITE_BASE_URL=https://api.spotify.com/v1/

```
#### `Run`
```bash
# install dependencies
 pnpm i -E

# run project
 pnpm run dev
```
