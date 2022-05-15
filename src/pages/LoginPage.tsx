const { VITE_AUTH_ENDPOINT, VITE_CLIENTID, VITE_REDIRECT_URI, VITE_USER_LIBRARY, VITE_PLAYLIST } =
  import.meta.env

const loginEndPoint = `${VITE_AUTH_ENDPOINT}client_id=${VITE_CLIENTID}&redirect_uri=${VITE_REDIRECT_URI}&scope=${VITE_USER_LIBRARY}%20${VITE_PLAYLIST}&response_type=token&show_dialogg=true`
export const LoginPage = () => {
  return (
    <a href={loginEndPoint} style={{ textDecoration: 'none' }}>
      <div
        style={{
          width: '10rem',
          height: '2rem',
          backgroundColor: 'rgba(0,0,0,0.5)',
          color: 'white',
          padding: '10px',
          borderRadius: '30px',
          textAlign: 'center',
        }}
      >
        Login
      </div>
    </a>
  )
}

export default LoginPage
