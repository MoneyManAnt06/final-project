import axios from 'axios';

export default async function createCartDetails() {
  try {
    const {
      data: { body },
    } = await axios.post(`http://localhost:3000/api/cart_details`, {});
    return body.data;
  } catch (error) {}
  return [];
}
