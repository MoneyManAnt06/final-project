import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/utils/supabase/server';

export const POST = async (req: NextRequest): Promise<NextResponse> => {
  const supabase = createClient();
  const formData = await req.formData();

  const file = formData.get('file');

  if (!file)
    return NextResponse.json({ error: 'No files received.' }, { status: 400 });

  const { data: image, error } = await supabase.storage
    .from('images')
    .upload(`${Date.now()}product.jpg`, file!);

  const { data } = supabase.storage.from('images').getPublicUrl(image?.path!);

  if (error)
    return NextResponse.json(
      { error: error.message },
      {
        status: 500,
      }
    );

  return NextResponse.json({
    status: 200,
    body: { data },
  });
};
