# @crescita/prettier-config-crescita

## 설치

```bash
# npm
npm install --save-dev prettier @crescita/prettier-config-crescita

# pnpm
pnpm add --save-dev prettier @crescita/prettier-config-crescita
```

## 사용

### 설정

`.prettierrc` 파일 생성 후, 다음의 코드를 입력합니다.

<!-- prettier-ignore -->
```js
"@crescita/prettier-config-crescita"
```

또는 `package.json` 파일의 prettier 속성에 입력합니다.

```json
{
  "prettier": "@crescita/prettier-config-crescita"
}
```

### 명령어 정의

`package.json` 파일의 `scripts` 속성에 아래의 명령어를 추가합니다.

```json
{
  "scripts": {
    "format": "prettier . --check",
    "format:fix": "prettier . --write"
  }
}
```
