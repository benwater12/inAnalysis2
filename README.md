# inanalysis2

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### Some important notes.
* 在 ```inAnalysis2/src/config/env.js```有幾個需要調整的參數。

| 名稱 | 功能 | 效果 |
| -------- | -------- | -------- |
| signupTime      | 開啟註冊時間     | 需要設定在未來的時間，主畫面才會出現註冊功能     |
|deadline |死線|只要現在日期超過這個時間點，登入的人就無法操作inanalysis2的內容。|
