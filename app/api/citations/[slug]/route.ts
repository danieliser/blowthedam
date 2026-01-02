import { NextResponse } from 'next/server';
import { getCitationData } from '@/lib/sources';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const citation = await getCitationData(slug);

  if (!citation) {
    return NextResponse.json(
      { error: 'Source not found' },
      { status: 404 }
    );
  }

  return NextResponse.json(citation, {
    headers: {
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
    },
  });
}
