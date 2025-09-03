import type { NextApiRequest, NextApiResponse } from 'next'
import ImageKit from 'imagekit'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const imagekit = new ImageKit({
      publicKey: process.env.IMAGEKIT_PUBLIC_KEY || "",
      privateKey: process.env.IMAGEKIT_PRIVATE_KEY || "",
      urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT || "",
    })

    const authenticationParameters = imagekit.getAuthenticationParameters()
    res.json(authenticationParameters)
  } catch (error) {
    console.error("ImageKit auth error:", error)
    res.status(500).json({ error: "Failed to authenticate with ImageKit" })
  }
}