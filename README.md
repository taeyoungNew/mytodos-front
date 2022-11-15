# WAYUT(front)
# 투두리스트 작성 및 당일 달성률과 지금까지의 투두리스트를 확인할 수 있는 사이트
#### 개발기간: 2022.10 ~ 2022.11

## Description

#### 투두리스트를 작성, 수정, 삭제가능 

#### 로그인하여 언제든 투두리스트 진행사항을 확인가능

#### 투두리스트 기록 확인가능 

#### 타유저에게 자신의 투두리스트 공유가능 (개발중) 

## Development Environment
```
"vue": "^2.6.14",
"vue-chartjs": "^4.1.2",
"vue-cookie": "^1.1.4",
"vue-router": "^3.5.1",
"vuetify": "^2.6.11",
"vuex": "^3.6.2"
```

## APIs
### WAYUT (백엔드)


## Files
### views
> MainView.vue: 당일 투두리스트작성 및 달성차트 확인하는 페이지 
> 
> ExMyTodoList.vue: 지금까지의 투두리스트를 날짜별로 확인하는 페이지
> 
> SignupView.vue: 로그인 및 회원가입 페이지

### compomemts
> TodoCard.vue: MainView안의 투두카드컴포넌트
>
> SignupForm.vue: 회원가입폼 컴포넌트
>
> ChartComponent.vue: MainView안의 차트컴포넌트
>
> LoginFomr.vue 로그인폼 컴포넌트 
>
> common
>> AppHeader.vue: 앱헤더
>
>> ListBox.vue: ExMyTodoList안의 투두리스트기록 컴포넌트
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

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
