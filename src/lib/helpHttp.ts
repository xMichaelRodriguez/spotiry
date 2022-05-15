interface IHelpHttp {
  endPoint: string
  options?: any
}

export const helpHttp = () => {
  const customFetch = ({ endPoint, options }: IHelpHttp) => {
    const defaultHeader = {
      accept: 'application/json',
    }

    const controller = new AbortController()
    options.signal = controller.signal

    options.method = options.method || 'GET'
    options.headers = options.headers ? { ...defaultHeader, ...options.headers } : defaultHeader

    options.body = JSON.stringify(options.body) || false
    if (!options.body) delete options.body

    //console.log(options);
    setTimeout(() => controller.abort(), 3000)

    return fetch(endPoint, options)
      .then((res) =>
        res.ok
          ? res.json()
          : Promise.reject({
              err: true,
              status: res.status || '00',
              statusText: res.statusText || 'Ocurrió un error',
            })
      )
      .catch((err) => err)
  }

  const get = ({ endPoint, options = {} }: IHelpHttp) => customFetch({ endPoint, options })

  const post = ({ endPoint, options = {} }: IHelpHttp) => {
    options.method = 'POST'
    return customFetch({ endPoint, options })
  }

  const put = ({ endPoint, options = {} }: IHelpHttp) => {
    options.method = 'PUT'
    return customFetch({ endPoint, options })
  }

  const del = ({ endPoint, options = {} }: IHelpHttp) => {
    options.method = 'DELETE'
    return customFetch({ endPoint, options })
  }

  return {
    get,
    post,
    put,
    del,
  }
}
