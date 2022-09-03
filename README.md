### Unithon 9th Team 11 Front-end

### 💬 커밋 메시지

- `feat` : 기능 개발
- `fix` : 버그를 수정
- `style` : css 스타일 수정
- `format` : 코드 줄간격,줄 위치 따옴표 등등 코드 스타일 수정
- `test`: 테스트코드 작성
- `docs`: 문서 작업
- `refactor` : 리팩토링 (기능 변경 없이 코드의 가독성을 위한 변수명 수정 등등)
- `lib` : 라이브러리 업데이트 , 라이브러리 추가
- `config` : 환경 변수 , ts,webpack config 세팅 등등
- `[prefix]: 어떤 내용을 수정합니다**.**` 와 같이 ~ **합니다**. 로 끝내기로 한다.

```markdown
ex)
feat: 댓글 추천 mutation hook을 추가합니다.
fix: 댓글 추천 로딩 에러를 수정합니다.
style: 게시판 헤더 줄 간격 스타일을 수정합니다.
```

### 브랜치 전략

- 브랜치
- `main` ,`develop` ,`feature/[branch-name]` , `fix/[branch-name]`
- 기본적으로 `develop` 브랜치에서 분기
- `feature/branch` 에서 작업 완료 후 base branch 를 `develop` 으로 PR
- 리뷰, 확인 후 `develop` 브랜치에서는 `squash merge` 후 브랜치 삭제

- 상용, 테스트 서버 나눠서 개발시
  - develop 은 테스트 서버가 된다.
  - 상용서버에 배포시 `develop ⇒ main` 으로 바로 PR, 혹은 반영할 내용만 `체리픽 커밋 후 PR`

### [공통폴더 구조](https://confirmed-textbook-87e.notion.site/f5beeca4a66d4f609d96bca15fb28086)
