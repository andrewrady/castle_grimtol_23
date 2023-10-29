import { OpenAIApi, Configuration } from 'openai';

export class OpenAi {

    private readonly openai = new OpenAIApi(new Configuration({
        apiKey: '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'
    }))

    public async getImage(prompt: string): Promise<Array<string | undefined>> {

        const response = await this.openai.createImage({
            prompt: prompt,
            n: 5,
            size: '1024x1024'
        });

        const image = response.data.data.map(x => x.url);

        return image;
    }

    public async getChat(prompt: string): Promise<string | undefined> {
        const response = await this.openai.createChatCompletion({
            model: 'gpt-3.5-turbo',
            messages: [{ role: 'user', content: prompt }]
        });

        console.log(response.data.choices)
        return response.data.choices[0].message?.content;
    }
}
