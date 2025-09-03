import type { NextApiRequest, NextApiResponse } from 'next'
import ImageKit from 'imagekit'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { fileId, transformation } = req.body
    
    if (!fileId || !transformation) {
      return res.status(400).json({ error: "Missing fileId or transformation" })
    }

    const imagekit = new ImageKit({
      publicKey: process.env.IMAGEKIT_PUBLIC_KEY || "",
      privateKey: process.env.IMAGEKIT_PRIVATE_KEY || "",
      urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT || "",
    })

    // Get the file details first
    const fileDetails = await imagekit.getFileDetails(fileId)
    
    if (!fileDetails) {
      return res.status(404).json({ error: "File not found" })
    }

    // Build transformation string based on the transformation type
    let transformationString = ""
    
    switch (transformation) {
      case "removebg":
        transformationString = "bg-remove"
        break
      case "bgremove":
        transformationString = "bg-remove"
        break
      case "changebg":
        transformationString = "bg-replace:beach"
        break
      case "dropshadow":
        transformationString = "shadow"
        break
      case "retouch":
        transformationString = "enhance"
        break
      case "upscale":
        transformationString = "upscale"
        break
      case "facecrop":
        transformationString = "focus-face"
        break
      case "smartcrop":
        transformationString = "crop-maintain_ratio"
        break
      default:
        return res.status(400).json({ error: "Invalid transformation type" })
    }

    // Generate the transformed URL
    const transformedUrl = imagekit.url({
      path: fileDetails.filePath,
      transformation: [{
        raw: transformationString
      }]
    })

    res.json({ transformedUrl })
  } catch (error) {
    console.error("Transformation error:", error)
    res.status(500).json({ error: "Failed to apply transformation" })
  }
}