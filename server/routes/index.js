let latestImagePrompt = "Hello Max!"

const generateImage = (imageData) => {
  latestImagePrompt = imageData.prompt
}

export default async function miscRoutes(fastify, options) {
  fastify.get('/get-last-image-prompt', async (request, reply) => {
    return { message: latestImagePrompt }
  })

  fastify.post('/create-image', async (request, reply) => {
    generateImage(request.body)

    return 'processing...'
  })
}