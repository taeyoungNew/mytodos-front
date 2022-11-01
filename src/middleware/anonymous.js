// 로그인안한 사용자인지 검사하는 middleware
// 사용예시:
// 로그인한 사람이 로그인페이지로 접근하는 것을 방지
export default function ({ store, redirect }) {
  // users모듈의 setMe에 데이터가 있으면 redirect가 메인페이지로 보내버린다.
  if (store.state.setMe) {
    redirect("/");
  }
}
