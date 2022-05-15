import { useContext } from 'react';
import { GridMusic } from '../components/GridMusic';
import { SearchComponent } from '../components/SearchComponent';
import { AuthContext } from '../context/AuthContext';
import { IResponseSongs } from '../interfaces/interfaces';
import { helpHttp } from '../lib/helpHttp';

const baseUrl = import.meta.env.VITE_BASE_URL;

export const HomePage = () => {
  const { auth, handleSongs } = useContext(AuthContext);

  const handlePlay = async ({ query }: { query: string }) => {
    const options = {
      headers: {
        Authorization: `Bearer  ${auth}`,
      },
    };

    const resp = await helpHttp().get({
      endPoint: `${baseUrl}search?type=album&include_external=audio&q=${query}`,
      options,
    });
    const data: IResponseSongs = resp?.albums;

    handleSongs(data);
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
