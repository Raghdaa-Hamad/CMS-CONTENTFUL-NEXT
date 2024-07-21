import { NextResponse } from 'next/server';
import { getAllProductsInCategory } from '@/lib/api';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get('slug');
  const page = parseInt(searchParams.get('page') || '1', 10);

  if (!slug) {
    return NextResponse.json({ error: 'Category slug is required' }, { status: 400 });
  }

  try {
    const { products, pagination } = await getAllProductsInCategory(slug, true, { limit: 6, page });
    return NextResponse.json({ products, pagination });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch products' }, { status: 500 });
  }
}
