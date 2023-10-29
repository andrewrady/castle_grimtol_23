import express, { Request, Response } from 'express';
import { OpenAi } from './extensions/OpenAI';

const app = express();
const port = process.env.PORT || 3000;
app.use(express.static('assets'));
app.set('view engine', 'ejs');
const openid = new OpenAi();

app.get('/', async (req: Request, res: Response) => {
    const images: Array<string | undefined> = await openid.getImage('vampire girl');

    res.render('index', {
        images: images
    });
});

app.get('/chatPage', async (req: Request, res: Response) => {

    const response = await openid.getChat('respond to me like we\'re on a date. Hi beautiful');
    res.render('chatPage', {
        response: response
    });
});

app.post('/chatPage', async (req: Request, res: Response) => {
    const response = await openid.getChat(`respond to me like we\'re on a date. ${req.body}`);
    res.status(200).json(response)
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
