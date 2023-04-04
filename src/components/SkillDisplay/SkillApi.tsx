import axios from 'axios';

// Define la interfaz de las imágenes
interface Skill {
  id: number;
  name: string;
  logo_url: string;
  experience: string;
}

// Obtiene las habilidades con Axios
export const getSkills = async (): Promise<Skill[]> => {
  try {
    const response = await axios.get<Skill[]>('http://192.168.1.65:8088/api/skill/?format=json');
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};
