import express, { Request, Response } from 'express';
//import { OpenAi } from './extensions/OpenAI';

const app = express();
const port = process.env.PORT || 3000;
app.use(express.static('assets'));
app.set('view engine', 'ejs');
//const openid = new OpenAi();

app.get('/', async (req: Request, res: Response) => {
    //const image:string = await openid.getImage();
    const image = '123'

    //res.sendFile(path.join(__dirname, '/index.html'));
    res.render('index', {
        image: image
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
