import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const username = searchParams.get('username');

  if (!username) {
    return NextResponse.json({ error: 'Username is required' }, { status: 400 });
  }

  try {
    // Method 1: Try to get avatar from Instagram's public profile
    const profileUrl = `https://www.instagram.com/${username}/`;
    
    // Use a proxy service or direct Instagram API
    // Note: Instagram has strict CORS policies, so we might need to use a proxy
    const response = await fetch(profileUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
      },
    });

    if (response.ok) {
      const html = await response.text();
      
      // Extract profile picture URL from the HTML
      const profilePicMatch = html.match(/"profile_pic_url":"([^"]+)"/);
      
      if (profilePicMatch && profilePicMatch[1]) {
        const avatarUrl = profilePicMatch[1].replace(/\\u0026/g, '&');
        return NextResponse.json({ avatarUrl });
      }
    }

    // Fallback: Try alternative method using Instagram's CDN
    const cdnUrl = `https://instagram.com/${username}/media/?size=l`;
    const cdnResponse = await fetch(cdnUrl);
    
    if (cdnResponse.ok) {
      const cdnHtml = await cdnResponse.text();
      const cdnMatch = cdnHtml.match(/"src":"([^"]+)"/);
      
      if (cdnMatch && cdnMatch[1]) {
        const avatarUrl = cdnMatch[1].replace(/\\u0026/g, '&');
        return NextResponse.json({ avatarUrl });
      }
    }

    // If all methods fail, return error
    return NextResponse.json({ error: 'Could not fetch avatar' }, { status: 404 });

  } catch (error) {
    console.error('Error fetching Instagram avatar:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
