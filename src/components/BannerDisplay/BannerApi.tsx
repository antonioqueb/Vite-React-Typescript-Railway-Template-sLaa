import axios from 'axios';

export interface BannerProps {
  isDarkMode: boolean;
  title?: string;
  description?: string;
  galery?: string;
}

export interface GaleryResponse {
  galery: string;
}

export const fetchBanner = async (): Promise<BannerProps> => {
  const response = await axios.get<BannerProps>('https://www.queb.online/api/me/4/?format=json');
  return response.data;
};

export const fetchGalery = async (): Promise<string> => {
  const response = await axios.get<GaleryResponse>('https://www.queb.online/api/me/3/?format=json');
  return response.data.galery;
};
