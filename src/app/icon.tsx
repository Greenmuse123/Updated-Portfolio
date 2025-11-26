import { ImageResponse } from 'next/og'
import { Metadata } from 'next';

// Image metadata
export const size = {
  width: 32,
  height: 32,
}
export const contentType = 'image/png'

// Metadata for search engines
export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
  alternates: { canonical: "https://eliasmusleh.com/icon" }
};

// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          fontSize: 24,
          background: 'black',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          borderRadius: '50%',
        }}
      >
        EM
      </div>
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported size metadata
      // instead of manually specifying the width and height
      ...size,
    }
  )
}
