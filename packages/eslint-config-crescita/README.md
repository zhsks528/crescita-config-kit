# @crescita/eslint-config-crescita

## 설치

```bash
# npm
npm install --save-dev eslint @crescita/eslint-config-crescita

# pnpm
pnpm add --save-dev eslint @crescita/eslint-config-crescita
```

## 사용

### 설정

`eslint.config.js(또는 mjs)` 파일 생성 후, 다음의 코드를 입력합니다.

<!-- eslint-ignore -->

```js
import eslintRules from "@crescita/eslint-config-crescita";

export default [
  ...eslintRules,
  {
    rules: {
      // add to custom rules
    },
  },
];
```

### 명령어 정의

`package.json` 파일의 `scripts` 속성에 아래의 명령어를 추가합니다.

```json
{
  "scripts": {
    "lint:es": "eslint .",
    "lint:es:fix": "eslint . --fix"
  }
}
```
