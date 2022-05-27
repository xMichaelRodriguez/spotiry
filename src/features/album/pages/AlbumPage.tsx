import { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import { AuthContext } from '../../../context/AuthContext';
import { baseUrl } from '../../../lib/baseUrl';
import { helpHttp } from '../../../lib/helpHttp';
import { Image, Artist, ITrack } from '../../../interfaces/';
import ALbumView from '../views/AlbumView';
interface IMusicAlbum {
  id: string;
  artists: Artist[];
  images: Image[];
  name: string;
  tracks: ITrack;
}

export const AlbumPage = () => {
  const { id } = useParams<{ id: string }>();
  const { auth } = useContext(AuthContext);
  const [album, setAlbum] = useState<IMusicAlbum>();
  const history = useHistory();

  useEffect(() => {
    async function getAlbums() {
      const options = {
        headers: {
          Authorization: `Bearer  ${auth}`,
        },
      };

      const albums = await helpHttp().get({ endPoint: `${baseUrl}albums/${id}`, options });
      setAlbum(albums);
    }
    getAlbums();
  }, [id]);

  const goBack = () => {
    history.goBack();
  };
  return <ALbumView album={album} history={goBack} />;
};

export default AlbumPage;
