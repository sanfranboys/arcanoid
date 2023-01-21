# arcanoid

<summary>Механика игры</summary>

- сверху игрового поля стоят несколько рядов кирпичей;
- по полю движется шарик, который при касании убирает кирпич и отскакивает в противоположную сторону;
- от стен и верха шарик тоже отскакивает;
- внизу есть подвижная платформа, как ракетка;
- чтобы шарик не упал вниз, игрок двигает платформу мышкой влево или вправо, подставляя её под шарик;
- если шарик падает мимо платформы — игрок теряет 1 попытку, после 3х попыток игра заканчивается;
- цель игры — сбить как можно больше кирпичей

# Usage
Local run
```shell script
npm run dev
```

Build
```shell script
npm run build
```

Linters checking
```shell script
npm run lint
```
## Run PostgresSQL
```shell script
docker-compose up 
```
Server's local run

```shell script
npm run ssr 
```

## The Team

Domion-M, Dihlofos, malig
