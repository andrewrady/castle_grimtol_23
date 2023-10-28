import express, { Request, Response } from 'express';
import { OpenAi } from './extensions/OpenAI';

const app = express();
const port = process.env.PORT || 3000;
app.use(express.static('assets'));
app.set('view engine', 'ejs');
const openid = new OpenAi();

app.get('/', async (req: Request, res: Response) => {
    const images:Array<string | undefined> = await openid.getImage('vampire girl');

    res.render('index', {
        images: images
    });
});

app.get('/chatPage', async (req: Request, res: Response) => {


    //res.sendFile(path.join(__dirname, '/index.html'));
    res.render('chatPage', {

    });
});


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
