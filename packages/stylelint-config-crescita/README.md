# @crescita/stylelint-config-crescita

## 설치

```bash
# npm
npm install --save-dev stylelint @crescita/stylelint-config-crescita

# pnpm
pnpm add --save-dev stylelint @crescita/stylelint-config-crescita
```

## 사용

### 설정

`.stylelintrc` 파일 생성 후, 다음의 코드를 입력합니다.

<!-- stylelint-ignore -->
```js
"@crescita/stylelint-config-crescita"
```

또는 `package.json` 파일의 stylelint 속성에 입력합니다.

```json
{
  "stylelint": "@crescita/stylelint-config-crescita"
}
```

### 명령어 정의

`package.json` 파일의 `scripts` 속성에 아래의 명령어를 추가합니다.

```json
{
  "scripts": {
    "lint:style": "stylelint './**/*.{js,ts,tsx}'",
    "lint:style:fix": "stylelint './**/*.{js,ts,tsx}' --fix"
  }
}
```
