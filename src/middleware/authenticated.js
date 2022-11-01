// 로그인한 사용자인지 검사하는 middleware
// 파일 구조는 export default로 함수를 내보낸다.
// 매개변수는 context를 구조분해해서 vuex store에 접근
// 사용예시:
// 로그인 안한사람이 프로필페이지로 접근하는 것을 방지
export default function ({ store, redirect }) {
  // users모듈의 setMe가 비어있으면 redirect가 메인페이지로 보내버린다.
  if (!store.state.setMe) {
    redirect("/");
  }
}
