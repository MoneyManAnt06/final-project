import axios from 'axios';

export default async function createCartDetails() {
  try {
    const {
      data: { body },
    } = await axios.post(
      `${process.env.NEXT_PUBLIC_URL_BASE}/cart_details`,
      {}
    );
    return body.data;
  } catch (error) {}
  return [];
}
