import { useContext } from 'react';
import { GridMusic } from '../components/GridMusic';
import { SearchComponent } from '../components/SearchComponent';
import { AuthContext } from '../context/AuthContext';
import { IResponseSongs, Item } from '../interfaces/interfaces';
import { baseUrl } from '../lib/baseUrl';
import { helpHttp } from '../lib/helpHttp';

export const HomePage = () => {
  const { auth, handleSongs } = useContext(AuthContext);

  const handlePlay = async ({ query }: { query: string }) => {
    const options = {
      headers: {
        Authorization: `Bearer  ${auth}`,
      },
    };

    const resp: { albums: IResponseSongs } = await helpHttp().get({
      endPoint: `${baseUrl}search?type=album&include_external=audio&q=${query}`,
      options,
    });
    
    if (resp.albums) {
      handleSongs(resp.albums);
    } else {
      alert('token expirado');
      console.log(resp);
      localStorage.clear()
    }
  };
  return (
    <main>
      <SearchComponent handleSearch={handlePlay} />
      <div>
        <div>
          <GridMusic />
        </div>
      </div>
    </main>
  );
};

export default HomePage;
