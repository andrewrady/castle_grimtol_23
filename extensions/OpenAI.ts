import OpenAI from 'openai';

export class OpenAi {

    private readonly openai = new OpenAI({
        apiKey: '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'
    });

    public async getImage(prompt: string): Promise<Array<string | undefined>> {
        const response = await this.openai.images.generate({
            prompt: prompt,
            n: 5,
            size: '1024x1024'
        });

        const image = response.data.map(x => x.url);

        return image;
    }
}
